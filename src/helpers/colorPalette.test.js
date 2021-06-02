import palette from "./colorPalette";

test("Has the right colors", () => {
  const white = palette("white", 1);
  expect(white).toBe("#fff");
});
