import React, { useEffect, useRef } from 'react';
import Avatar from './Avatar';
import Label from './Label';
import Timestamp from './Timestamp';
import BubbleText from './BubbleText';

import './Note.scss';

const Notes = ({
    extraClassNamesSpaceSeparated,
    name,
    photoUrl,
    pubDate,
    pubTime,
    content,
    isTheLastInTheList,
}) => {
    const ref = useRef();

    useEffect(() => {
        // this code needs to be execute on each render to position it in the viewport in case old notes are loaded
        isTheLastInTheList && ref.current.scrollIntoView();
    });

    return (
        <div className={'note ' + (extraClassNamesSpaceSeparated || '')}>
            <Avatar
                altText={name}
                extraClassNamesSpaceSeparated={'note-avatar'}
                imageURL={photoUrl}
                titleText={name}
            />
            <Label extraClassNamesSpaceSeparated={'note-label'}>{name}</Label>
            <Timestamp extraClassNamesSpaceSeparated={'note-timestamp'}>
                {pubDate + ' - ' + pubTime}
            </Timestamp>
            <BubbleText extraClassNamesSpaceSeparated={'note-bubble'}>{content}</BubbleText>
            <div className='note-scrollref' ref={ref} />
        </div>
    );
};

export default Notes;
