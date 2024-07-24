import * as S from "./Search.styles";
import Image from "next/image";

export default function SearchUI(props) {
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
              onClick={props.navigateBack}
            />
            <S.Title>검색하기</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperSearch>
        <S.SearchContainer>
          <S.SearchWindow
            type="text"
            placeholder="검색어를 입력해주세요"
            value={props.search}
            onChange={props.handleSearchChange}
            onKeyDown={(e) => {
              props.loadSearch(e);
            }}
          />
          <S.SearchImageContainer>
            <Image
              src="/images/info/search_icon_info.svg"
              alt="search_icon"
              width={31.36}
              height={31.36}
            />
          </S.SearchImageContainer>
          <S.CancelButton>취소</S.CancelButton>
        </S.SearchContainer>
      </S.WrapperSearch>
      <S.WrapperContents>
        <S.SearchContentsContainer /*검색내용의 전체 길이*/>
          {(props.name == "searchAdopt" || props.name == "searchAll") && props.isActive ? (
            <S.SearchContent className="shelters" /*보호소 검색 결과*/>
              <S.ContentTitle>보호소</S.ContentTitle>
              <S.ContentBlocks>
                {props.searchInfos?.shelters?.map((infos, index) => (
                  <S.ContentBlock key={infos.id}>
                    <S.ImageContainer>

                    </S.ImageContainer>
                    <S.ContentInfos>
                      <S.ContentName>{infos.name}</S.ContentName>
                      <S.ContentDetail>
                        <p style={{ paddingBottom: "12px" }}>{infos.careAddr}</p>
                        <span>{infos.careTel}</span>
                      </S.ContentDetail>
                    </S.ContentInfos>
                  </S.ContentBlock>
                ))}
              </S.ContentBlocks>
              <S.ReqInfosBtn>더보기</S.ReqInfosBtn>
            </S.SearchContent>
          ) : null}
          {(props.name == "searchPosts" || props.name == "searchAll") && props.isActive ? (
            <S.SearchContent className="community">
              <S.ContentTitle>커뮤니티</S.ContentTitle>
              <S.ContentBlocks>
                {props.searchInfos?.posts?.map((infos, index) => (
                  <S.ContentBlock key={infos.id}>
                    <S.ImageContainer>

                    </S.ImageContainer>
                    <S.ContentInfos>
                      <S.ContentName>{infos.title}</S.ContentName>
                      <S.ContentDetail>
                        {infos.content}
                      </S.ContentDetail>
                    </S.ContentInfos>
                  </S.ContentBlock>
                ))}
              </S.ContentBlocks>
              <S.ReqInfosBtn>더보기</S.ReqInfosBtn>
            </S.SearchContent>
          ) : null}
          {(props.name == "searchGroups" || props.name == "searchAll") && props.isActive ? (
            <S.SearchContent className="groups">
              <S.ContentTitle>모임 리스트</S.ContentTitle>
              <S.ContentBlocks>
                {props.searchInfos?.groups?.map((infos, index) => (
                  <S.ContentBlock key={infos.id}>
                    <S.ImageContainer>

                    </S.ImageContainer>
                    <S.ContentInfos>
                      <S.ContentName>{infos.name}</S.ContentName>
                      <S.ContentDetail>
                        {infos.description}
                      </S.ContentDetail>
                    </S.ContentInfos>
                  </S.ContentBlock>
                ))}
              </S.ContentBlocks>
              <S.ReqInfosBtn>더보기</S.ReqInfosBtn>
            </S.SearchContent>
          ) : null}
        </S.SearchContentsContainer>
      </S.WrapperContents>
    </>
  )
}