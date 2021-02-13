
import { ADD_NOTE, LOAD_NOTES_FROM_FETCH } from '../constants/actions'
import { getNewId, sortNotesByPubDateAsc } from "../utils/controllerNotes";
import logger from '../utils/logger';
import { getSavedPersonalNotes, savePersonalNote } from '../utils/personalNotesStorage';

const notesStoredInBrowserStorage = getSavedPersonalNotes()

export const initialState = {
    orderedNotesIds: Object.keys(notesStoredInBrowserStorage).length
        ? sortNotesByPubDateAsc(Object.keys(notesStoredInBrowserStorage), notesStoredInBrowserStorage)
        : [],
    notesById: notesStoredInBrowserStorage
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE: {
            const id = getNewId(state.orderedNotesIds),
                newNote = { [id]: Object.assign({}, action.payload.objNote, { id }) };
            savePersonalNote(newNote)
            return {
                ...state,
                notesById: Object.assign({}, state.notesById, newNote),
                orderedNotesIds: [...state.orderedNotesIds, id]
            }
        }
        case LOAD_NOTES_FROM_FETCH: {
            const fetchedNotedById = (action.payload.aNotes || []).reduce((prev, curr) => ({
                ...prev,
                [curr.id]: Object.assign({}, curr)
            }), state.notesById)
            return {
                ...state,
                notesById: fetchedNotedById,
                orderedNotesIds: sortNotesByPubDateAsc(Object.keys(fetchedNotedById), fetchedNotedById)
            }
        }
        default: {
            logger.error('Error - Unexpected action')
            return state
        };
    }
};

export default Reducer
