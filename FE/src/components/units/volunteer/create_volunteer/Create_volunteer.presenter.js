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
          <S.AddMainImgContainer onClick={props.handlePhotoAddClick}>
            <S.AddMainImgBlock>
              <S.AddMainImgItem>
                <input
                  type="file"
                  ref={props.fileInputRef}
                  style={{ display: "none" }}
                  onChange={props.handlePhotoUpload}
                />
                {props.photo ? (
                  <S.VolunteerMainImage
                    src={props.photo.preview}
                    alt="mainImg"
                  />
                ) : (
                  <Image
                    src="/images/signup/add_profile.svg"
                    alt="add_profile"
                    width={28}
                    height={28}
                  />
                )}
              </S.AddMainImgItem>
            </S.AddMainImgBlock>
          </S.AddMainImgContainer>
          <S.TitleBlock>
            <S.Title>새 모임 이름</S.Title>
          </S.TitleBlock>
          <S.InputVolunteerName
            placeholder="새 모임 이름 작성하기"
            type="text"
            value={props.name}
            onChange={props.handleVolunteerNameChange}
          />
          <S.TitleBlock>
            <S.Title>모임 소개</S.Title>
          </S.TitleBlock>
          <S.DescriptionContainer
            ref={props.textAreaRef}
            rows="5"
            cols="40"
            placeholder="모임을 소개하는 글을 간단하게 작성해주세요"
            onChange={props.handleVolunteerDescription}
            value={props.description}
          />
          <S.TitleBlock>
            <S.Title>카테고리</S.Title>
          </S.TitleBlock>
          <S.CategoryContainer ref={props.CategoryRef}>
            <S.CategorySelect
              isCategoryFocused={props.isCategoryFocused}
              onClick={props.toggleCatergoryDropdown}
            >
              {props.selectedCategory}
            </S.CategorySelect>
            <S.CategoryArrowBlock onClick={props.toggleCatergoryDropdown}>
              <Image
                src="/images/info/select_arrow_icon.svg"
                alt="select_arrow_icon"
                width={22}
                height={12}
              />
            </S.CategoryArrowBlock>
            {props.isCategoryDropdownOpen && (
              <S.CategoryDropdown>
                <S.CategoryOption onClick={props.handleCategorySelect}>봉사</S.CategoryOption>
                <S.CategoryOption onClick={props.handleCategorySelect}>소모임</S.CategoryOption>
              </S.CategoryDropdown>
            )}
          </S.CategoryContainer>
          <S.TitleBlock>
            <S.Title>제한 인원</S.Title>
          </S.TitleBlock>
          <S.PeopleNumContainer ref={props.PeopleNumRef}>
            <S.PeopleNumSelect
              isPeoepleFocused={props.isPeoepleFocused}
              onClick={props.togglePeopleNumDropdown}
            >
              {props.selectedPeopleNum}
            </S.PeopleNumSelect>
            <S.PeopleNumArrowBlock>
              <Image
                src="/images/info/select_arrow_icon.svg"
                alt="select_arrow_icon"
                width={22}
                height={12}
              />
            </S.PeopleNumArrowBlock>
            {props.isPeopleNumDropdownOpen && (
              <S.PeopleNumDropdown>
                <S.PeopleNumOption onClick={props.handlePeopleNumSelect}>20</S.PeopleNumOption>
                <S.PeopleNumOption onClick={props.handlePeopleNumSelect}>30</S.PeopleNumOption>
                <S.PeopleNumOption onClick={props.handlePeopleNumSelect}>40</S.PeopleNumOption>
                <S.PeopleNumOption onClick={props.handlePeopleNumSelect}>50</S.PeopleNumOption>
                <S.PeopleNumOption onClick={props.handlePeopleNumSelect}>제한인원없음</S.PeopleNumOption>
              </S.PeopleNumDropdown>
            )}
          </S.PeopleNumContainer>
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
          <S.NextButtonBlock>
            <S.NextButtonItem
              type="submit"
              onClick={() => {
                props.handleSendVolunteerInfo(
                  props.sendUserInfo,
                  "/volunteer/joined"
                )
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