import React from "react";
import { ElementCardWrapper } from "./style";
import Dots from "../Dots";
import { BodyText, Text } from "../typography";
import t from "prop-types";

const ElementCard = ({
  title,
  text,
  dotsCounts,
  border,
  ...props
}) => {
  return (
    <ElementCardWrapper border={border} {...props}>
      <Dots dotsCounts={dotsCounts} />
      <div>
        <BodyText data-testid="title">{title}</BodyText>
        <Text data-testid="text">{text}</Text>
      </div>
    </ElementCardWrapper>
  );
};

ElementCard.propTypes = {
  /**
   * title of the element
   */
  title: t.string,
  /**
   * text description of the element
   */
  text: t.string,
  /**
   * number of dots on the drag handle
   */
  dotsCounts: t.number,
  /**
   * the color of the border and the drag handle
   */
  border: t.bool,
}

ElementCard.defaultProps = {
  title: "",
  text: "",
  dotsCounts : 12,
  border : null,
}

export default ElementCard;
