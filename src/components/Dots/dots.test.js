import { render, screen } from "@testing-library/react";

import Dots from "./index";

test("Renders without crashing", () => {
  render(<Dots />);

  const dotsContainer = screen.getByTestId("container");
  const dots = dotsContainer.querySelectorAll("span");

  // check if the initial ( default ) number of dots is 12
  expect(dots.length).toBe(12);
});

test("Renders the right number of dots", () => {
  render(<Dots dotsCounts={6} />);

  const dotsContainer = screen.getByTestId("container");
  const dots = dotsContainer.querySelectorAll("span");

  // check if the initial number of dots is 12
  expect(dots.length).toBe(6);
});
