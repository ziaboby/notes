import { LOCAL_STORAGE_KEY } from "../constants/common";

export const getNewId = (aIds) => Math.max(...aIds) + 1

export const sortNotesByPubDateAsc = (aIds, objNotes) => {
    const extractHours = (time) => time.substr(0, 2),
        extractMinutes = (time) => time.substr(3, 2);

    return aIds.slice(0).sort(
        (a, b) => {
            const aDate = new Date(objNotes[a].pubDate),
                bDate = new Date(objNotes[b].pubDate)
            aDate.setHours(extractHours(objNotes[a].pubTime))
            aDate.setMinutes(extractMinutes(objNotes[a].pubTime))
            bDate.setHours(extractHours(objNotes[b].pubTime))
            bDate.setMinutes(extractMinutes(objNotes[b].pubTime))

            return aDate - bDate
        }
    ).map(id => +id)
} 