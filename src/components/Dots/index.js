import RightBorderWrapper, { Dots } from "./style";

const DotsContainer = ({ dotsCounts = 12 }) => {
  const dots = Array.from({ length: dotsCounts }, (_, ndx) => (
    <span key={ndx} />
  ));

  return dotsCounts ? (
    <RightBorderWrapper data-testid="container">
      <Dots>{dots}</Dots>
    </RightBorderWrapper>
  ) : null;
};

export default DotsContainer;
