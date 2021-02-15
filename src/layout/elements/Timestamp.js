import React from 'react';
import './Timestamp.scss';

const Timestamp = ({ extraClassNamesSpaceSeparated, children }) => (
    <div className={'timestamp ' + (extraClassNamesSpaceSeparated || '')}>{children}</div>
);

export default Timestamp;
