"use client";
import { useWidgetState, useSetWidgetVisibility } from '@/components/store/widgetStore';
import { updateWidgetVisibility } from '@/components/utils/api';
import { useState } from 'react';

const CustomizationPanel: React.FC = () => {
    const widgets = useWidgetState(); //-----------> Get current widget states from store
    const setWidgetVisibility = useSetWidgetVisibility();
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleVisibility = async (id: number, isVisible: boolean) => {
        setWidgetVisibility(id, isVisible); //-----------> Update visibility in local state
        try {
            await updateWidgetVisibility(id, isVisible); //-----------> Update visibility in the backend
        } catch (error) {
            console.error('Failed to update widget visibility:', error);
            setWidgetVisibility(id, !isVisible); //--------> Revert local state on error
        }
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none"
                style={{ backgroundColor: 'rgb(241 245 249 / var(--tw-bg-opacity))' }}

                aria-expanded={isOpen}
            >
                Customize Widgets
            </button>
            {isOpen && (
                <div
                    className="absolute left-2 z-8 mt-2 w-52 shadow-lgdark:bg-[hsl(var(--accent))] ring-1 ring-black ring-opacity-5"
                    style={{ backgroundColor: 'rgb(241 245 249 / var(--tw-bg-opacity))' }}
                >
                    <div className="py-1">
                        {widgets.map((widget) => (
                            <label
                                key={widget.id}
                                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <input
                                    type="checkbox"
                                    checked={widget.isVisible}
                                    onChange={(e) => handleToggleVisibility(widget.id, e.target.checked)}
                                    className="text-slate-600 dark:text-slate-300"
                                />
                                <span className="text-gray-800 dark:text-white">{widget.name}</span>
                            </label>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default CustomizationPanel;
