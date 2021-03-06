declare const Select: React.FC<{
    multi?: boolean;
    value: string | string[];
    onChange: (v: string | string[]) => void;
    options: string[];
}>;

export const MyApp = () => {
    const [val, setVal] = React.useState('op1');
    return (
        <Select
            value={val}
            onChange={(v) => setVal(v as string)}
            options={['op1', 'op2']}
        />
    );
};
