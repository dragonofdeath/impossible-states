import React from 'react';

declare const Select: React.FC<{
    value: string | string[];
    onChange: (v: string | string[]) => void;
    options: string[];
    multi?: boolean;
}>;

export const MyApp = () => {
    const [val, setVal] = React.useState('myVal');
    return (
        <Select
            value={val}
            onChange={(v) => setVal(v as string)}
            options={['op1', 'op2']}
        />
    );
};
