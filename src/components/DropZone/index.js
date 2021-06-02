import React from "react";
import { BodyText } from "../typography";
import { DropZoneWrapper, PlusSign } from "./style";
import t from "prop-types";

const DropZone = ({ opacity }) => {
  return (
    <DropZoneWrapper opacity={opacity}>
      <PlusSign>+</PlusSign>
      <BodyText data-testid="label">Drag and drop an element</BodyText>
    </DropZoneWrapper>
  );
};

DropZone.propTypes = {
  /**
   *  Opacity of the drop zone
   */
  opacity: t.number
}

DropZone.defaultProps = {
  opacity: 0.3
}

export default DropZone;
