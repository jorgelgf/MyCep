import * as S from "./style";

interface ButtonProps {
  txt: string;
}

export default function Button(props: ButtonProps) {
  return <S.Btn>{props.txt ?? "SEND"}</S.Btn>;
}
