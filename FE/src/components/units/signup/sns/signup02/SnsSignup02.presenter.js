import * as S from "./SnsSignup02.styles";
import SignupHeader from "../../SignupHeader/SignupHeader.container";
import Progress from "../../component/Progress";
import Image from "next/image";
import Cropper from "react-easy-crop";

export default function SnsSignup02UI(props) {
  return (
    <>
      <S.WrapperContainer>
        <SignupHeader />
        <S.ProgressBarBlock>
          <S.ProgressBar
            value={Progress({ startValue: 66, max: 100, interval: 10 })}
            max={100}
          />
        </S.ProgressBarBlock>
        <S.InfoContainer>
          <S.InfoTitleItem>프로필을 설정해주세요</S.InfoTitleItem>
          <S.InfoContentProfileContainer>
            <S.InfoTitleProfile>프로필 사진</S.InfoTitleProfile>
            <S.SetProfileBlock>
              <S.SetProfileItem onClick={props.handlePhotoAddClick}>
                <input
                  type="file"
                  ref={props.fileInputRef}
                  style={{ display: "none" }}
                  onChange={props.handlePhotoUpload}
                />
                {props.cropComplete ? (
                  <S.ProfileImage
                    src={props.croppedImage}
                    alt="uploaded_profile"
                  />
                ) : (
                  <Image
                    src="/images/signup/add_profile.svg"
                    alt="add_profile"
                    width={28}
                    height={28}
                  />
                )}
              </S.SetProfileItem>
            </S.SetProfileBlock>
          </S.InfoContentProfileContainer>
          <S.InfoNickNameContainer>
            <S.InfoTitleNickName>닉네임</S.InfoTitleNickName>
            <S.SetNickName
              placeholder="닉네임"
              type="text"
              value={props.nickName}
              onChange={props.handleNickNameChange}
            />
          </S.InfoNickNameContainer>
          <S.CheckNickNameBlock>
            <S.AvailableNickName isPossibleNickName={props.isPossibleNickName}>
              {props.nickNameMsg}
            </S.AvailableNickName>
            <S.CheckNickNameBtn
              onClick={() => props.verifyNickName(props.nickName)}
            >
              중복확인
            </S.CheckNickNameBtn>
          </S.CheckNickNameBlock>
          <S.AreaSelectContainer ref={props.wrapperRef}>
            <S.EditTextBlock>
              <S.ProfileInfoLabel>활동 지역</S.ProfileInfoLabel>
            </S.EditTextBlock>
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
              <S.SubdistrictSelect
                isSubDistrictFocused={props.isSubDistrictFocused}
                onClick={props.toggleSubDistrictDropdown}
              >
                {props.selectedSubDistrict}
              </S.SubdistrictSelect>
              <S.SubdistrictArrowBlock
                isSubDistrictFocused={props.isSubDistrictFocused}
                onClick={props.toggleSubDistrictDropdown}
              >
                <Image
                  src="/images/info/select_arrow_icon.svg"
                  alt="select_arrow_icon"
                  width={22}
                  height={12}
                />
              </S.SubdistrictArrowBlock>
              {props.selectedProvince !== "시/도 선택" &&
                props.selectedDistrict !== "구/군/시" &&
                props.isSubDistrictDropdownOpen && (
                  <S.SubdistrictDropdown>
                    {props.regions[props.selectedProvince][
                      props.selectedDistrict
                    ].map((subDistrict, index) => (
                      <S.SubdistrictOption
                        key={index}
                        onClick={() =>
                          props.handleSubDistrictSelect(subDistrict)
                        }
                      >
                        {subDistrict}
                      </S.SubdistrictOption>
                    ))}
                  </S.SubdistrictDropdown>
                )}
            </S.DistrictSelectBlock>
          </S.AreaSelectContainer>
          <S.NextButtonItem
            onClick={() => {
              props.handleSendUserInfo(
                props.userInfo,
                "/login/signup/sns/complete"
              );
            }}
          >
            완료
          </S.NextButtonItem>
        </S.InfoContainer>
      </S.WrapperContainer>

      {props.isCropModalOpen && (
        <S.CropModalOverlay onClick={props.closeCropModal}>
          <S.CropModalContent onClick={(e) => e.stopPropagation()}>
            <S.CropTitle>사진 자르기</S.CropTitle>
            <S.CropContainer>
              <Cropper
                image={props.photo ? props.photo.preview : ""}
                crop={props.crop}
                zoom={props.zoom}
                aspect={1}
                onCropChange={props.setCrop}
                onZoomChange={props.setZoom}
                onCropComplete={props.onCropComplete}
              />
            </S.CropContainer>
            <S.CropBtnBlock>
              <S.CancelBtn onClick={props.closeCropModal}>취소</S.CancelBtn>
              <S.UploadBtn onClick={props.handleCroppedImageUpload}>
                전송
              </S.UploadBtn>
            </S.CropBtnBlock>
          </S.CropModalContent>
        </S.CropModalOverlay>
      )}
    </>
  );
}
