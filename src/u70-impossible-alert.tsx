import React from 'react';

declare const Alert: React.FC<{
    success?: boolean;
    warning?: boolean;
    danger?: boolean;
}>;

export const MyApp = () => {
    return (
        <Alert success>It worked!</Alert>
    );
};
