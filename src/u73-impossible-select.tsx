declare const Select: React.FC<
    (
        | {
              multi?: false;
              value: string;
              onChange: (v: string) => void;
          }
        | {
              multi: true;
              value: string[];
              onChange: (v: string[]) => void;
          }
    ) & { options: string[] }
>;

export const MyApp = () => {
    const [val, setVal] = React.useState('op1');
    return (
        <Select value={val} onChange={setVal} options={['op1', 'op2']} />
    );
};
