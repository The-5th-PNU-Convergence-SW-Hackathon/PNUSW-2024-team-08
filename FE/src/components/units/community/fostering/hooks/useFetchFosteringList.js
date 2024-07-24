import { useEffect, useState } from "react";
import { fetchFosteringList } from "../CommunityFostering.queries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    adoptions: [
      {
        id: 23,
        name: "김동영",
        title: "진도개 입양 후기 올립니다~",
        content: "소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀",
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
        id: 26,
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
        id: 27,
        name: "조준서",
        title: "시바견을 입양하였습니다!",
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

export default function useFetchAdoptionList() {
  const [fosterings, setFosterings] = useState([]);
  const [sort, setSort] = useState("likeNum");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadInitialFosterings = async () => {
        const page = getPageNumber(sort);
        let initialFosterings = [];
        for (let i = 0; i <= page; i++) {
          const fetchedFosterings = await fetchFosteringList(i, sort);
          if (fetchedFosterings) {
            initialFosterings = [...initialFosterings, ...fetchedFosterings];
          }
        }

        setFosterings(initialFosterings);
      };
      console.log(
        `${sort}AdoptionPage = `,
        parseInt(sessionStorage.getItem(`${sort}FosteringPage`), 10)
      );

      setFosterings([]);
      loadInitialFosterings();
    }
  }, [sort]);

  const getPageNumber = (sort) => {
    if (typeof window !== "undefined") {
      const page = parseInt(sessionStorage.getItem(`${sort}FosteringPage`), 10);
      return isNaN(page) ? 0 : page;
    }
    return 0;
  };

  const setPageNumber = (sort, page) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(`${sort}FosteringPage`, page.toString());
    }
  };

  const loadFosterings = async (page, sort) => {
    const fetchedFosterings = await fetchFosteringList(page, sort);
    if (fetchedFosterings) {
      const updatedFosterings = [...fosterings, ...fetchedFosterings];

      setFosterings(updatedFosterings);
      setPageNumber(sort, page);
    }
  };

  const handleLoadFosterings = async () => {
    const page = getPageNumber(sort) + 1;
    await loadFosterings(sort, page);
  };

  return { fosterings, handleLoadFosterings, sort, setSort };
}
