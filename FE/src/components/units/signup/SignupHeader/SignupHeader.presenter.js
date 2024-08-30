import * as S from "./SignupHeader.styles";
import Image from "next/image";

export default function SignupHeaderUI(props) {
  return (
    <>
      <S.WrapperHeader>
        <S.ImgContainer>
          <S.ImgBlock>
            <Image
              src="/images/header/forpaw_icon.svg"
              alt="forpaw_icon"
              width={57}
              height={47}
              priority
            />
          </S.ImgBlock>
        </S.ImgContainer>
        <S.LogoContainer>
          <S.LogoBlock>
            <Image
              src="/images/header/forpaw_logo.svg"
              alt="forpaw_logo"
              width={73}
              height={20}
              priority
            />
          </S.LogoBlock>
        </S.LogoContainer>
        <S.LeftArrowContainer>
          <S.LeftArrowBlock onClick={props.PrevPage}>
            <Image
              src="/images/header/arrow_left_icon.svg"
              alt="left_arrow"
              width={15}
              height={25}
            />
          </S.LeftArrowBlock>
        </S.LeftArrowContainer>
      </S.WrapperHeader>
    </>
  );
}
