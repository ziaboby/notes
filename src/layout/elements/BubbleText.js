import React, { useEffect, useRef, useState } from 'react';
import './BubbleText.scss';

const BubbleText = ({ extraClassNamesSpaceSeparated, children }) => {
    const ref = useRef();

    const [isReadMoreVisible, showReadMore] = useState(false),
        [isReadingMore, readMore] = useState(false);

    useEffect(() => {
        if (ref.current.clientHeight < ref.current.scrollHeight) {
            showReadMore(true);
        }
    }, []);

    return (
        <div className={'bubble ' + (extraClassNamesSpaceSeparated || '')}>
            <div className='bubble-tail' />
            <div
                className={'bubble-content' + (isReadingMore ? ' bubble-content--visible' : '')}
                ref={ref}
            >
                {children}
                {(isReadMoreVisible && (
                    <div className='bubble-readmore' onClick={() => readMore(prev => !prev)}>
                        {'Read ' + (isReadingMore ? 'Less' : 'More')}
                    </div>
                )) ||
                    null}
            </div>
        </div>
    );
};

export default BubbleText;
