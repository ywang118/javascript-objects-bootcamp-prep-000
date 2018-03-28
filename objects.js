var playlist = {
  justin_bieber : "love yourself"
};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist()