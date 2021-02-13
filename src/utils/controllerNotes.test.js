import { getNewId, sortNotesByPubDateAsc } from "./controllerNotes";
test("Get the id next to the greatest listed in an array", () => {
    const list = ["100", "14", "10", "56", "84", "12", "108"]
    expect(getNewId(list)).toBe(109)
});

test("Sort objects in ascending order based on a published date", () => {
    const sampleObj = {
        1: { pubDate: "02-13-2021", pubTime: "12:00" },
        2: { pubDate: "02-12-2021", pubTime: "12:00" },
        3: { pubDate: "02-13-2021", pubTime: "12:30" },
        4: { pubDate: "02-13-2021", pubTime: "12:00" },
        5: { pubDate: "02-13-2021", pubTime: "02:00" }
    }

    expect(sortNotesByPubDateAsc([1, 2, 3, 4, 5], sampleObj)).toEqual([2, 5, 1, 4, 3])
})