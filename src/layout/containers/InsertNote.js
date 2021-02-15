import React, { useCallback, useState } from 'react';
import InputArea from '../elements/InputArea';
import Button from '../elements/Button';
import { CURRENT_USER_PICSUM_ID, CURRENT_USER_NAME, PICSUM_BASE_URL } from '../../constants/common';
import submitOnEnterHook from '../../utils/submitOnEnterHook';
import './InsertNote.scss';

const InsertNote = ({ addNoteCb }) => {
    const [value, setValue] = useState('');

    const onChangeCb = useCallback(
        event => {
            setValue(event.target.value || '');
        },
        [setValue]
    );

    const onClickCb = useCallback(
        currValue => {
            const tmpValue = typeof currValue === 'string' ? currValue : value;
            if (tmpValue) {
                const stringDate = new Date().toLocaleString(),
                    matches = stringDate.match(
                        /(\d{1,2})\/(\d{1,2})\/(\d{4})\D*(\d{1,2}):(\d{1,2})/
                    ),
                    objNote = {
                        name: CURRENT_USER_NAME,
                        photoUrl: PICSUM_BASE_URL.replace('%ID%', CURRENT_USER_PICSUM_ID),
                        content: tmpValue,
                        pubDate: matches ? `${matches[2]}/${matches[1]}/${matches[3]}` : '',
                        pubTime: matches ? `${matches[4]}:${matches[5]}` : '',
                    };

                addNoteCb(objNote);
                setValue('');
            }
        },
        [value, addNoteCb, setValue]
    );

    const ref = submitOnEnterHook(onClickCb);

    return (
        <section className='insert' ref={ref}>
            <InputArea
                extraClassNamesSpaceSeparated={'insert-input'}
                placeholderTxt={'Enter note about the process'}
                required={true}
                onChangeCb={onChangeCb}
                value={value}
            />
            <div className='insert-btn-container'>
                <Button
                    extraClassNamesSpaceSeparated={'insert-btn'}
                    onClickCb={onClickCb}
                    disabled={!value}
                >
                    Publish
                </Button>
            </div>
        </section>
    );
};

export default InsertNote;
