import React from 'react';

type TypeButtonProps = {
    name: string
    onClick: () => void
    disabled: boolean
    className?: string
}

export const Button = (
    {
        name,
        onClick,
        disabled,
        className
    }: TypeButtonProps) => {
    return (
        <div>
            <button className={className}
                    onClick={onClick}
                    disabled={disabled}>
                {name}</button>
        </div>
    );
};

///////// Refactoring //////////
// const onclickHandler = () => {
//     onClick()
// }