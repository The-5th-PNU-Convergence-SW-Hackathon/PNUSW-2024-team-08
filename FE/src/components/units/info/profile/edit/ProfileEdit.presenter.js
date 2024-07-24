import { useEffect } from "react";
import * as S from "./ProfileEdit.styles";
import Image from "next/image";

export default function ProfileEditUI(props) {
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
            <S.Title>프로필 수정</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperProfileEdit>
        <S.ProfileEditPhotoContainer>
          <S.ProfileEditPhoto>
            <Image
              src="/images/info/profile_photo_icon.svg"
              alt="profile_photo_icon"
              width={103}
              height={103}
            />
          </S.ProfileEditPhoto>
          <S.ProfileEditPhoto>
            <Image
              src="/images/info/profile_photo_edit_icon.svg"
              alt="profile_photo_edit_icon"
              width={103}
              height={103}
            />
          </S.ProfileEditPhoto>
          <S.EditText>편집</S.EditText>
        </S.ProfileEditPhotoContainer>
        <S.NameText>{props.profile?.name}</S.NameText>
        <S.ProfileEditContainer>
          <S.EditTextBlock>
            <S.EditTitle>프로필 정보</S.EditTitle>
          </S.EditTextBlock>
          <S.EditTextBlock>
            <S.ProfileInfoLabel>닉네임</S.ProfileInfoLabel>
          </S.EditTextBlock>
          <S.NickNameEditBlock>
            <S.NickNameInput
              type="text"
              placeholder={props.profile?.nickName}
              value={props.nickName} // 입력 필드에 상태 값을 연결
              onChange={props.handleNickNameChange} // 입력 변경 시 핸들러 호출
            />
            <S.NickNameEditButton
              onClick={() => props.verifyNickName(props.nickName)}
            >
              변경
            </S.NickNameEditButton>
            <S.NickNameMsg isPossibleNickName={props.isPossibleNickName}>
              {props.nickNameMsg}
            </S.NickNameMsg>
          </S.NickNameEditBlock>
          <S.AreaSelectContainer ref={props.wrapperRef}>
            <S.EditTextBlock>
              <S.ProfileInfoLabel>활동 지역</S.ProfileInfoLabel>
            </S.EditTextBlock>
            <S.ProvinceContainer>
              <S.ProvinceSelect
                isProvinceFocused={props.isProvinceFocused}
                onClick={props.toggleProvinceDropdown}
              >
                {props.selectedProvince}
              </S.ProvinceSelect>
              <S.ProvinceArrowBlock
                isProvinceFocused={props.isProvinceFocused}
                onClick={props.toggleProvinceDropdown}
              >
                <Image
                  src="/images/info/select_arrow_icon.svg"
                  alt="select_arrow_icon"
                  width={22}
                  height={12}
                />
              </S.ProvinceArrowBlock>
              {props.isProvinceDropdownOpen && (
                <S.ProvinceDropdown>
                  {Object.keys(props.regions).map((province, index) => (
                    <S.ProvinceOption
                      key={index}
                      onClick={() => props.handleProvinceSelect(province)}
                    >
                      {province}
                    </S.ProvinceOption>
                  ))}
                </S.ProvinceDropdown>
              )}
            </S.ProvinceContainer>
            <S.DistrictSelectBlock>
              <S.DistrictSelect
                isDistrictFocused={props.isDistrictFocused}
                onClick={props.toggleDistrictDropdown}
              >
                {props.selectedDistrict}
              </S.DistrictSelect>
              <S.DistrictArrowBlock
                isDistrictFocused={props.isDistrictFocused}
                onClick={props.toggleDistrictDropdown}
              >
                <Image
                  src="/images/info/select_arrow_icon.svg"
                  alt="select_arrow_icon"
                  width={22}
                  height={12}
                />
              </S.DistrictArrowBlock>
              {props.selectedProvince !== "시/도 선택" &&
                props.isDistrictDropdownOpen && (
                  <S.DistrictDropdown>
                    {Object.keys(props.regions[props.selectedProvince]).map(
                      (district, index) => (
                        <S.DistrictOption
                          key={index}
                          onClick={() => props.handleDistrictSelect(district)}
                        >
                          {district}
                        </S.DistrictOption>
                      )
                    )}
                  </S.DistrictDropdown>
                )}
              <S.SubDistrictSelect
                isSubDistrictFocused={props.isSubDistrictFocused}
                onClick={props.toggleSubDistrictDropdown}
              >
                {props.selectedSubDistrict}
              </S.SubDistrictSelect>
              <S.SubDistrictArrowBlock
                isSubDistrictFocused={props.isSubDistrictFocused}
                onClick={props.toggleSubDistrictDropdown}
              >
                <Image
                  src="/images/info/select_arrow_icon.svg"
                  alt="select_arrow_icon"
                  width={22}
                  height={12}
                />
              </S.SubDistrictArrowBlock>
              {props.selectedProvince !== "시/도 선택" &&
                props.selectedDistrict !== "구/군/시" &&
                props.isSubDistrictDropdownOpen && (
                  <S.SubDistrictDropdown>
                    {props.regions[props.selectedProvince][
                      props.selectedDistrict
                    ].map((subDistrict, index) => (
                      <S.SubDistrictOption
                        key={index}
                        onClick={() =>
                          props.handleSubDistrictSelect(subDistrict)
                        }
                      >
                        {subDistrict}
                      </S.SubDistrictOption>
                    ))}
                  </S.SubDistrictDropdown>
                )}
            </S.DistrictSelectBlock>
          </S.AreaSelectContainer>
        </S.ProfileEditContainer>
        <S.ProfileEditButton
          onClick={() =>
            props.handleUpdateUserInfo(props.isPossibleNickName, props.userInfo)
          }
        >
          프로필 수정
        </S.ProfileEditButton>
      </S.WrapperProfileEdit>
    </>
  );
}
