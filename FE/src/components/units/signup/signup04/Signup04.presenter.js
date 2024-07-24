import * as S from "./Signup04.styles";
import SignupHeader from "../SignupHeader/SignupHeader.container";
import Progress from "../component/Progress";
import Image from "next/image";

export default function SignUpUI04(props) {
  return (
    <>
      <S.WrapperContainer>
        <S.Container>
          <SignupHeader />
          <S.ProgressBarBlock>
            <S.ProgressBar
              value={Progress({ startValue: 75, max: 100, interval: 10 })}
              max={100}
            />
          </S.ProgressBarBlock>
          <S.InfoContainer>
            <S.InfoBlock>
              <S.InfoTitleItem>프로필을 설정해주세요</S.InfoTitleItem>
              <S.InfoContentProfileContainer>
                <S.InfoTitleProfile>프로필 사진</S.InfoTitleProfile>
                <S.SetProfileBlock>
                  <S.SetProfileItem onClick={() => props.handleDataAddClick()}>
                    <input
                      type="file"
                      ref={props.dataInputRef}
                      style={{ display: "none" }}
                      multiple
                      onChange={props.handleDataUpload}
                    />
                    {props.uploadedImage ? (
                      <Image
                        src={props.uploadedImage.src}
                        alt="uploaded_profile"
                        width={100}
                        height={100}
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
                  onChange={props.handleNicknameValueChange}
                />
              </S.InfoNickNameContainer>
              <S.CheckNickNameBlock>
                <S.AvailableNickName>
                  {props.isPossibleNickName == undefined ? (
                    "2자이상 12자 이하로 입력해주세요"
                  ) : props.isPossibleNickName ? (
                    <span style={{ color: "#9AC8FF" }}>
                      사용가능한 닉네임입니다.
                    </span>
                  ) : (
                    <span style={{ color: "#FF9A9A" }}>
                      사용불가능한 닉네임입니다.
                    </span>
                  )}
                </S.AvailableNickName>
                <S.CheckNickNameBtn onClick={() => props.verifyNickname()}>
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
                              onClick={() =>
                                props.handleDistrictSelect(district)
                              }
                            >
                              {district}
                            </S.DistrictOption>
                          )
                        )}
                      </S.DistrictDropdown>
                    )}
                  <S.SubdistrictSelect
                    isSubdistrictFocused={props.isSubdistrictFocused}
                    onClick={props.toggleSubdistrictDropdown}
                  >
                    {props.selectedSubdistrict}
                  </S.SubdistrictSelect>
                  <S.SubdistrictArrowBlock
                    isSubdistrictFocused={props.isSubdistrictFocused}
                    onClick={props.toggleSubdistrictDropdown}
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
                    props.isSubdistrictDropdownOpen && (
                      <S.SubdistrictDropdown>
                        {props.regions[props.selectedProvince][
                          props.selectedDistrict
                        ].map((subdistrict, index) => (
                          <S.SubdistrictOption
                            key={index}
                            onClick={() =>
                              props.handleSubdistrictSelect(subdistrict)
                            }
                          >
                            {subdistrict}
                          </S.SubdistrictOption>
                        ))}
                      </S.SubdistrictDropdown>
                    )}
                </S.DistrictSelectBlock>
              </S.AreaSelectContainer>
              <S.NextButtonBlock>
                <S.NextButtonItem
                  onClick={() => {
                    props.handleSendUserInfo(props.sendUserInfo, "/login/signup/complete");
                  }}
                >
                  완료
                </S.NextButtonItem>
              </S.NextButtonBlock>
            </S.InfoBlock>
          </S.InfoContainer>
        </S.Container>
      </S.WrapperContainer>
    </>
  );
}
