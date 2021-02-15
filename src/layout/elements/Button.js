import React from 'react';
import './Button.scss';

const Button = ({ extraClassNamesSpaceSeparated, onClickCb, disabled = false, children }) => (
    <button
        className={'btn ' + (extraClassNamesSpaceSeparated || '')}
        onClick={onClickCb}
        role='button'
        disabled={disabled ? 'disabled' : ''}
    >
        {children}
    </button>
);

export default Button;
