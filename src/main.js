import spotify from './Spotify'
import renderAlbums from './AlbumList'
import renderAlbumInfo from './AlbumInfo'
import renderAlbumTracks from './AlbumTracks'

const albums = spotify.search.searchAlbums('Incubus')
const albumList = document.getElementById('album-list')

const album = spotify.album.getAlbum('0sNOF9WDwhWunNAHPD3Baj')
const albumInfo = document.getElementById('album-info')
const trackList = document.getElementById('album-tracks')

albums
  .then(data => renderAlbums(data.albums.items, albumList))

album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, trackList))
