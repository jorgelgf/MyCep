import * as S from "./style";

interface PropsResult {
  children: any;
  label: string;
  style?: object;
}
const Result = (props: PropsResult) => {
  return (
    <div style={props.style}>
      <S.Label>{props.label}</S.Label>
      <S.Div>{props.children}</S.Div>
    </div>
  );
};

export default Result;
