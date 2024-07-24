import * as S from "./Create_Volunteer.styles";
import Image from "next/image";

export default function CreateVolunteerUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.ContentsContainer>
          <S.TitleBlock>
            <S.Title>대표 사진</S.Title>
          </S.TitleBlock>
          <S.AddMainImg>
            <Image
              src="/images/signup/add_profile.svg"
              alt="add_profile"
              width={28}
              height={28}
            />
          </S.AddMainImg>
          <S.TitleBlock>
            <S.Title>새 모임 이름</S.Title>
          </S.TitleBlock>
          <S.InputVolunteerName
            placeholder="새 모임 이름 작성하기"
            type="text"
            value={props.name}
            onChange={props.handleVolunteerNameChange}
          />
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
          <S.TitleBlock>
            <S.Title>제한 인원</S.Title>
          </S.TitleBlock>
          <S.BigSelectWrap>
            <S.Select title="headcount" defaultValue="">
              <option value="">인원 수 선택</option>
            </S.Select>
            <S.Arrow1Img>
              <Image
                src="/images/info/select_arrow_icon.svg"
                alt="select_arrow_icon"
                width={22}
                height={12}
              />
            </S.Arrow1Img>
          </S.BigSelectWrap>
          <S.NextButtonBlock>
            <S.NextButtonItem
              type="submit"
              onClick={() => {
                props.navigateTo("/volunteer/recommend");
                props.handleSendVolunteerInfo
              }}
            >
              모임 만들기
            </S.NextButtonItem>
          </S.NextButtonBlock>
        </S.ContentsContainer >
      </S.WrapperContents >
    </>
  );
}