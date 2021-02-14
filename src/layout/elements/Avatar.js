import React from 'react';
import './Avatar.scss';

const Avatar = ({ altText, extraClassNamesSpaceSeparated, imageURL, titleText }) => (
    <div className={'avatar ' + (extraClassNamesSpaceSeparated || '')}>
        <img src={imageURL} alt={altText} title={titleText} />
    </div>
);

export default Avatar;
