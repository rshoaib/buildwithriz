'use client';

import { TemplateStyle } from '@/types/invoice';
import { themes } from '@/data/themes';
import { Check } from 'lucide-react';

interface ThemeSelectorProps {
    selected: TemplateStyle;
    onChange: (theme: TemplateStyle) => void;
}

export default function ThemeSelector({ selected, onChange }: ThemeSelectorProps) {
    return (
        <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Theme</span>
            <div className="flex items-center gap-2">
                {themes.map((theme) => (
                    <button
                        key={theme.id}
                        onClick={() => onChange(theme.id)}
                        title={theme.name}
                        className={`relative w-8 h-8 rounded-full ${theme.swatch} transition-all duration-200 flex items-center justify-center ${
                            selected === theme.id
                                ? 'ring-2 ring-offset-2 ring-gray-400 scale-110'
                                : 'hover:scale-105 opacity-70 hover:opacity-100'
                        }`}
                    >
                        {selected === theme.id && (
                            <Check size={14} className="text-white drop-shadow-sm" />
                        )}
                    </button>
                ))}
            </div>
            <span className="text-xs text-gray-400">
                {themes.find((t) => t.id === selected)?.name}
            </span>
        </div>
    );
}
