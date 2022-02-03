import * as S from "./style";

interface PropsResult {
  children: any;
  label: string;
}
const Result = (props: PropsResult) => {
  return (
    <>
      <S.Label>{props.label}</S.Label>
      <S.Div>{props.children}</S.Div>
    </>
  );
};

export default Result;
