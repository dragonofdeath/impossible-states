import React from 'react';

declare const Alert: React.FC<{
    success?: boolean;
    warning?: boolean;
    danger?: boolean;
}>;

export const MyApp = () => {
    return (
        <Alert warning danger>
            {' '}
            It worked!{' '}
        </Alert>
    );
};
