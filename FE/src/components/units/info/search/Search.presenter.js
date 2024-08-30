import * as S from "./Search.styles";
import Image from "next/image";
import AlarmModal from "../../../../../src/components/commons/alarmModal/AlarmModal.presenter";
import { findDistrictKo } from "../../../../../src/components/commons/district/districtName";
import { useFormatDate } from "../../volunteer/hooks/useFormat";

export default function SearchUI(props) {
  return (
    <>
      <AlarmModal show={props.showModal} message={props.modalMessage} />
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
          <S.CancelButton onClick={props.handleCancle}>취소</S.CancelButton>
        </S.SearchContainer>
      </S.WrapperSearch>
      <S.WrapperContents>
        <S.SearchContentsContainer>
          {(props.name == "searchAdopt" || props.name == "searchAll") && props.isActive ? (
            <S.SearchContent className="shelters">
              <S.ContentTitle>보호소</S.ContentTitle>
              <S.ContentBlocks>
                {props.searchInfos?.shelters?.map((infos, index) => (
                  <S.ContentBlock
                    key={infos.id}
                    onClick={() => props.navigateTo(`/adopt/shelters/${infos.id}`)}
                  >
                    <S.ImageContainer>
                      {/* 이미지 컨텐츠 */}
                    </S.ImageContainer>
                    <S.ContentInfos>
                      <S.ContentName>{infos.name}</S.ContentName>
                      <S.ContentDetail>
                        <div style={{ paddingBottom: "12px" }}>{infos.careAddr}</div>
                        <span>{infos.careTel}</span>
                      </S.ContentDetail>
                    </S.ContentInfos>
                  </S.ContentBlock>
                ))}
              </S.ContentBlocks>
              {props.hasMoreShelters && (
                <S.ReqInfosBtn onClick={() => props.handleLoadMore('shelters')}>더보기</S.ReqInfosBtn>
              )}
            </S.SearchContent>
          ) : null}
          {(props.name == "searchPosts" || props.name == "searchAll") && props.isActive ? (
            <S.SearchContent className="community">
              <S.ContentTitle>커뮤니티</S.ContentTitle>
              <S.ContentBlocks>
                {props.searchInfos?.posts?.map((infos, index) => (
                  <S.ContentBlock
                    key={infos.id}
                    onClick={() => props.navigateTo(`/community/${infos.id}`)}
                  >
                    <S.ImageContainer>
                      <Image
                        src={infos.imageURL}
                        alt="post_image"
                        width={74}
                        height={74}
                        objectFit="cover"
                      />
                    </S.ImageContainer>
                    <S.ContentInfos>
                      <S.NameAndDateBlock>
                        <S.ContentName>{infos.title}</S.ContentName>
                        <S.Date>{useFormatDate(infos.date, "yy.mm.dd")}</S.Date>
                      </S.NameAndDateBlock>
                      <S.ContentDetail>
                        {infos.content.slice(0, 20)}...
                      </S.ContentDetail>
                      <S.ContentDetailInfo>
                        <S.ContentCategory>{infos.nickName}</S.ContentCategory>
                        <S.LikeImg style={{marginLeft: "10px"}}>
                          <Image
                            src="/images/volunteer/volunteer_like_icon.svg"
                            alt="like_img"
                            width={18}
                            height={20}
                          />
                        </S.LikeImg>
                        <S.LikeNum>{infos.likeNum}</S.LikeNum>
                        <S.LikeImg>
                          <Image
                            src="/images/community/comments.svg"
                            alt="comment_img"
                            width={18}
                            height={20}
                          />
                        </S.LikeImg>
                        <S.LikeNum>{infos.commentNum
                        }</S.LikeNum>
                      </S.ContentDetailInfo>
                    </S.ContentInfos>
                  </S.ContentBlock>
                ))}
              </S.ContentBlocks>
              {props.hasMorePosts && (
                <S.ReqInfosBtn onClick={() => props.handleLoadMore('posts')}>더보기</S.ReqInfosBtn>
              )}
            </S.SearchContent>
          ) : null}
          {(props.name == "searchGroups" || props.name == "searchAll") && props.isActive ? (
            <S.SearchContent className="groups">
              <S.ContentTitle>모임 리스트</S.ContentTitle>
              <S.ContentBlocks>
                {props.searchInfos?.groups?.map((infos, index) => (
                  <S.ContentBlock
                    key={infos.id}
                    onClick={() => props.navigateTo(`/volunteer/${infos.id}`)}
                  >
                    <S.ImageContainer>
                      <Image
                        src={infos.profileURL}
                        alt="group_image"
                        width={74}
                        height={74}
                        objectFit="cover"
                      />
                    </S.ImageContainer>
                    <S.ContentInfos>
                      <S.ContentName>{infos.name}</S.ContentName>
                      <S.ContentDetail>
                        {infos.description}
                      </S.ContentDetail>
                      <S.ContentDetailInfo>
                        <S.ContentCategory>{infos.category}</S.ContentCategory>
                        <S.ContentDistrict>{findDistrictKo(infos.district)} · </S.ContentDistrict>
                        <S.ContentParticipantNum>멤버 {infos.participantNum} · </S.ContentParticipantNum>
                        <S.ContentMeetingNum>정모 {infos.meetingNum}</S.ContentMeetingNum>
                      </S.ContentDetailInfo>
                    </S.ContentInfos>
                  </S.ContentBlock>
                ))}
              </S.ContentBlocks>
              {props.hasMoreGroups && (
                <S.ReqInfosBtn onClick={() => props.handleLoadMore('groups')}>더보기</S.ReqInfosBtn>
              )}
            </S.SearchContent>
          ) : null}
        </S.SearchContentsContainer>
      </S.WrapperContents>
    </>
  );
}