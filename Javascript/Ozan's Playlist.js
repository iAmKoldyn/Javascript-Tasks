export function removeDuplicates(playlist) {
    return Array.from(new Set(playlist));
  }

  export function hasTrack(playlist, track) {
    return new Set(playlist).has(track);
  }
  
  export function addTrack(playlist, track) {
    return Array.from(new Set(playlist).add(track));
  }

  export function deleteTrack(playlist, track) {
    var set = new Set(playlist);
    set.delete(track)
    return Array.from(set);
  }

  export function listArtists(playlist) {
    var set = new Set(playlist);
    var artists = new Set();
    set.forEach((x) => { artists.add(x.replace(/(\w*\s)*-\s/, "")) });
    return Array.from(artists);
  }
  