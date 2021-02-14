import React from 'react';
import './BubbleText.scss';

const BubbleText = ({ extraClassNamesSpaceSeparated, children }) => (
    <div className={'bubble ' + (extraClassNamesSpaceSeparated || '')}>
        <div className='bubble-tail' />
        <div className='bubble-content'>{children}</div>
    </div>
);

export default BubbleText;
