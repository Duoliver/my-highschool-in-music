import { StreamEnum } from "../enums";
import { Album, Stream, YearData } from "./classes";

const testStream = [
  new Stream(StreamEnum.SPOTIFY, "1W9IHb4ld1ZtAD9rlKgiOh"),
  new Stream(StreamEnum.DEEZER, "6762758"),
];

const testAlbum = new Album(
  "La Liberación",
  "CSS",
  2011,
  "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam nec sodales dolor. Vivamus nisi purus, eleifend id sollicitudin sit amet, blandit eu felis. Praesent sit amet ultrices mauris, id molestie nunc. Quisque dictum venenatis ullamcorper. Aliquam sed turpis ac nibh gravida vehicula ac vitae mauris. Donec non magna ante. Ut quis vulputate metus. Pellentesque lobortis ex a faucibus consectetur. Proin ut nisl pretium, viverra ligula non, varius massa. Morbi ac sem ligula. Aenean elementum orci libero, in eleifend nunc blandit id. Cras sed metus in lorem rhoncus vestibulum at sit amet arcu. Suspendisse a lectus tincidunt, mattis magna ac, facilisis neque. Sed facilisis dapibus nunc non luctus. \nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Aenean pharetra ante cursus ipsum vulputate sollicitudin. Integer rhoncus ipsum et cursus cursus.",
  "https://upload.wikimedia.org/wikipedia/en/6/6b/CSS_-_La_Liberaci%C3%B3n.png",
  ["Hits Me Like A Rock", "City Grrrl", "Yolanda"],
  testStream
);

const differentAlbum = new Album(
  "Selected Ambient Works 85-92",
  "Aphex Twin",
  1992,
  "Selected Ambient Works 85–92 is the debut studio album by Aphex Twin, the pseudonym of British electronic musician Richard D. James. It was released on 9 November 1992 through Apollo Records, a subsidiary of Belgian label R&S Records. The album consists of beat-orientated ambient tracks recorded onto cassette reputedly dating as far back as 1985, when James was thirteen to fourteen years old. An analogue remaster of the album was released in 2006, followed by a digital remaster in 2008.\n Upon its release, Selected Ambient Works 85–92 received widespread acclaim, and has been considered a landmark in the fields of electronica, ambient techno, and intelligent dance music. James followed up the album in 1994 with the more traditionally ambient Selected Ambient Works Volume II. In 2012, it was named the greatest album of the 1990s by Fact. It entered the UK Dance Albums Chart at number 30 after the release of Aphex Twin's 2014 album Syro.",
  "https://upload.wikimedia.org/wikipedia/en/8/82/Selected_Ambient_Works_85-92.png?20160731120429",
  ["Xtal", "Pulsewidth", "Ageispolis", "I", "Ptolemy"],
  [new Stream(StreamEnum.SPOTIFY, "7aNclGRxTysfh6z0d8671k")]
);

const albumList = [
  testAlbum,
  testAlbum,
  testAlbum,
  testAlbum,
  testAlbum,
  differentAlbum,
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
