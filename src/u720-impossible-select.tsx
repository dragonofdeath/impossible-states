declare const Select: React.FC<{
    multi?: boolean;
    value: string | string[];
    onChange: (v: string | string[]) => void;
    options: string[];
}>;

export const MyApp = () => {
    const [val, setVal] = React.useState('myVal');
    return (
        <Select
            value={val}
            onChange={(v) => setVal(v)}
            options={['op1', 'op2']}
        />
    );
};
