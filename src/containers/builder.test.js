import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Builder from "./Builder";

import fakeData from "../helpers/fakeData";

test("Renders without crashing", () => {
  render(<Builder fakeData={fakeData} />);

  const dragList = screen.getByTestId("dragList");
  const cardsCount = dragList.childNodes.length;

  const dropList = screen.getByTestId("droppedList");
  const cardsDroppedCount = dropList.childNodes.length;

  // check if the number of rendered elements is equal to the number of fake data array items
  expect(cardsCount).toBe(fakeData.length);
  expect(cardsDroppedCount).toBe(0);
});

// test("Drag an element from one list to the other", () => {
//   render(<Builder fakeData={fakeData} />);

//   const dragList = screen.getByTestId("dragList");
//   const dropList = screen.getByTestId("dropList");
//   const firstChild = dragList.childNodes[0];

//   // emulate drag and drop

//   const cardsDroppedCount = dropList.childNodes.length;
//   const cardsCount = dragList.childNodes.length;

//   // check if the number of rendered elements in the cards list is one less
//   expect(cardsCount).toBe(fakeData.length - 1);

//   // check if the number of rendered elements in the Step column is one more
//   expect(cardsDroppedCount).toBe(1);
// });
