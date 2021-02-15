import React, { useCallback, useEffect, useRef } from 'react';

/**
 * Hook to enable submit data when pressing 'Enter' in the keyboard
 * @param {function} submitCb - function to be called when user press an 'Enter' key
 * @returns {object} React ref which need to be attached to the interested area
 */
export default submitCb => {
    const ref = useRef();

    const listenerCb = useCallback(event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            submitCb(event.target.value);
        }
    }, []);

    useEffect(() => {
        ref.current.addEventListener('keydown', listenerCb);
        const refCurrent = ref.current;
        return () => {
            refCurrent.removeEventListener('keydown', listenerCb);
        };
    }, []);

    return ref;
};
