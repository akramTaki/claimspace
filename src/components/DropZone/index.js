import { BodyText } from "../typography";
import { DropZoneWrapper, PlusSign } from "./style";

const DropZone = () => {
  return (
    <DropZoneWrapper>
      <PlusSign>+</PlusSign>
      <BodyText data-testid="label">Drag and drop an element</BodyText>
    </DropZoneWrapper>
  );
};

export default DropZone;
