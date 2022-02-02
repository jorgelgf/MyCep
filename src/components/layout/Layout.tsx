import * as S from "./style";
interface PropsLayout {
  children: any;
}
const Layout = (props: PropsLayout) => {
  return <S.Container>{props.children}</S.Container>;
};

export default Layout;
