export interface ColumnConfig<T> {
    key: keyof T; 
    label: string;
    render?: (value: unknown, item: T) => React.ReactNode; 
}