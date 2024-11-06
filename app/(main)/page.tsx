"use client"
import { useWidgetState } from '@/components/store/widgetStore';
import DashboardCard from '@/components/dashboard/DashboardCard';
import PostsTable from '@/components/posts/PostsTable';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import BarCharts from "@/components/chart/BarCharts";
import AreaChart from "@/components/chart/AreaChart";

import { BarChart, Folder, MessageCircle, Newspaper, User } from 'lucide-react';

export default function Home() {
  const widgets = useWidgetState(); 

  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
        <DashboardCard
          title='Posts'
          count={100}
          icon={<Newspaper className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Categories'
          count={12}
          icon={<Folder className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Users'
          count={750}
          icon={<User className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Comments'
          count={1200}
          icon={<MessageCircle className='text-slate-500' size={72} />}
        />
      </div>

      {/* Conditionally render widgets based on visibility */}
      <div className="mt-5">
        {widgets.find(widget => widget.name === 'Analytics Chart')?.isVisible && <AnalyticsChart />}
        {widgets.find(widget => widget.name === 'Bar Charts')?.isVisible && <BarCharts />}
        {widgets.find(widget => widget.name === 'Area Chart')?.isVisible && <AreaChart />}
        {widgets.find(widget => widget.name === 'Posts Table')?.isVisible && (
          <PostsTable title="Latest Posts" limit={5} />
        )}
      </div>
    </>
  );
}
