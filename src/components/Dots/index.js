import React from "react";
import RightBorderWrapper, { Dots } from "./style";
import t from "prop-types";

const DotsContainer = ({ dotsCounts }) => {
  const dots = Array.from({ length: dotsCounts }, (_, ndx) => (
    <span key={ndx} />
  ));

  return dotsCounts ? (
    <RightBorderWrapper data-testid="container">
      <Dots>{dots}</Dots>
    </RightBorderWrapper>
  ) : null;
};

DotsContainer.propTypes = {
  /**
   * number of dots in the drag handle
   */
  dotsCounts: t.number
}

DotsContainer.defaultProps = {
  dotsCounts: 12
}

export default DotsContainer;
