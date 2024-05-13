/**
 * Fetch sources from the API
 * @param {import("axios").AxiosInstance} client - Axios client
 * @param {number} page - page number
 * @param {number} numPerPage - number of sources per page
 * @returns {Promise<any[]>}
 */
export async function fetchSources(client, page, numPerPage) {
  let response = await client.get("/api/sources", {
    params: {
      pageNumber: page,
      numPerPage: numPerPage,
      includeColorMagnitude: true,
      includeThumbnails: true,
      includeDetectionStats: true,
      includeLabellers: true,
      includeHosts: true,
    },
  });
  return response.data.data.sources;
}
