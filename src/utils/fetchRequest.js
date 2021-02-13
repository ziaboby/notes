export async function fetchRequest(request) {
    const response = await fetch(request);

    if (!response.ok) {
        throw new Error("Error while fetching the request " + request.toString());
    }

    try {
        const body = await response.json();
        return body;
    } catch (e) {
        throw new Error(
            "Error with the response from the request " + request.toString()
        );
    }
}