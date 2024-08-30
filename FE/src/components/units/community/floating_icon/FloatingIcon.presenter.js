import * as S from "./FloatingIcon.styles";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamic import for FontAwesomeIcon
const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  { ssr: false }
);

export default function FloatingIconUI(props) {
  return (
    <>
      <S.IconModalOverlay
        isSubIconsVisible={props.isSubIconsVisible}
      ></S.IconModalOverlay>

      <S.FloatingIcon onClick={props.handleMainIconClick}>
        <S.FloatingIconText isSubIconsVisible={props.isSubIconsVisible}>
          ↑
        </S.FloatingIconText>
      </S.FloatingIcon>

      <S.SubFloatingIcon1
        onClick={() =>
          props.handleRequireModal(`/community/write?type=${props.type}`)
        }
        isSubIconsVisible={props.isSubIconsVisible}
      >
        <FontAwesomeIcon icon="fa-solid fa-pen" />
      </S.SubFloatingIcon1>
      <S.SubFloatingIconText1 isSubIconsVisible={props.isSubIconsVisible}>
        글쓰기
      </S.SubFloatingIconText1>
      <S.SubFloatingIcon2
        onClick={() => props.handleRequireModal("/community/mypost")}
        isSubIconsVisible={props.isSubIconsVisible}
      >
        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
      </S.SubFloatingIcon2>
      <S.SubFloatingIconText2 isSubIconsVisible={props.isSubIconsVisible}>
        내가 쓴 글
      </S.SubFloatingIconText2>
    </>
  );
}
