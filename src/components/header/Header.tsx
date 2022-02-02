import * as S from "./style";
interface HeaderProps {
  text: string;
}

export default function Header(props: HeaderProps) {
  return <S.Header>{props.text}</S.Header>;
}
