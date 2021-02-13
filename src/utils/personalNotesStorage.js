import { LOCAL_STORAGE_KEY } from "../constants/common"
import logger from "./logger"

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

export const getSavedPersonalNotes = () => {
    const notesStoredInBrowserStorage = STORAGE.getItem()
    return notesStoredInBrowserStorage ? JSON.parse(notesStoredInBrowserStorage) : {}
}

export const savePersonalNote = (objNewNote) => {
    STORAGE.setItem(JSON.stringify(objNewNote))
}