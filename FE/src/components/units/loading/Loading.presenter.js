import * as S from "./Loading.styles";
import Image from "next/image";

export default function LoadingUI(props) {
  return (
    <S.WrapperLoading>
      <S.BlurryElement blurred={props.blurred}>
        <S.WrapperImage>
          <Image
            src="/images/loading/loading_paw.svg"
            alt="loading_paw"
            width={124}
            height={138}
          />
        </S.WrapperImage>
      </S.BlurryElement>
    </S.WrapperLoading>
  )
}