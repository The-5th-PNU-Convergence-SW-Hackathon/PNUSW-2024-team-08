import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { fetchUserList } from "../Approve.queries";


export const useFetchUserList = () => {
  const router = useRouter();
  const id = router.query.id;
  const [userListData, setUserListData] = useState([]);

  useEffect(() => {
    async function loadUserList() {
      try{
        const data = await fetchUserList(id);
        if(data) {
          setUserListData(data.applicants);
        }
      }catch(error){
        console.log("유저목록 불러오기 실패: ", error);
      }
    }

    loadUserList();
  },[]);


  return {
    userListData
  }
}