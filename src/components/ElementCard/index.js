import { ElementCardWrapper } from "./style";
import Dots from "../Dots";
import { BodyText, Text } from "../typography";

const ElementCard = ({
  title,
  text,
  dotsCounts = 12,
  border = null,
  ...props
}) => {
  return (
    <ElementCardWrapper border={border} {...props}>
      <Dots dotsCounts={dotsCounts} border={border} />
      <div>
        <BodyText data-testid="title">{title}</BodyText>
        <Text data-testid="text">{text}</Text>
      </div>
    </ElementCardWrapper>
  );
};

export default ElementCard;
