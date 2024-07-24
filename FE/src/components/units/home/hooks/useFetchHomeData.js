import { useEffect, useState } from "react";
import { fetchHomeData } from "../Home.queries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    pets: [
      {
        id: 23,
        name: "다롱이",
        age: "2024(60일미만)(년생)",
        gender: "M",
        specialMark: "사람을 좋아하고 활발함",
        region: "경상북도 경산시",
        inquiryNum: 25,
        likeNum: 20,
        isLike: true,
        profileURL: "https://s3.xxxx.xx.com",
      },
      {
        id: 24,
        name: "메롱이",
        age: "2024(60일미만)(년생)",
        gender: "M",
        specialMark: "활발함",
        region: "대구광역시 수성구",
        inquiryNum: 5,
        likeNum: 14,
        isLike: true,
        profileURL: "https://s3.xxxx.xx.com",
      },
      {
        id: 27,
        name: "메리",
        age: "2024(60일미만)(년생)",
        gender: "M",
        specialMark: "활발함",
        region: "대구광역시 수성구",
        inquiryNum: 5,
        likeNum: 14,
        isLike: true,
        profileURL: "https://s3.xxxx.xx.com",
      },
    ],
    groups: [
      {
        id: 15,
        name: "고양이 사랑",
        description: "집사들의 모임입니다!",
        participation: 20,
        category: "봉사",
        province: "DAEGU",
        district: "SUSEONG",
        profileURL: "https://s3.xxxx.xx.com",
        likeNum: 18,
        isLike: false,
      },
      {
        id: 16,
        name: "고양이 사랑",
        description: "집사들의 모임입니다!",
        participation: 20,
        category: "봉사",
        province: "DAEGU",
        district: "SUSEONG",
        profileURL: "https://s3.xxxx.xx.com",
        likeNum: 18,
        isLike: true,
      },
      {
        id: 17,
        name: "고양이 사랑",
        description: "집사들의 모임입니다!",
        participation: 20,
        category: "봉사",
        province: "DAEGU",
        district: "SUSEONG",
        profileURL: "https://s3.xxxx.xx.com",
        likeNum: 18,
        isLike: true,
      },
    ],
    posts: [
      {
        id: 23,
        name: "이한홍",
        title: "진도개 입양 후기 올립니다~",
        content:
          "소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀 소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀",
        date: "2023-03-28T14:30",
        commentNum: 3,
        likeNum: 5,
        imageURL: "https://s3.1xxx.xx.com",
      },
      {
        id: 24,
        name: "조준서",
        title: "시바견을 입양하였습니다!",
        content:
          "소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀 소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀",
        date: "2023-05-28T10:10",
        commentNum: 4,
        likeNum: 2,
        imageURL: "https://s3.1xxx.xx.com",
      },
      {
        id: 25,
        name: "박재홍",
        title: "진돗개를 입양하였습니다!",
        content:
          "소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀 소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀",
        date: "2023-05-28T10:10",
        commentNum: 4,
        likeNum: 2,
        imageURL: "https://s3.1xxx.xx.com",
      },
    ],
  },
};

export default function useFetchHomeData() {
  const [homeData, setHomeData] = useState();

  useEffect(() => {
    const loadHomeData = async () => {
      // 실제 데이터 가져오기 시도
      try {
        const data = await fetchHomeData();
        if (data) {
          setHomeData(data);
          console.log("data : ", data);
        }
      } catch (error) {
        console.error("Error fetching home data: ", error);
        // 예제 데이터로 설정
        setHomeData(example.result);
        console.log("Using example data: ", example.result);
      }
    };

    loadHomeData();
  }, []);

  return { homeData };
}
