import { LOCAL_STORAGE_KEY } from '../constants/common';

/**
 * Calculate the identifier greater than the maximum currently used
 * @param {array} aIds - list of the ids of the listed notes
 * @return number
 */
export const getNewId = aIds => Math.max(...aIds) + 1;

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
    /**
     * Get hours and minutes from a string by returing those respectively in the first and the second position of an array
     * @param {string} time
     * @example 11:00 or 1:00
     * @return {array}
     */
    const extractHoursAndMinutes = time => time.split(':');

    return aIds
        .slice(0)
        .sort((a, b) => {
            const aDate = new Date(objNotes[a].pubDate),
                bDate = new Date(objNotes[b].pubDate),
                [aHours, aMinutes] = extractHoursAndMinutes(objNotes[a].pubTime),
                [bHours, bMinutes] = extractHoursAndMinutes(objNotes[b].pubTime);
            aDate.setHours(aHours);
            aDate.setMinutes(aMinutes);
            bDate.setHours(bHours);
            bDate.setMinutes(bMinutes);

            return aDate - bDate;
        })
        .map(id => +id);
};
