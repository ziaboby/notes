/**
 * Fetch data based on the input request
 * @param {object|string} request - HTTP request, with both URL and options, or more simply the URL for a get request
 * @return {Promise}
 */
export async function fetchRequest(request) {
    const response = await fetch(request);

    if (!response.ok) {
        throw new Error('Error while fetching the request ' + request.toString());
    }

    try {
        const body = await response.json();
        return body;
    } catch (e) {
        throw new Error('Error with the response from the request ' + request.toString());
    }
}
