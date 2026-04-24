'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';

const STORAGE_KEY = 'buildwithriz-dark';
const LOCAL_EVENT = 'buildwithriz-dark-changed';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener(LOCAL_EVENT, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(LOCAL_EVENT, callback);
  };
}

function getDarkSnapshot(): boolean {
  return localStorage.getItem(STORAGE_KEY) === 'true';
}

function getDarkServerSnapshot(): boolean {
  return false;
}

// Separate store just for the "is client" flag - replaces the old `mounted`
// state pattern so we don't call setState inside an effect.
const emptySubscribe = () => () => {};
const getIsClient = () => true;
const getIsClientServer = () => false;

export default function DarkModeToggle() {
    const isClient = useSyncExternalStore(emptySubscribe, getIsClient, getIsClientServer);
    const dark = useSyncExternalStore(subscribe, getDarkSnapshot, getDarkServerSnapshot);

    // Sync the DOM class whenever `dark` changes. No setState here - this
    // effect only pushes state to an external system (the <html> classList).
    useEffect(() => {
        if (!isClient) return;
        document.documentElement.classList.toggle('dark', dark);
    }, [dark, isClient]);

    const toggle = () => {
        const next = !dark;
        localStorage.setItem(STORAGE_KEY, String(next));
        // Notify the useSyncExternalStore subscribers in this tab.
        window.dispatchEvent(new Event(LOCAL_EVENT));
    };

    if (!isClient) return <div className="w-8 h-8" />;

    return (
        <button
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="relative w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
    );
}
