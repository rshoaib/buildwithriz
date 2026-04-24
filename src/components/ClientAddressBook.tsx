'use client';

import { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import { Users, Save, Trash2, CheckCircle } from 'lucide-react';
import { ClientProfile } from '@/types/invoice';

const CLIENTS_KEY = 'buildwithriz-clients';
const LOCAL_EVENT = 'buildwithriz-clients-changed';

// useSyncExternalStore-backed reader for the clients list. Avoids the
// setState-in-effect pattern and keeps the list in sync across tabs.
function subscribeClients(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener(LOCAL_EVENT, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(LOCAL_EVENT, callback);
  };
}

// Cache the parsed array so successive calls during the same snapshot
// return the same reference (required by useSyncExternalStore).
let cachedRaw: string | null = null;
let cachedParsed: ClientProfile[] = [];
function getClientsSnapshot(): ClientProfile[] {
  const raw = typeof localStorage === 'undefined' ? null : localStorage.getItem(CLIENTS_KEY);
  if (raw === cachedRaw) return cachedParsed;
  cachedRaw = raw;
  try {
    cachedParsed = raw ? (JSON.parse(raw) as ClientProfile[]) : [];
  } catch {
    cachedParsed = [];
  }
  return cachedParsed;
}
const EMPTY_CLIENTS: ClientProfile[] = [];
function getClientsServerSnapshot(): ClientProfile[] {
  return EMPTY_CLIENTS;
}

function writeClients(clients: ClientProfile[]) {
  try {
    localStorage.setItem(CLIENTS_KEY, JSON.stringify(clients));
    window.dispatchEvent(new Event(LOCAL_EVENT));
  } catch {
    // ignore - quota exceeded or localStorage unavailable
  }
}

interface ClientAddressBookProps {
  currentClient: {
    name: string;
    email: string;
    address: string;
  };
  onSelectClient: (client: Omit<ClientProfile, 'id'>) => void;
}

export default function ClientAddressBook({ currentClient, onSelectClient }: ClientAddressBookProps) {
  const clients = useSyncExternalStore(
    subscribeClients,
    getClientsSnapshot,
    getClientsServerSnapshot,
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSavedFeedback, setShowSavedFeedback] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (!showDropdown) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDropdown]);

  const saveCurrentClient = () => {
    if (!currentClient.name.trim()) {
      alert("Please enter a Client Name before saving.");
      return;
    }

    const newClient: ClientProfile = {
      id: String(Date.now()),
      name: currentClient.name.trim(),
      email: currentClient.email.trim(),
      address: currentClient.address.trim(),
    };

    writeClients([newClient, ...clients]);

    setShowSavedFeedback(true);
    setTimeout(() => setShowSavedFeedback(false), 2000);
  };

  const deleteClient = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    writeClients(clients.filter(c => c.id !== id));
  };

  return (
    <div className="flex items-center gap-2 mb-3 relative w-full" ref={dropdownRef}>
      {/* Dropdown Toggle */}
      <button
        type="button"
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
      >
        <Users size={14} className="text-blue-500" />
        Select Client
        {clients.length > 0 && <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 rounded-full">{clients.length}</span>}
      </button>

      {/* Save Button */}
      <button
        type="button"
        onClick={saveCurrentClient}
        disabled={!currentClient.name.trim()}
        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-md text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900/40 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {showSavedFeedback ? (
          <>
            <CheckCircle size={14} className="text-green-500" />
            <span className="text-green-600 dark:text-green-400">Saved!</span>
          </>
        ) : (
          <>
            <Save size={14} />
            Save Client
          </>
        )}
      </button>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
          {clients.length === 0 ? (
            <div className="p-3 text-center text-xs text-gray-500 dark:text-gray-400">
              No saved clients yet.<br/>Fill out the details below and click &quot;Save Client&quot;.
            </div>
          ) : (
            <div className="max-h-48 overflow-y-auto">
              {clients.map(client => (
                <div 
                  key={client.id}
                  className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition group"
                >
                  <button
                    type="button"
                    className="flex-1 text-left px-3 py-2"
                    onClick={() => {
                      onSelectClient({ name: client.name, email: client.email, address: client.address });
                      setShowDropdown(false);
                    }}
                  >
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{client.name}</div>
                    {client.email && <div className="text-[10px] text-gray-500">{client.email}</div>}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => deleteClient(client.id, e)}
                    className="p-2 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
