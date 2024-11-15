/**
 * Combines a base URI with an ID to create a well-formed URL.
 *
 * @param {string} uri - The base URI.
 * @param {string|number} id - The ID to append to the URI.
 * @returns {string} The combined URL.
 * @throws {Error} If uri or id is not provided.
 */
export const createURL = (uri:string, id: string | number) => {
  // Remove any trailing slash from the uri
  const sanitizedUri = uri.replace(/\/$/, '');

  if (!id) {
    return sanitizedUri;
  }

  return `${sanitizedUri}/${id}`;
};
