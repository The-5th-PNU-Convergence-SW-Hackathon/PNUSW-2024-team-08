import { useState } from 'react';
import Image from 'next/image';
import * as S from '../Notice.styles'; // LikeImage 컴포넌트의 스타일 파일 경로에 따라 수정해야 할 수도 있습니다.

const LikeImage = ({ initialSrc, alt }) => {
  const [imgSrc, setImgSrc] = useState(initialSrc);
  const [isSecondClick, setIsSecondClick] = useState(false);

  const handleImgClick = () => {
    const newSrc = isSecondClick
      ? '/images/volunteer/announcement/comment_like_icon.svg'
      : '/images/volunteer/announcement/comment_active_like_icon.svg';
    setImgSrc(newSrc);
    setIsSecondClick(!isSecondClick);
  };

  return (
    <S.LikeImg onClick={handleImgClick}>
      <Image src={imgSrc} alt={alt} width={30} height={30} />
    </S.LikeImg>
  );
};

export default LikeImage;