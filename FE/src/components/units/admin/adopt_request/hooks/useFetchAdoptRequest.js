import { useState } from "react";
import { fetchAdoptRequest } from "../Adopt_Request.queries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    applies: [
      {
        applyId: 23,
        applyDate: "2024-04-24 09:20",
        animalId: 7,
        kind: "포매리안",
        gender: "M",
        age: "2024(60일미만)(년생)",
        userName: "이한홍",
        tel: "010-1234-5678",
        residence: "부산광역시 금정구 부산대학로64번길 79 (장전동, xx아파트)",
        careName: "금정 보호소",
        careTel: "051-1234-4321",
        status: "PROCESSING",
      },
      {
        applyId: 24,
        applyDate: "2024-04-24 09:20",
        animalId: 8,
        kind: "진돗개",
        gender: "M",
        age: "2024(60일미만)(년생)",
        userName: "탁호영",
        tel: "010-4567-5678",
        residence: "대구광역시 수성구 두산동",
        careName: "수성 보호소",
        careTel: "053-1234-4321",
        status: "FINISHED",
      },
    ],
  },
};

export default function useFetchAdoptRequest() {
  const [requestInfos, setRequestInfos] = useState(example.result.applies);

  return {
    requestInfos,
  };
}
