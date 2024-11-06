"use client"
import { useWidgetStore } from "@/components/store/widgetStore";
import WidgetCard from './WidgetCard';

const WidgetList: React.FC = () => {
    const widgets = useWidgetStore(state => state.widgets); 

    return (
        <div className="grid grid-cols-3 gap-4">
            {widgets.map(widget => 
                widget.isVisible ? <WidgetCard key={widget.id} widget={widget} /> : null
            )}
        </div>
    );
};

export default WidgetList;
