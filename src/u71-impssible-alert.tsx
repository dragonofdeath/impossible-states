declare const Alert: React.FC<{
    type: 'success' | 'warning' | 'danger';
}>;

export const MyApp = () => {
    return <Alert type="success">It worked!</Alert>;
};
