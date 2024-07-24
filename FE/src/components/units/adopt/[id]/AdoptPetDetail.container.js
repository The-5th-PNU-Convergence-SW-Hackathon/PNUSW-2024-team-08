import AdoptPetDetailUI from "./AdoptPetDetail.presenter";
import { useNavigate } from "../../../commons/hooks/useNavigate";
import {
  findProvinceKo,
  findDistrictKo,
} from "../../../commons/district/districtName";
import useRequireLogin from "../../../../../src/components/commons/hooks/useRequireLogin";
import useLikeToggle from "../../../../../src/components/commons/hooks/useLikeToggle";
import { useState } from "react";

export default function AdoptPetDetail({ isSSRLoggedIn, petDetailData }) {
  console.log("AdoptPetDetail isSSRLoggedIn: ", isSSRLoggedIn);

  const [petDetail, setPetDetail] = useState(petDetailData);
  const handleToggleLike = useLikeToggle(isSSRLoggedIn);
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);
  const { navigateTo, navigateBack } = useNavigate();

  const handleToggleLikeWrapper = async (id) => {
    const isSuccess = await handleToggleLike(id);
    if (isSuccess) {
      setPetDetail((prevDetail) => ({
        ...prevDetail,
        isLike: !prevDetail.isLike,
      }));
    }
  };

  return (
    <AdoptPetDetailUI
      petDetail={petDetail}
      handleToggleLikeWrapper={handleToggleLikeWrapper}
      handleRequireModal={handleRequireModal}
      findProvinceKo={findProvinceKo}
      findDistrictKo={findDistrictKo}
      navigateTo={navigateTo}
      navigateBack={navigateBack}
    />
  );
}
