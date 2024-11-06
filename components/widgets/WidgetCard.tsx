import React from 'react';

interface WidgetProps {
    widget: {
        id: number;
        name: string;
        content: React.ComponentType; 
        isVisible: boolean;
    };
}

const WidgetCard: React.FC<WidgetProps> = ({ widget }) => {
    const Content = widget.content; //-----> Get the component type

    return (
        <div className="border rounded p-4">
            <h3 className="text-lg font-semibold">{widget.name}</h3>
            <div className="mt-2">
                <Content />
            </div>
        </div>
    );
};

export default WidgetCard;
