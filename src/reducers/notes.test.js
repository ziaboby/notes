import { ADD_NOTE, LOAD_NOTES_FROM_FETCH } from "../constants/actions"
import Reducer from "./notes"

jest.mock('../utils/personalNotesStorage', () => ({
    getSavedPersonalNotes: () => ({}),
    savePersonalNote: (item) => !!item
})
)


test("Add new note empty state", () => {

    const SAMPLE_STATE = {
        notesById: {
            1: {
                id: 1, name: 'test1', "photoUrl": "fake_url", content: "Lorem ipsus", pubDate: "02-13-2021", pubTime: "12:00"
            },
            2: {
                id: 2, name: 'test2', "photoUrl": "fake_url", content: "Lorem ipsus", pubDate: "02-12-2021", pubTime: "12:00"
            },
        }, orderedNotesIds: [2, 1]
    }

    const objNote = {
        name: 'test3', "photoUrl": "fake_url", content: "Lorem ipsus", pubDate: "02-13-2021", pubTime: "15:00"
    }

    const resultState = Reducer(SAMPLE_STATE, {
        type: ADD_NOTE, payload: {
            objNote
        }
    })

    expect(resultState.notesById[3]).toEqual({ ...objNote, id: 3 })
    expect(resultState.orderedNotesIds).toEqual([2, 1, 3])
})

test("Load others note from JSON", () => {

    const SAMPLE_STATE = {
        notesById: {
            1: {
                id: 1, name: 'test1', "photoUrl": "fake_url", content: "Lorem ipsus", pubDate: "02-13-2021", pubTime: "12:00"
            },
            2: {
                id: 2, name: 'test2', "photoUrl": "fake_url", content: "Lorem ipsus", pubDate: "02-12-2021", pubTime: "12:00"
            },
        }, orderedNotesIds: [2, 1]
    }

    const aNotes = [
        {
            id: 3, name: 'test3', "photoUrl": "fake_url", content: "Lorem ipsus", pubDate: "02-13-2021", pubTime: "16:00"
        },
        {
            id: 4, name: 'test4', "photoUrl": "fake_url", content: "Lorem ipsus", pubDate: "02-13-2021", pubTime: "14:30"
        },
        {
            id: 5, name: 'test5', "photoUrl": "fake_url", content: "Lorem ipsus", pubDate: "02-13-2021", pubTime: "11:00"
        }
    ]

    const resultState = Reducer(SAMPLE_STATE, {
        type: LOAD_NOTES_FROM_FETCH, payload: {
            aNotes
        }
    })

    expect(resultState.orderedNotesIds).toEqual([2, 5, 1, 4, 3])
})