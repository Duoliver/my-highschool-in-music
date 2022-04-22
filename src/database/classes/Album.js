class Album {
  constructor(
    name,
    artist,
    year,
    text,
    artworkUrl,
    favouriteSongs,
    streamingServices
  ) {
    this.name = name;
    this.artist = artist;
    this.year = year;
    this.text = text;
    this.artworkUrl = artworkUrl;
    this.favouriteSongs = favouriteSongs;
    this.streamingServices = streamingServices;
  }
}

export default Album;
