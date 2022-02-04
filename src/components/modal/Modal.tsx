import * as S from "./style";
interface PropsModal {
  onClick: () => void;
}
export default function Moda(props: PropsModal) {
  return (
    <S.ContainerFull onClick={props.onClick}>
      <S.ContainerModal>Número inválido</S.ContainerModal>
    </S.ContainerFull>
  );
}
