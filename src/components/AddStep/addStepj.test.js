import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom";

import AddStep from "./index";

const root = document.createElement("div");
ReactDOM.render(<AddStep />, root);

test("Renders without crashing", () => {
  const title = root.querySelector("h2");
  const description = root.querySelector("span");

  // check if the initial title and description placeholders show the right values
  expect(title.textContent).toBe("Add step name");
  expect(description.textContent).toBe("Add step description");
});

test("Change the title of a step", async () => {
  const title = root.querySelector("h2");

  // click on the title to switch to the input
  fireEvent.click(title);

  // change the value to Step#1
  const titleInput = root.querySelector("input");
  fireEvent.change(titleInput, { target: { value: "Step #1" } });

  // blur the input so it updates localStorage
  fireEvent.blur(titleInput);

  // check the output
  const newTitle = root.querySelector("h2");
  expect(newTitle.textContent).toBe("Step #1");

  // check the localStorage value
  expect(localStorage.getItem("title")).toBe("Step #1");
});

test("change the description of a step", async () => {
  const description = root.querySelector("span");

  // click on the description to switch to the textarea
  fireEvent.click(description);

  // change the value to new description
  const descriptionInput = root.querySelector("textarea");
  fireEvent.change(descriptionInput, { target: { value: "new description" } });

  // blur the input so it updates localStorage
  fireEvent.blur(descriptionInput);

  // check the output
  const newDescription = root.querySelector("span");
  expect(newDescription.textContent).toBe("new description");

  // check the localStorage value
  expect(localStorage.getItem("text")).toBe("new description");
});
