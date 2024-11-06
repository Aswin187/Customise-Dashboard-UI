// pages/dashboard.tsx
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { useWidgetStore } from '@/components/store/widgetStore'
import WidgetList from '@/components/widgets/WidgetList';
import CustomizationPanel from '@/components/widgets/CustomizationPanel';
import { fetchWidgetPreferences } from '@/components/utils/api';

interface DashboardPageProps {
  initialWidgets: { id: number; name: string; content: string; isVisible: boolean }[];
}

const DashboardPage: React.FC<DashboardPageProps> = ({ initialWidgets }) => {
  const setWidgets = useWidgetStore((state) => state.setWidgets);

  useEffect(() => {
    setWidgets(initialWidgets);
  }, [initialWidgets, setWidgets]);

  return (
    <div>
      <CustomizationPanel />
      <WidgetList />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const initialWidgets = await fetchWidgetPreferences();
  return { props: { initialWidgets } };
};

export default DashboardPage;
