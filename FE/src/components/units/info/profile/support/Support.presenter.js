import * as S from "./Support.styles";
import Image from "next/image";

export default function SupportUI(props) {
  return (
    <>
      <S.WrapperHeader>
        <S.Header>
          <S.LeftArrowTitleContainer>
            <Image
              src="/images/header/arrow_left_icon.svg"
              alt="arrow_left_icon"
              width={15}
              height={25}
              onClick={props.navigateTo("/info/profile")}
            />
            <S.Title>문의하기</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperSupport>
        <S.SearchContainer>
          <S.SearchWindow
            type="text"
            placeholder="검색어를 입력해주세요"
            value={props.search}
            onChange={props.handleSearchChange}
          />
          <S.SearchImageContainer>
            <Image
              src="/images/info/search_icon_info.svg"
              alt="search_icon"
              width={31.36}
              height={31.36}
            />
          </S.SearchImageContainer>
        </S.SearchContainer>
      </S.WrapperSupport>
    </>
  );
}
