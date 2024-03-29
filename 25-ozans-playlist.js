// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const set = new Set();
  for (let i = 0; i < playlist.length; i++) {
    set.add(playlist[i]);
  }
  const new_playlist = Array.from(set);
  return new_playlist;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const set = new Set(playlist);
  return set.has(track);

}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const new_set = new Set(playlist);
  new_set.add(track);
  const updated_playlist = Array.from(new_set); 
  return updated_playlist;
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const set = new Set(playlist);
  set.delete(track);
  const new_playlist = Array.from(set);
  return new_playlist;
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const set = new Set();
  for (let i = 0; i < playlist.length; i++) {
    let item = playlist[i].split(" - ");
    set.add(item[1]);
  }
  const artist_list = Array.from(set);
  return artist_list;
}
