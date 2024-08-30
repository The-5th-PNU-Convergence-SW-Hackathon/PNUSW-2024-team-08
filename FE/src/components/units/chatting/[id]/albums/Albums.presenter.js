import * as S from "./Albums.styles";
import React from "react";
import Image from "next/image";

export default function AlbumsUI(props) {
  return (
    <>
      <S.WrapperAlbums ref={props.scrollRef}>
        {props.chatImages &&
          Object.entries(props.chatImages).map(([date, images]) => (
            <React.Fragment key={date}>
              <S.DataTextBlock>
                {`${date.slice(0, 4)}년 
                    ${parseInt(date.slice(5, 7))}월 
                    ${parseInt(date.slice(8, 10))}일`}
              </S.DataTextBlock>
              <S.ImagesRow>
                {images.map((image, index) => (
                  <S.ImageWrapper key={image.messageId}>
                    {/* 로딩 스켈레톤 */}
                    {!props.loadedImages[index] && <S.ImageLoadingSkeleton />}
                    <Image
                      src={image.objects[0].objectURL}
                      alt={`image-${index}`}
                      width={120} // 원하는 크기로 설정
                      height={120} // 원하는 크기로 설정
                      layout="responsive"
                      objectFit="cover"
                      onLoad={() => props.handleImageLoad(index)}
                      style={{
                        display: props.loadedImages[index] ? "block" : "none",
                      }}
                    />
                  </S.ImageWrapper>
                ))}
              </S.ImagesRow>
            </React.Fragment>
          ))}
        {props.scrollLoading && ( // 스크롤 로딩 중일 때 로딩 아이콘 표시
          <S.LoadingImgBox isLoading={props.scrollLoading}>
            <S.LoadingImg />
          </S.LoadingImgBox>
        )}
      </S.WrapperAlbums>
    </>
  );
}
