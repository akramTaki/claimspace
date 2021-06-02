import { render, screen } from "@testing-library/react";
import DropZone from "./index";

test("Renders without crashing", () => {
  render(<DropZone />);
  const dropZoneLabel = screen.getByTestId("label");

  // check if the drop zone has the right label
  expect(dropZoneLabel.textContent).toBe("Drag and drop an element");
});
