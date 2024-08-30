import * as S from "./Links.styles";
import React from "react";
import Image from "next/image";

export default function LinksUI(props) {
  return (
    <>
      <S.WrapperLinks ref={props.scrollRef}>
        {props.chatLinks &&
          Object.entries(props.chatLinks).map(([date, links]) => (
            <React.Fragment key={date}>
              <S.DataTextBlock>
                {`${date.slice(0, 4)}년 
                    ${parseInt(date.slice(5, 7))}월 
                    ${parseInt(date.slice(8, 10))}일`}
              </S.DataTextBlock>
              <S.LinksRow>
                {links.map((link, index) => (
                  <S.LinkWrapper key={link.messageId}>
                    {/* 로딩 스켈레톤 */}
                    {/* {!props.loadedImages[index] && <S.ImageLoadingSkeleton />} */}
                    <S.MsgLinkBlock
                      onClick={() => window.open(link.ogUrl, "_blank")}
                    >
                      <S.MsgLinkImg>
                        {link.image && (
                          <img
                            src={link.image}
                            alt="link_icon"
                            width={218}
                            height={99}
                          />
                        )}
                      </S.MsgLinkImg>
                      <S.MsgLinkInfoBlock>
                        <S.MsgLinkTitle>{link.title}</S.MsgLinkTitle>
                        <S.MsgLinkDescription>
                          {link.description}
                        </S.MsgLinkDescription>
                        <S.MsgLinkSite>
                          {props.getMainDomain(link.ogUrl)}
                        </S.MsgLinkSite>
                      </S.MsgLinkInfoBlock>
                    </S.MsgLinkBlock>
                  </S.LinkWrapper>
                ))}
              </S.LinksRow>
            </React.Fragment>
          ))}
        {props.scrollLoading && ( // 스크롤 로딩 중일 때 로딩 아이콘 표시
          <S.LoadingImgBox isLoading={props.scrollLoading}>
            <S.LoadingImg />
          </S.LoadingImgBox>
        )}
      </S.WrapperLinks>
    </>
  );
}
