import styled from "styled-components";

const Data = styled.h1<{ isMoreThanTen: boolean }>`
  color: ${(props) => (props.isMoreThanTen ? props.theme.greenColor : props.theme.orangeColor)};
`;

interface PropsInterface {
  count: number;
}

const Number: React.FunctionComponent<PropsInterface> = ({ count }) => {
  return <Data isMoreThanTen={count >= 10}>{count}</Data>;
};

export default Number;
