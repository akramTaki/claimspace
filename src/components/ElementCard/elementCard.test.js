import { render, screen } from "@testing-library/react";

import ElementCard from "./index";

const titleProp = "hello";
const textProp = "world";

test("Renders without crashing", () => {
  render(<ElementCard text={textProp} title={titleProp} />);

  const title = screen.getByTestId("title");
  const text = screen.getByTestId("text");

  // check if the card has the right title and text
  expect(title.textContent).toBe(titleProp);
  expect(text.textContent).toBe(textProp);
});