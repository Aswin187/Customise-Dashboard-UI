import { GetServerSideProps } from 'next';
import { useEffect, ComponentType } from 'react';
import { useWidgetStore } from '@/components/store/widgetStore';
import WidgetList from '@/components/widgets/WidgetList';
import CustomizationPanel from '@/components/widgets/CustomizationPanel';
import { fetchWidgetPreferences } from '@/components/utils/api';

interface Widget {
  id: number;
  name: string;
  content: ComponentType | (() => JSX.Element); // Adjusted to accept a component or a function returning JSX
  isVisible: boolean;
}

interface DashboardPageProps {
  initialWidgets: Widget[];
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
  const initialWidgetsData = await fetchWidgetPreferences();

  // Format the fetched widgets so that content is wrapped in a component if it's a string
  const initialWidgets: Widget[] = initialWidgetsData.map((widget: any) => ({
    ...widget,
    content: typeof widget.content === 'string'
      ? () => <div>{widget.content}</div> // Wrap string as a component
      : widget.content,
  }));

  return { props: { initialWidgets } };
};

export default DashboardPage;
