// components/widgets/WidgetInitialization.tsx
import React from 'react';
import PostsTable from '@/components/posts/PostsTable';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import BarCharts from '@/components/chart/BarCharts';
import AreaChart from '@/components/chart/AreaChart';
import { Widget } from '@/components/types/widget'; // Adjust the path as necessary

const initialWidgets: Widget[] = [
  {
    id: 1,
    name: 'Posts Table',
    content: <PostsTable />, // This will work now
    isVisible: true,
  },
  {
    id: 2,
    name: 'Analytics Chart',
    content: <AnalyticsChart />,
    isVisible: true,
  },
  {
    id: 3,
    name: 'Bar Charts',
    content: <BarCharts />,
    isVisible: true,
  },
  {
    id: 4,
    name: 'Area Chart',
    content: <AreaChart />,
    isVisible: true,
  },
];

export default initialWidgets;
