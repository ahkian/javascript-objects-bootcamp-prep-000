var playlist = new Object({stones: 'Wild Horses'});

function updatePlaylist(playlistName, artist, song){
  return Object.assign({} ,playlistName, {[artist]: song})
}

function removeFromPlaylist(playlistName, artistName){
  delete playlistName.artistName
  return playlist
}