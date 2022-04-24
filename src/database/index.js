import { Album, Stream, YearData } from "./classes";

const testStream = [
  new Stream(
    "Plataform 1",
    "https://open.spotify.com/album/1W9IHb4ld1ZtAD9rlKgiOh?si=qioGFGNjSImZlmS3-ZrJHg"
  ),
  new Stream("Plataform 2", "https://deezer.page.link/6pjxv3rRBNkZwMwBA"),
];

const testAlbum = new Album(
  "La Liberación",
  "CSS",
  2011,
  "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam nec sodales dolor. Vivamus nisi purus, eleifend id sollicitudin sit amet, blandit eu felis. Praesent sit amet ultrices mauris, id molestie nunc. Quisque dictum venenatis ullamcorper. Aliquam sed turpis ac nibh gravida vehicula ac vitae mauris. Donec non magna ante. Ut quis vulputate metus. Pellentesque lobortis ex a faucibus consectetur. Proin ut nisl pretium, viverra ligula non, varius massa. Morbi ac sem ligula. Aenean elementum orci libero, in eleifend nunc blandit id. Cras sed metus in lorem rhoncus vestibulum at sit amet arcu. Suspendisse a lectus tincidunt, mattis magna ac, facilisis neque. Sed facilisis dapibus nunc non luctus. \nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Aenean pharetra ante cursus ipsum vulputate sollicitudin. Integer rhoncus ipsum et cursus cursus.",
  "https://lastfm.freetls.fastly.net/i/u/770x0/5e51d1f06e014a8697f39f8279940c3a.jpg#5e51d1f06e014a8697f39f8279940c3a",
  ["Hits Me Like A Rock", "City Grrrl", "Yolanda"],
  testStream
);

const albumList = [
  testAlbum,
  testAlbum,
  testAlbum,
  testAlbum,
  testAlbum,
  testAlbum,
  testAlbum,
  testAlbum,
  testAlbum,
  testAlbum,
  testAlbum,
];

const getTestYear = (year) => {
  return new YearData(
    year,
    "O ANO TESTE",
    "Donec semper diam finibus nisi ornare dapibus. Proin auctor augue in urna eleifend, at scelerisque nisl porta. Nam consectetur diam eget erat rutrum, eu porta mi lobortis. Aliquam pretium diam arcu, quis lacinia neque venenatis nec. Curabitur non libero faucibus, semper libero at, volutpat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sed ornare dolor, vel vehicula dui. Proin libero leo, sodales ut condimentum in, cursus vel est. Sed quis cursus tellus. Aliquam erat volutpat. Nulla ac leo finibus, hendrerit sapien vel, dictum ante.",
    albumList
  );
};

const year17 = getTestYear("2017");
const year18 = getTestYear("2018");
const year19 = getTestYear("2019");
const year20 = getTestYear("2020-21");

const database = {
  17: year17,
  18: year18,
  19: year19,
  20: year20,
};

export default database;
