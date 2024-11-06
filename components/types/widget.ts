// types/widget.ts
export interface Widget {
    id: number;
    name: string;
    content: React.ReactNode; // Allow JSX elements
    isVisible: boolean;
}
export default Widget;