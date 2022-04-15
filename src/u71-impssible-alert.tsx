declare const Alert: React.FC<{
    type: 'success' | 'warning' | 'boolean';
}>;

export const MyApp = () => {
    return <Alert type="warning">It worked!</Alert>;
};
