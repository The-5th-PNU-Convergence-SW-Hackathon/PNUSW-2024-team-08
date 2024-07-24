// Navigation.present.js
import * as S from "./Navigation.styles";
import Image from "next/image";

export default function NavigationUI(props) {
  return (
    <S.WrapperNavigation active={props.isJoinedClikced}>
      {Object.keys(props.paths).map((iconName) => (
        <S.NavigationIconContainer
          key={iconName}
          onClick={() => props.handleIconClick(iconName)}
        >
          <Image
            src={props.getIconSrc(iconName)}
            alt={`${iconName}_icon`}
            width={44}
            height={44}
          />
        </S.NavigationIconContainer>
      ))}
    </S.WrapperNavigation>
  );
}
