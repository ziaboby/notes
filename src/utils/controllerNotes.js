import { LOCAL_STORAGE_KEY } from "../constants/common";

/**
 * Calculate the identifier greater than the maximum currently used
 * @param {array} aIds - list of the ids of the listed notes
 * @return number
 */
export const getNewId = (aIds) => Math.max(...aIds) + 1

/**
 * Sort notes ids based on their pubblication date and time in ascending order
 * @param {array} aIds - list of the ids of the listed notes
 * @param {object} objNotes - record of note object organized by their id
 * @param {number|string} objNotes[].id - note id
 * @param {string} objNotes[].name - note author
 * @param {string} objNotes[].pubDate - note publication date
 * @param {string} objNotes[].pubTime - note pubbication time
 * @param {string} objNotes[].content - note content
 * @return {array}
 */
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