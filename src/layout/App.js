import React, { useCallback, useEffect, useReducer } from 'react';
import { LOAD_NOTES_FROM_FETCH, ADD_NOTE } from '../constants/actions';
import { CURRENT_USER_NAME, DATA_URL } from '../constants/common';
import Reducer, { initialState } from '../reducers/notes';
import { fetchRequest } from '../utils/fetchRequest';
import logger from '../utils/logger';
import InsertNote from './containers/InsertNote';
import './App.scss';
import Notes from './elements/Note';

const App = () => {
    const [{ orderedNotesIds, notesById }, dispatch] = useReducer(Reducer, initialState);

    const addNoteCb = useCallback(
        objNote => {
            dispatch({
                type: ADD_NOTE,
                payload: {
                    objNote,
                },
            });
        },
        [dispatch]
    );

    useEffect(() => {
        fetchRequest(DATA_URL)
            .then(result => {
                logger.log(result);
                dispatch({
                    type: LOAD_NOTES_FROM_FETCH,
                    payload: {
                        aNotes: result.slice(0),
                    },
                });
            })
            .catch(e => logger.error(e));
    }, []);

    return (
        <div className='app'>
            <section className='notes-list'>
                {orderedNotesIds.map(noteId => {
                    const currentNote = notesById[noteId],
                        isCurrentUser = currentNote.name === CURRENT_USER_NAME;

                    return (
                        <Notes
                            key={noteId}
                            extraClassNamesSpaceSeparated={
                                isCurrentUser ? 'note-left' : 'note-right'
                            }
                            name={currentNote.name}
                            photoUrl={currentNote.photoUrl}
                            pubDate={currentNote.pubDate}
                            pubTime={currentNote.pubTime}
                            content={currentNote.content}
                        />
                    );
                })}
            </section>
            <InsertNote addNoteCb={addNoteCb} />
        </div>
    );
};

export default App;
