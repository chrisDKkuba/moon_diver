export const world = {
  tilesize: 80,
  level: {
    map: [
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      9,
      24,
      24,
      24,
      24,
      25,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      "E",
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      23,
      24,
      24,
      24,
      24,
      24,
      11,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      9,
      24,
      24,
      24,
      24,
      24,
      24,
      25,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      5,
      16,
      27,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      23,
      24,
      24,
      11,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      9,
      24,
      24,
      24,
      24,
      25,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      "E",
      0,
      0,
      5,
      27,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      "E",
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      14,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      "C",
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      5,
      16,
      27,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      2,
      2,
      2,
      2,
      2,
      3,
      0,
      0,
      6,
      27,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      9,
      24,
      25,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      18,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      13,
      13,
      13,
      13,
      13,
      20,
      16,
      16,
      30,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      14,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      3,
      0,
      0,
      0,
      0,
      "E",
      0,
      0,
      "C",
      0,
      0,
      0,
      12,
      13,
      13,
      13,
      13,
      13,
      14,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      2,
      3,
      0,
      0,
      0,
      0,
      12,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      14,
      0,
      0,
      0,
      0,
      0,
      1,
      2,
      2,
      3,
      0,
      0,
      0,
      1,
      3,
      0,
      0,
      12,
      14,
      0,
      0,
      6,
      16,
      16,
      7,
      16,
      16,
      8,
      0,
      0,
      12,
      13,
      13,
      13,
      13,
      13,
      14,
      "C",
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      13,
      14,
      0,
      0,
      0,
      "X",
      12,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      31,
      2,
      2,
      2,
      2,
      2,
      33,
      13,
      13,
      31,
      2,
      2,
      2,
      33,
      14,
      0,
      0,
      12,
      14,
      0,
      0,
      15,
      0,
      0,
      15,
      0,
      0,
      15,
      0,
      0,
      12,
      13,
      13,
      13,
      13,
      13,
      20,
      27,
      0,
      0,
      5,
      27,
      0,
      0,
      12,
      13,
      14,
      0,
      0,
      1,
      2,
      33,
      13,
      13,
      13,
      13,
    ],
    columns: 59,
    rows: 8,
    collectibles: 3,
  },
};

let newMap = [];

while (world.level.map.length > 0) {
  newMap.push(world.level.map.splice(0, world.level.columns));
}
world.level.map = newMap;
