import React from 'react';
import './Label.scss';

const Label = ({ extraClassNamesSpaceSeparated, children }) => (
    <div className={'label ' + (extraClassNamesSpaceSeparated || '')}>{children}</div>
);

export default Label;
