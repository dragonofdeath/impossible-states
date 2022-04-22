declare const Alert: React.FC<{
    type: 'success' | 'warning' | 'boolean';
}>;

declare const a: never;

export const MyApp = () => {
    return <Alert type={a}>It worked!</Alert>;
};
