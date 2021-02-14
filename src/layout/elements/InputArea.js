import React from 'react';
import './InputArea.scss';

const InputArea = ({
    extraClassNamesSpaceSeparated,
    required,
    placeholderTxt,
    onChangeCb,
    value = '',
}) => {
    return (
        <textarea
            className={'input-area ' + (extraClassNamesSpaceSeparated || '')}
            value={value}
            placeholder={placeholderTxt}
            aria-placeholder={placeholderTxt}
            aria-multiline='true'
            role='textbox'
            required={required ? 'required' : ''}
            onChange={onChangeCb}
        />
    );
};

export default InputArea;
