import { useState, useEffect } from "react";
import useFetchVolunteer from "../../hooks/useFetchVolunteer";
import { fetchVolunteerNewGroup } from "../VolunteerRegion.quries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    newGroups: [
      {
        id: 23,
        name: "동물 사랑 협회",
        category: "봉사",
        district: "수성구",
        subDistrict: "두산동",
        profileURL: "/images/volunteer/volunteer_new.svg",
      },
      {
        id: 24,
        name: "동물 사랑 협회2",
        category: "봉사",
        district: "수성구",
        subDistrict: "두산동",
        profileURL: "/images/volunteer/volunteer_new.svg",
      },
    ],
  },
};

export default function useFetchVolunteerNewGrouop() {
  const { volunteerInfos } = useFetchVolunteer(); //전체적인 봉사활동 관련 api를 먼저 불러온다.
  const [pageNumber, setPageNumber] = useState(0);
  const [volunteerNewGroupInfos, setVolunteerNewGroup] = useState([]);

  useEffect(() => {
    console.log("volunteerNewGroups data : ", volunteerInfos);
    if (volunteerInfos && volunteerInfos.newGroups) {
      setVolunteerNewGroup(volunteerInfos.newGroups);
    }
  }, [volunteerInfos]);

  const loadUpdatedVolunteerNewGroupData = async () => {
    const fetchedVolunteerNewGroupData = example.result.newGroups;
    setVolunteerNewGroup((prevState) => [
      ...prevState,
      fetchedVolunteerNewGroupData,
    ]);
    setPageNumber((prevePageNumber) => prevePageNumber + 1);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("pageNumber_newGroup", pageNumber);
      localStorage.setItem(
        `volunteerNewGroupData`,
        JSON.stringify(volunteerNewGroupInfos)
      );
    }
  }, [pageNumber, volunteerNewGroupInfos]);

  return { volunteerNewGroupInfos, loadUpdatedVolunteerNewGroupData }
}
