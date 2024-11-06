// components/store/widgetStore.ts

import { create } from 'zustand';
import PostsTable from '@/components/posts/PostsTable';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import BarCharts from '@/components/chart/BarCharts';
import AreaChart from '@/components/chart/AreaChart';
import { ReactNode } from 'react';

interface Widget {
    id: number;
    name: string;
    content: React.ComponentType<any>;
    props?: Record<string, any>;
    isVisible: boolean;
}

interface WidgetStore {
    widgets: Widget[];
    setWidgets: (widgets: Widget[]) => void;
    setWidgetVisibility: (id: number, isVisible: boolean) => void;
}

export const useWidgetStore = create<WidgetStore>((set) => ({
    widgets: [
        { id: 1, name: 'Analytics Chart', content: AnalyticsChart, isVisible: false },
        { id: 2, name: 'Bar Charts', content: BarCharts, isVisible: false },
        { id: 3, name: 'Area Chart', content: AreaChart, isVisible: false },
        { id: 4, name: 'Posts Table', content: PostsTable, isVisible: false },

    ],
    setWidgets: (widgets) => set({ widgets }),
    setWidgetVisibility: (id, isVisible) =>
        set((state) => ({
            widgets: state.widgets.map((widget) =>
                widget.id === id ? { ...widget, isVisible } : widget
            ),
        })),
}));

export const useWidgetState = () => useWidgetStore((state) => state.widgets);
export const useSetWidgetVisibility = () => useWidgetStore((state) => state.setWidgetVisibility);
