import { useEffect, useState } from "react";
import { fetchAdoptionList } from "../CommunityAdoption.queries";

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
  const [adoptions, setAdoptions] = useState([]);
  const [sort, setSort] = useState("likeNum");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadInitialAdoptions = async () => {
        const page = getPageNumber(sort);
        let initialAdoptions = [];
        for (let i = 0; i <= page; i++) {
          const fetchedAdoptions = await fetchAdoptionList(i, sort);
          if (fetchedAdoptions) {
            initialAdoptions = [...initialAdoptions, ...fetchedAdoptions];
          }
        }

        setAdoptions(initialAdoptions);
      };
      console.log(
        `${sort}AdoptionPage = `,
        parseInt(sessionStorage.getItem(`${sort}AdoptionPage`), 10)
      );

      setAdoptions([]);
      loadInitialAdoptions();
    }
  }, [sort]);

  const getPageNumber = (sort) => {
    if (typeof window !== "undefined") {
      const page = parseInt(sessionStorage.getItem(`${sort}AdoptionPage`), 10);
      return isNaN(page) ? 0 : page;
    }
    return 0;
  };

  const setPageNumber = (sort, page) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(`${sort}AdoptionPage`, page.toString());
    }
  };

  const loadAdoptions = async (page, sort) => {
    const fetchedAdoptions = await fetchAdoptionList(page, sort);
    if (fetchedAdoptions) {
      const updatedAdoptions = [...adoptions, ...fetchedAdoptions];

      setAdoptions(updatedAdoptions);
      setPageNumber(sort, page);
    }
  };

  const handleLoadAdoptions = async () => {
    const page = getPageNumber(sort) + 1;
    await loadAdoptions(sort, page);
  };

  return { adoptions, handleLoadAdoptions, sort, setSort };
}
