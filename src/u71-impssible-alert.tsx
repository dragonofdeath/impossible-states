declare const Alert: React.FC<{
    type: 'success' | 'warning' | 'boolean';
}>;

export const MyApp = () => {
    return <Alert type="success">It worked!</Alert>;
};
