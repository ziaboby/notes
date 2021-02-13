import { LOCAL_STORAGE_KEY } from "../constants/common"
import logger from "./logger"

/**
 * Utilities object to handle storage, encapsule the used technology allowing future changes
 */
const STORAGE = {
    getItem: () => { localStorage.getItem(LOCAL_STORAGE_KEY) },
    setItem: (item) => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, (item))
        } catch (e) {
            logger.error(e)
        }
    }
}

/**
 * Retrive notes objects stored in the chosen browser storage
 * @return {object} 
 */
export const getSavedPersonalNotes = () => {
    const notesStoredInBrowserStorage = STORAGE.getItem()
    return notesStoredInBrowserStorage ? JSON.parse(notesStoredInBrowserStorage) : {}
}

/**
 * Update the browser storage with the a new personal note
 * @param {object} objNewNote 
 * @param {number|string} objNewNote.id - note id
 * @param {string} objNewNote.name - note author
 * @param {string} objNewNote.pubDate - note publication date
 * @param {string} objNewNote.pubTime - note pubbication time
 * @param {string} objNewNote.content - note content
 */
export const savePersonalNote = (objNewNote) => {
    const currentStoreState = getSavedPersonalNotes()
    STORAGE.setItem(JSON.stringify({ ...currentStoreState, objNewNote }))
}