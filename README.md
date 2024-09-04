
![1p](https://github.com/user-attachments/assets/7f922232-a1e2-45c5-9331-986002f45b7b)

> 미리보기
> - 📱 [서비스 사용 방법](##-4.-설치-및-사용-방법)</br>
> - ℹ️ [프로젝트 소개](##-1-프로젝트-소개)</br>
> - 📌 [주요 내용](####-□-주요-내용)</br>
> - ☀️ [타 서비스와 차별점](###-1.4.-기존-서비스-대비-차별성)</br>
> - 🙇🏻‍♂️ [팀 소개](##-6.-팀-소개)</br>
</br>

## 1. 프로젝트 소개
### 1.1. 개발배경 및 필요성
#### □ 개발 배경</br>

<img width="700" alt="스크린샷 2024-09-04 오후 12 20 57" src="https://github.com/user-attachments/assets/0d9f82c3-976c-4281-a4b4-517154df8397">

> 지금은 반려동물의 시대입니다. 한국의 반려가구 수는 2020년 532만 가구에서 2022년 552만 가구로 2.8%p 상승했습니다[^1]. 동물 문제 대한 전국민적 인식 향상에 따라 유기·유실동물은 지속해서 감소하고 있고((’20) 130만 마리 → (’21) 118만 마리 → (’22) 113만 마리)[^2], 향후 1년 이내 반려동물 입양 계획이 있는 응답자 중 유실·유기 동물을 입양할 의향이 있는 비율은 84.4% 였습니다[^3]. 이렇듯 유실·유기동물에 관한 인식 수준이 개선되고 있고, 입양도 증가하고 있는 상황입니다.</br>
</br>
i. 저조한 보호소 입양율과 펫숍 선호 현상</br>
</br>

<img width="700" alt="스크린샷 2024-09-04 오후 12 21 59" src="https://github.com/user-attachments/assets/027e491f-40b8-4358-8b7c-6286ff7efaa2">


> 하지만 이러한 현상과는 달리, 동물을 입양하는 과정에서 지인에게 무료로 분양을 받거나(41.8%) 펫숍에서 구입하는 비율(24.0%)에 비해 지자체 동물 보호센터(4.7%)나 민간 동물보호 시설(4.3%)에서 입양하는 비율은 현저히 낮았습니다[^4]. 이는 직접 개체 확인이 가능하고 원하는 품종·생김새의 동물을 선택할 수 있는 곳에서 입양하고 싶은 의견이 반영되었기 때문입니다[^5]. 그렇기 때문에 펫숍의 입양 비용(평균 57.9만 원)이 민간 보호시설(평균 17.7만 원)과 지인에게 분양(평균 35.1만 원) 받는 것보다 훨씬 비쌈에도 불구하고 여전히 인기가 있는 것입니다[^6]. 한 연구는 이러한 현상을 '가장 쉽고 편하게 원하는 품종을 구하고자 하는 경향이 반영된 것'이라고 분석했습니다.[^7]</br>
</br>
ii. 지역 유기동물 관리의 현실</br>
<img width="700" alt="스크린샷 2024-09-04 오후 12 19 32" src="https://github.com/user-attachments/assets/07194ad5-f0a4-42c0-8e1e-01cf96cbdfb4">


</br>

> 그리고 유실·유기동물과 관련된 부산의 상황은 그렇게 낙관적이지 않습니다. 부산은 모든 광역시 중 한 해에 발생하는 유기·유실 동물 수가 가장 많지만[^8], 부산의 동물보호센터는 단 5개소에 불과합니다[^9]. 서울에 16개소, 대구에 23개소가 있는 것과 비교하면 턱없이 작은 숫자입니다. 그마저도 지자체 직영으로 운영되는 곳이 없기 때문에 상황은 더욱 열악합니다. 동물보호센터의 부족도 문제지만 센터 내에서의 동물 관리 실태는 더욱 심각합니다. 부산 유기동물의 자연사율은 전국 1위(57%)이고, 안락사율은 전국 최하위(2.7%)를 기록했으며, 이는 '원인 분석 및 대책 마련이 필요한 것'이라고 언급했습니다[^10]. 또한, 유실·유기동물이 질병이나 사고로 사망하는 수가 매년 3천 마리 이상이고, 3년간 예방접종 비율이 1.8%에 그치는 등 관리가 제대로 되지 않는 상황입니다[^11]. </br>
</br>

#### □ 개발 필요성</br>
i. 신종 펫숍의 유행
</br>
<img width="800" alt="스크린샷 2024-09-04 오후 12 16 39" src="https://github.com/user-attachments/assets/4fffc530-53b5-4ad5-acdc-01ed9787feaa">

> 동물 분양을 원하는 사람들은 유실·유기동물 입양을 고려하지 않는 이유로 ‘어린 동물을 키우고 싶지만, 유기동물은 보통 성견이 많다(38.9%)’, ‘입양 방법이나 절차 등을 잘 모른다(27.8%).'를 꼽았습니다[^12]. 동물의 특징과 특성에 따라 분양자의 선호가 나뉘고, 좋은 마음으로 유기동물을 입양하려고 해도 여전히 특정 종이나 크기에 따른 선호의 차이가 존재한다는 의미입니다. 이런 흐름에 따라 현재 ‘유기동물 보호소’ 라는 이름을 가진 신종 펫숍이 유행하고 있습니다.</br>

> 이는 지자체 유기견 보호소나 동물 단체에서 운영하는 센터가 아닌, 이름만 보호소로 바꾼 펫숍인 것입니다. 이곳에서는 유기동물을 미끼로 삼아 사람들을 모은 후 유기동물에 대한 단점을 설명하거나 혹은 아예 유기동물을 보여주지도 않은 채, 유기동물이 아닌 파양동물을 높은 금액을 지불하고 분양받도록 강권합니다[^13]. 하지만, 신종 펫숍은 귀엽고 키우기 쉬운 작은 품종을 분양할 수 있다고 광고하고 있기 때문에 계속 수요가 존재하고, 보호소 명칭을 쓰지 못하게 하는 동물보호법 개정안이 아직 국회에서 통과하지 못했기에 이런 형태의 사업이 여전히 확장하고 있습니다[^14].</br>
</br>
ii. 봉사자와 보호소 간 수요·공급이 불일치</br>
</br>
<img width="800" alt="스크린샷 2024-09-04 오후 12 18 51" src="https://github.com/user-attachments/assets/64913931-c3b6-4c69-8650-20c011e1372e">


> 또한, 열악한 인프라를 가진 부산의 동물보호센터에는 일손이 많이 필요한 상황입니다. 유기동물 봉사에 대한 수요가 꾸준히 있음에도 관련 서비스의 부족과 인프라 구축의 부재로 시민의 참여가 더딘 것이 현실입니다. 하나의 예로, 부산동물보호센터의 네이버 카페에는 매주 주말마다 5개에서 50개의 봉사 신청 댓글이 달리고 있습니다[^15]. 부산대 유기견 봉사 동아리 前 회장은 센터에서 원하는 봉사 인력이 그때그때 다르기 때문에 수요에 맞는 공급을 제공할 수 있는 서비스가 있으면 좋을 것 같다고 말했습니다. 다른 동아리원은 많은 보호소가 봉사자의 유동적인 참여를 원하기 때문에 선한 마음으로 봉사에 참여하려고 하는 봉사자 입장에서는 제약 조건이 존재한다고 이야기했습니다.[^16]</br>

> 이러한 수요와는 반대로 보호소의 경우에는 인력이 부족한 경우가 많습니다. 홍보가 제대로 이루어지지 않는 보호소의 경우 봉사 인력을 구하기가 쉽지 않은 상황입니다. 한 기자는 부산의 유기동물보호소에서 봉사 후 '돈을 받고 하는 일이 아니기 때문에 항상 인력 부족에 시달리고 있다.'고 언급했습니다[^17]. 수도권을 제외한 지역의 경우 관리 인력이 적고 인프라가 부족하여 보호센터 관리 자체가 힘든 경우도 있습니다.</br>
</br>

#### □ 동기 및 해결방안</br>
앞의 내용을 정리하면 다음과 같습니다.</br> 
</br>
> 1. 유기동물의 입양 선호가 높은 것에 비해 실제로 지자체 동물 보호센터나 민간 동물보호시설에서 입양하는 비율은 낮았으며, 이는 동물의 특징과 특성이 분양자의 선호에 반영된다는 것을 보여줍니다. 이러한 선호는 신종 펫숍의 유행으로 이어졌으며, 사람들은 유기동물로 둔갑한 동물을 값을 내고 구매하고 있습니다.</br>

> 2. 부산의 부족한 동물보호센터 인프라와 인력은 동물 관리의 어려움으로 이어지고 있고 도움의 손길을 바라지만, 봉사를 원하는 사람들은 여전히 양질의 봉사 정보를 얻지 못하고 있습니다.
</br>
앞서 정의한 두 가지 문제는 개인 차원에서 감당하기에 한계가 있습니다.</br>
</br> 

> 정보의 부족으로 인해 개인은 입양 하는 곳이 인증을 받은 보호소인지 펫숍인지 구분하기 힘들고, 또한 펫숍이라는 사실을 안다고 해도 특정 종이나 특징에 대한 선호가 남아있는 이상 보호소에 있는 성견과 같은 동물의 입양을 꺼릴 가능성이 있습니다. 그리고 봉사 집단에 가입하지 못한 개인은 전화나 웹사이트를 통해 봉사 신청을 하는 과정이 까다롭고, 봉사 집단도 보호소와의 지속적인 컨택에 어려움을 겪는 상황이 지속되고 있습니다. </br>
</br>
이러한 이유로 인해, 우리는 앞서 정의한 두 가지 문제를 앱 서비스로 해결하고자 합니다. 아직 법이 감싸지 못한 범위를 서비스에 담아 사각지대를 지키고, 개인이 해결하기 힘든 문제들을 하나의 서비스에 담아 편리함을 제공하는 계획을 수립했습니다.</br>
</br>


### 1.2. 개발 목표 및 주요 내용</br>

#### □ 개발 기간</br>

> PNU 창의융합 SW해커톤 진행 기간(5월~9월)</br>

> 대회 이후 개발을 지속하고 BM 모델을 구체화하여 창업 지원에 도전할 계획입니다.

#### □ 개발 목표</br>

우리는 적절한 봉사자를 원하는 보호소의 수요와 편리하게 봉사에 신청할 수 있는 서비스를 원하는 공급이 일치하지 않는다는 점과, 신종 펫숍이으로 인한 혼란을 문제로 설정했습니다. 그리고 5 Whys 분석법[^18]을 통해 페인포인트를 정의하고, 이를 해결하기 위한 유기동물 서비스를 기획, 개발했습니다. 그리고 아래 두 가지 대목표를 상정했습니다.</br>

<img width="700" alt="스크린샷 2024-07-08 오전 10 47 16" src="https://github.com/pnusw-hackathon/PNUSW-2024-team-08/assets/131665728/1055a1e2-c674-4b6c-b0e6-7eeef4116be2">
</br></br>

</br>
#### □ 5 whys 분석법</br>

| 🔻Problem   | 봉사자와 보호소 간 수요·공급이 불일치  | 신종 펫숍으로 인한 혼란  |
|-------------------|----------------|--------------------|
| why1  | 연결고리와 정보의 부재 | 입양자의 정보 부족 |
| why2  | 일부 동아리와 단체에게만 제공된 기회 | 상호명에 대한 법제도 x |
| why3  | 대중적이고 가시적인 봉사 신청 방법/플랫폼의 부재 | 제도적 지원과 관심이 부족 |
| Solution  | **봉사자와 보호소를 잇는 기능** | **신뢰 가능한 보호소와 연결하는 기능** |


#### □ 주요 내용</br>
- 컨셉</br>
  > 서비스명인 포포(ForPaw)는 전치사 for과 동물의 발자국을 뜻하는 paw를 합쳐 만들었으며, 우리 서비스의 목적이 온전히 동물을 위한 것이라는 포부를 담았습니다.</br>
  
  > 메인 컬러인 오렌지(#FF6636)는 활동적이고 긍정적인 이미지를 전달하며, 유기동물에 대한 관심과 사랑을 상징합니다.</br>
  
  > 동물의 발자국과 얼굴을 오마주한 아이콘과 손 글씨로 적힌 서비스명을 함께 배치하여 서비스에 대한 친근감을 향상시킵니다.</br>
</br>

- 사용자</br>
  > 서비스의 사용자는 일반 사용자, 보호소 관리자로 구분됩니다. 일반 사용자는 로그인 후 서비스가 제공하는 대부분의 기능을 이용할 수 있습니다. 보호소 관리자는 회원가입 시 분류하여 각 지역의 보호소 직영 봉사활동을 조직하고 관리하는 역할을 부여받습니다.</br>
</br>

- 주요 기능</br>
  1. 봉사활동 - 지역별 모임
    > 사용자는 지역을 기반으로 보호소가 조직한 모임과 일반 사용자가 조직한 모임에서 활동할 수 있습니다. 특히 보호소가 직영으로 운영하는 모임에서 정기적인 봉사활동을 진행할 수 있다는 것이 장점입니다.
    
  2. 봉사활동 - 모임 관리
    > 사용자는 가입승인을 받은 후 모임에 들어와서 정기모임에 참여하고 채팅을 나눌 수 있습니다. 모임 관리자는 가입승인 대기 중인 사용자를 승인하고 공지사항을 작성하며, 정기 모임을 조직하고 멤버를 탈퇴시킬 수 있습니다. 보호소 관리자는 보호소 직영으로 운영하는 모임을 생성하여 편리하게 봉사를 진행할 수 있습니다.
    
  3. 입양 - 보호동물
    > 사용자는 다양한 유기동물을 한눈에 볼 수 있습니다. 최근에 올라온 동물, 개, 고양이, 기타의 필터를 사용할 수 있으며, 사진에 있는 하트 버튼을 통해 관심동물로 지정할 수 있습니다. 또한, 다양한 상세 정보를 확인하고 각종 개인정보를 기재한 후 입양을 문의할 수 있습니다.
    
  4. 입양 - 보호소
    > 사용자는 자신의 위치정보나 검색을 통해 지역과 키워드를 설정하여 공공데이터에 등록된 전국의 보호소를 검색할 수 있습니다. 보호소 정보에서 주소와 전화번호, 동물 수를 확인하고 보호동물의 몸무게와 중성화 수술 여부 등 상세 정보를 확인할 수 있습니다.
    
  5. 커뮤니티 - 궁금해요
    > 사용자는 제목과 본문을 적고 사진을 첨부하여 궁금한 점을 자유롭게 질문할 수 있습니다. 다른 사용자의 질문을 확인하고 답변을 남길 수 있으며, 부적절한 글이나 댓글이 있을 경우 신고할 수 있습니다
    
  6. 채팅
    > 사용자는 가입한 봉사활동 모임의 멤버들과 채팅을 나눌 수 있습니다. 실시간으로 사진, 파일, 링크를 업로드할 수 있고, 공지사항을 설정할 수 있습니다.</br>
</br>



### 1.3. 세부내용</br>
#### □ 요구사항 분석</br>

<기능 요구사항></br>

(1) 동물 입양 및 임시보호
</br>

| 기능               | 설명                                                                                             |
|------------------|------------------------------------------------------------------------------------------------|
| 추천 동물 목록 보기 | 사용자의 히스토리를 바탕으로 성향에 맞는 동물을 추천하여 보여준다.                                                   |
| 동물 목록 보기       | 보호소에서 보호 중인 동물들의 목록을 볼 수 있다.                                                              |
| 동물 상세 보기       | 동물의 상세 정보를 볼 수 있다.                                                                     |
| 보호소 검색 기능     | 구글 맵을 바탕으로 지역의 보호소들을 확인할 수 있고, 보호소를 검색할 수도 있다.                                           |
| 보호소 상세 보기     | 보호소의 상세 정보와 보호 중인 동물들의 목록을 볼 수 있다.                                                     |
| 입양 신청          | 사용자는 입양하고 싶은 동물에 대해 입양 신청을 할 수 있고, 신청 시 해당 보호소와 연결된다.                                        |
| 관심동물 목록 보기   | 관심 동물로 등록한 동물들의 목록을 볼 수 있다.                                                           |
</br>
(2) 봉사활동 모임
</br></br>

| 기능                | 설명                                                                                             |
|-------------------|------------------------------------------------------------------------------------------------|
| 봉사 활동 참여        | 원하는 봉사 활동에 참여할 수 있다.                                                                  |
| 봉사 활동 목록 보기    | 참여할 수 있는 지역의 봉사 활동 목록을 볼 수 있다.                                                       |
| 추천모임 목록 보기     | 사용자의 히스토리를 바탕으로 적합한 모임을 추천하여 보여준다.                                                   |
| 지역별 모임 목록 보기  | 지역별 모임을 검색하고, 목록을 볼 수 있다.                                                            |
| 내 모임 목록 보기     | 사용자는 가입한 모임의 목록을 볼 수 있다.                                                              |
| 모임 상세 보기       | 모임 상세 정보를 볼 수 있고, 가입신청을 할 수 있다.                                                      |
| 내 모임 상세 보기     | 사용자는 가입한 모임의 상세 정보를 볼 수 있고, 공지사항을 열람하며, 정기 모임에 참가 신청을 하고, 다른 사용자와 소통할 수 있다.                   |
| 새 모임 만들기       | 사용자는 모임 이름, 활동 지역, 가입 제한 인원을 설정하여 새 모임을 만들 수 있다.                                          |
| 모임 관리하기       | 운영 중인 모임의 게시물을 등록/수정/삭제하거나, 멤버들의 가입과 탈퇴를 처리하는 등 모임을 관리할 수 있다.                              |
</br>
(3) 커뮤니티 게시판
</br></br>

| 기능             | 설명                                                                                          |
|----------------|---------------------------------------------------------------------------------------------|
| 입양 게시판       | 입양스토리 게시판을 통해 입양에 관한 게시글 목록을 볼 수 있다.                                                        |
| 임시 보호 게시판    | 임시 보호 스토리 게시판을 통해 임시 보호에 관한 게시글 목록을 볼 수 있다.                                                   |
| 질의응답 게시판    | 궁금해요 게시판을 통해 질의응답에 관한 게시글 목록을 볼 수 있다.                                                    |
| 게시글 작성       | 각 게시판에 글을 작성하고 사진을 첨부하여 게시글을 등록할 수 있다.                                                   |
| 게시글 수정 및 삭제 | 직접 작성한 게시글을 수정하거나 삭제할 수 있다.                                                            |
| 게시글 보기       | 특정 게시글의 상세 내용을 볼 수 있다.                                                                             |
| 댓글 작성 및 수정  | 게시글에 댓글을 등록하거나 수정할 수 있다.                                                                      |
</br>
(4) 채팅 (봉사모임 내의 단체 채팅)
</br></br>

| 기능             | 설명                                                                                          |
|----------------|---------------------------------------------------------------------------------------------|
| 채팅 목록 보기     | 참여 중인 채팅 목록을 볼 수 있다.                                                                            |
| 채팅            | 모임 활동을 위해 멤버들과 그룹으로 채팅을 할 수 있다.                                                                  |
| 사진 및 데이터 첨부 기능 | 채팅 시 사진이나 파일들을 첨부하여 올릴 수 있다.                                                                  |
</br>
(5) 검색
</br></br>

| 기능                 | 설명                                                                                          |
|--------------------|---------------------------------------------------------------------------------------------|
| 전체 페이지 검색 기능    | 메인 페이지에서는 검색 시, 관련된 보호소, 커뮤니티 게시글, 모임 리스트를 한 번에 확인할 수 있고, 최대 3개씩 확인할 수 있다.                          |
| 검색 결과 상세 보기     | 보호소, 커뮤니티, 모임 리스트 각 페이지에서 검색 시, 해당 페이지의 카테고리와 관련된 내용을 검색할 수 있다. (보호소 페이지에서 검색하면, 보호소에 대한 내용만 검색됨) |
</br>
(6) 알림
</br></br>

| 기능              | 설명                                                                                            |
|-----------------|-----------------------------------------------------------------------------------------------|
| 입양 알림 기능      | 입양 신청에 대한 진행 상황을 알림으로 받는다.                                                                |
| 모임 알림 기능      | 모임의 가입 신청을 하며, 가입신청 결과를 알림으로 받고, 가입한 모임이 있다면, 새 공지사항 등의 이벤트를 알림으로 받는다.                             |
| 커뮤니티 알림 기능   | 작성한 게시글에 댓글이나 대댓글이 달리면 알림으로 받는다.                                                        |
| 채팅 알림 기능      | 새로운 채팅이나 사진이 올라오면 알림으로 받는다.                                                             |
</br>
(7) 로그인 및 계정 관리
</br></br>

| 기능                  | 설명                                                                                                   |
|---------------------|------------------------------------------------------------------------------------------------------|
| 회원가입 기능           | 이름, 이메일, 프로필 사진, 닉네임, 활동 지역 등을 입력하여 회원가입을 할 수 있다.                                              |
| SNS 연동 가입/로그인    | 카카오와 구글 계정과 연동하여 가입을 진행할 수 있고, 소셜 계정을 통해 간편하게 로그인할 수 있다.                                     |
| 계정 찾기 기능          | 비밀번호를 잊은 경우, 가입한 이메일로 코드를 전송하며, 이를 통해 새로운 비밀번호를 설정할 수 있다.                                          |
| 프로필 수정 기능        | 프로필 사진, 닉네임, 활동 지역을 수정할 수 있다.                                                            |
| 비밀번호 변경 기능      | 현재 비밀번호를 검증한 후, 새 비밀번호로 변경할 수 있다.                                                       |
| 입양문의 내역          | 신청한 입양에 대한 진행 상황을 확인할 수 있다.                                                              |
</br>
(8) 관리자 페이지 기능
</br></br>

| 기능                | 설명                                                                                                   |
|-------------------|------------------------------------------------------------------------------------------------------|
| 사이트 이용 현황 관리    | 관리자는 대시보드를 통해 사이트 이용 현황과 운영에 관한 통계를 확인할 수 있다.                                                       |
| 유저 관리           | 관리자는 유저의 활동과 기록을 볼 수 있고, 커뮤니티 가이드를 위반한 사용자를 제재할 수 있다.                                                |
| 입양 관리           | 관리자는 사용자가 요청한 입양 내역을 확인하고, 보호소와 소통하여 관리할 수 있다.                                                     |
| 문의, 신고 내역 관리  | 관리자는 사용자의 문의와 신고 내역을 전달받고, 이에 대해 답변하거나 처리할 수 있다.                                                     |
</br>

<사용자 요구사항></br>

(1) 입양자 요구사항
</br></br>

| 요구사항                | 설명                                                                                                   |
|-----------------------|------------------------------------------------------------------------------------------------------|
| 신뢰할 수 있는 정보 제공     | 동물의 건강 상태, 성격 등 동물에 대한 신뢰할 수 있는 정보를 제공받아야 한다.                                                   |
| 간편한 신청 절차         | 복잡하지 않고 직관적인 입양 신청 과정을 통해, 신청을 간편하게 할 수 있어야 한다.                                                      |
| 접근 가능성            | 사용자의 현재 위치를 기반으로, 가까운 보호소를 쉽게 검색할 수 있어야 한다.                                                         |
</br>
(2) 봉사자 요구사항
</br></br>

| 요구사항                | 설명                                                                                                   |
|-----------------------|------------------------------------------------------------------------------------------------------|
| 접근 가능성            | 현재 거주하는 지역 내의 봉사 모임을 쉽게 찾을 수 있어야 하며, 참여 신청 과정이 간편해야 한다.                                                |
| 모임 정보 제공          | 봉사활동 모임에 대한 정확한 정보를 제공받아야 한다.                                                                        |
| 봉사자 보호소와의 연결     | 각종 봉사활동을 하는 경우, 보호소와의 원활한 소통이 이루어져야 한다. 보호소와의 연락 및 스케줄 조율이 쉽게 이루어져야 하므로 서비스를 지원해야 한다.                               |
</br>

#### □ 제한사항 및 대책 </br>
- 문제 1 </br>
  - 입양 요청이 들어왔을 때와 봉사활동 진행 시 보호소와의 컨택 및 스케줄링 </br>
    > 보호소에서 입양 요청을 확인하고 처리하거나, 봉사활동을 지원받고 스케줄링할 수 있도록 보호소 전용 페이지를 개발합니다. 해당 페이지를 통해 보호소는 입양 요청 및 봉사활동 관련 정보를 쉽게 관리할 수 있고, 실시간으로 봉사자와 소통할 수 있습니다. 또, 해당 페이지를 이용해 지역의 보호소들에 연락하여 포포 서비스를 소개하고 사용을 독려합니다.
- 문제 2 </br>
  - 초기 비즈니스 모델 부재로 인한 운영 문제 </br>
    > 서비스 초기에는 MAU가 적어 대용량 트래픽 처리가 필요하지 않으므로 클라우드 환경을 최소한으로 구축합니다. 이를 통해 운영 비용을 절약하면서도 사용자가 급증할 때 유연하게 대응할 수 있는 구조를 마련합니다. 이후 사용자가 증가하기 시작하면 타깃 광고, 중계 수수료와 같은 비즈니스 모델을 개발하여 수익을 창출하고, 이를 통해 운영 비용을 지속적으로 충당하는 전략을 채택합니다. </br> 
</br>


### 1.4. 기존 서비스 대비 차별성

#### □ 기능 비교표</br>
<img width="590" alt="스크린샷 2024-09-04 오후 12 42 03" src="https://github.com/user-attachments/assets/21162c4f-3c32-45bf-b48e-35946719613f">


- 경쟁사 선정</br>
  - **종합유기견보호센터**
    > 해당 서비스는 실종 동물 찾기 전국 검색망을 제공하고 안락사 방지를 위한 유기견 무료분양을 지원합니다. 또한, 지역 유기견보호센터에 기부금과 후원을 제공하고 펫도우미, 반려동물 상식 정보를 안내합니다.</br>

  - **포인핸드**
    > 해당 서비스는 전국의 보호소의 유기동물과 사람을 이어주는 플랫폼입니다. 전국 보호소 유기동물 정보 실시간 조회, 실종/보호/목격 신고 기능, 유기동물 정보 SNS 공유 등의 기능을 제공합니다.</br>
</br>

- 기능 비교</br>
  - 입양 기능</br>
    > **포포**는 공공데이터를 기반으로 정보를 불러와서, 구글맵을 통해 현재 위치 정보를 활용합니다.</br>
    
    > **종합유기견보호센터**는 개인 간 거래로 정보가 부정확한 경우가 존재합니다.</br>
    
    > **포인핸드**는 누락된 동물 정보들이 존재하고 보호소 정보가 포포에 비해 부족합니다.</br>
  - 봉사활동 기능</br>
    
    > **포포**는 구글맵을 기반으로 전국의 보호소를 연결하고 모임을 생성합니다. 또, 보호소 직영으로 운영되는 봉사 모임을 운영합니다.</br>
    
    > **종합유기견보호센터**는 수도권 외 지역의 봉사자 모집이 미미합니다. 즉, 지역의 다양성이 존재하지 않습니다.</br>
    
    > **포인핸드**는 소모임 기능을 제공하지 않고 구글 폼 기반의 제한적인 봉사 참여만 허용합니다.</br>
  - 커뮤니티 기능</br>
    
    > **포포**는 사용자 간 궁금한 점을 질의응답 형식으로 쉽게 주고받을 수 있습니다.</br>
    
    > **포인핸드**는 메뉴가 많고 UI가 직관적이지 않아 사용성이 떨어집니다.</br>


</br></br>

### 1.5. 사회적가치 도입 계획
#### □ 사업화 계획</br>
``해당 서비스가 지속 가능한 사회적 기업으로 자리 잡기 위해서는 유기동물 문제를 해결하면서 동시에 다양한 수익 모델을 가지고 있어야 합니다. 포포가 유기동물 관련 인식을 제고하고 지역의 각종 문제를 해결 하기 위해 우선으로 지역에서 해결할 수 있는 문제에 집중하여 개발을 진행합니다. </br>
</br>
이후 부산 지역 내 동물 보호소와의 연결을 통해 서비스를 소개하고 등록을 돕는다. 또한, 부산대학교 유기견 동아리를 비롯한 다양한 동물 단체와 컨택하여 실제로 서비스가 활용되도록 독려한다. </br>
그리고 봉사 활동 매칭과 올바른 유기동물의 입양, 봉사 커뮤니티 및 그룹 기능을 지원하는 포포의 존재와 함께, 유기동물에 대한 인식 개선 캠페인을 진행하며 서비스를 홍보한다. 그 후 점차 지역 사회 또는 다양한 기업의 동물 복지 정책 및 지원 사업과 연계하여 시너지 효과를 창출하여 사용층을 확대한다.</br>
</br>
이러한 사회적 기반과 서비스 안전성을 바탕으로 국가 및 지자체의 창업지원사업을 적극 활용하여 초기 운영의 안정성을 확보한다. 이후 사회적 기업으로서 존립할 수 있도록 정부의 인증을 받고, 사회적 가치에 공감하는 기업과 민간의 투자를 받아 지속해서 성장한다.</br>``
</br>

####  □ SWOT 분석[^19] </br>
<img width="600" alt="스크린샷 2024-09-03 오후 1 40 16" src="https://github.com/user-attachments/assets/d6fadf8b-a021-4389-bb83-ac9878cfccb0">

- 결론</br>
  > 다양한 채널을 활용하여 서비스 인지도를 제고하고, 표준화된 프로세스의 시스템 개발로 효율성을 높여야 합니다. </br>
  
  > 동물 복지 정책 및 지원 사업과 연계하여 시너지 효과를 창출하고, 정부 및 지자체의 정책 변화에 능동적으로 대응해야 합니다. </br>
</br>

####  □ 기대 효과</br>
포포가 지속 가능한 사회적 서비스로서 반려동물 문화의 발전을 선도하기를 기대합니다.</br>

<img width="650" alt="스크린샷 2024-09-04 오후 12 37 53" src="https://github.com/user-attachments/assets/e0309d73-e7dd-41ff-b88f-e6d76a7c5686">


## 2. 상세설계

### 2.1. 시스템 구성도

#### □ Architecture</br>
<img width="900" alt="스크린샷 2024-08-29 오전 10 25 14" src="https://github.com/user-attachments/assets/4f48160c-4d07-4656-9b76-655be38ce82e">
</br></br>

#### □ Web Security</br>
<img width="1399" alt="스크린샷 2024-09-04 오후 3 33 30" src="https://github.com/user-attachments/assets/35c8f73b-762f-4c2a-b1c9-f3138f1edb6a">
</br></br>

  > 사용자는 access token을 메모리에, refresh token을 httpOnly 쿠키에 저장해 요청을 보냅니다. access token을 메모리에 저장하면 **XSS** 공격으로부터 보호할 수 있으며, refresh token을 httpOnly 쿠키에 저장하면 JavaScript로 접근할 수 없어 **XSS**와 **CSRF** 공격에 대해 추가적인 보호가 가능합니다. 또 스프링 시큐리티에서 설정한 CORS 정책을 통해 인증되지 않은 사이트가 요청을 보내거나 응답을 읽는 것을 차단하여 보안을 강화하였습니다.

</br>

  > 서버 측에서는 사용자로부터 받은 요청을 처리할 때, **JWT**의 유효성을 검증한 후 이를 프록시 서버(Nginx)를 통해 내부 애플리케이션 서버로 전달합니다. 모든 요청은 **HTTPS**로 암호화되어 443번 포트로 통신이 **단일화**되며, Nginx를 거쳐야 하기 때문에 외부로부터 서버를 보호하는 방어막 역할을 합니다. 내부적으로는 Spring Boot와 FastAPI 같은 백엔드 서버가 HTTP로 통신하지만, 이는 EC2 내부에서만 이루어지기 때문에 외부 공격으로부터 안전하게 구성되어 있습니다.

</br>

#### □ ERD</br>
![FORPAW](https://github.com/user-attachments/assets/d8f44173-52b8-49c6-961a-af7550bcc6bc)
</br></br>

### 2.1. 사용 기술
- MySQL 8.0.33 </br>
- Java Oracle Open JDK 17.0.9 </br>
- JWT: 4.3.0 </br>
- QueryDSL: 5.0.0 </br>
- MongoDB: 2.2.0 </br>
- RabbitMQ: 3.13.0 </br>
- FastAPI: 0.110.3 </br>
- Spring Boot: 3.2.0 </br>
- Milvus: 2.4.1 </br>
- NextJS: 12 </br>
- Junit5: 5.10.2 </br>
- Nginx:: 1.26 </br>
- Tailwind CSS v3.4.3 </br>
- Jenkins: 2.452.2 </br>
- Gradle: 8.5 </br>



</br>

## 3. 개발결과
### 3.1. 전체시스템 흐름도</br>

#### □ IA (information architecture)</br>
![Frame 96](https://github.com/user-attachments/assets/34372998-cf81-45b2-a8ef-347d4d701726)
</br>

#### □ Flow Chat</br>

  - 로그인</br>

<img width="2000" alt="로그인" src="https://github.com/user-attachments/assets/c40b6fb7-d06d-41d2-bd5c-4171f3594158"></br>
</br>

  - 동물 데이터 패치</br>
<img width="1500" alt="동물 데이터 패치" src="https://github.com/user-attachments/assets/1b5a54ac-a690-4e9b-82c2-4ec124565c1e"></br>
</br>

  - 봉사 모임 가입</br>
<img width="1500" alt="봉사 모임 가입" src="https://github.com/user-attachments/assets/6b13ee19-76b0-4ae7-a6af-f987bcee1a41"></br>
</br>

  - 봉사 활동 참여</br>
<img width="1500" alt="봉사활동 참여" src="https://github.com/user-attachments/assets/0ca7eae9-c006-40e0-9aab-0ce0452a391e"></br>

  - 입양 지원</br>
<img width="1500" alt="입양 지원하기" src="https://github.com/user-attachments/assets/7fcc3297-612d-4736-ba6e-83221becfaca"></br>
</br>

  - 게시글</br>
<img width="1500" alt="게시글" src="https://github.com/user-attachments/assets/31ca4b87-355d-41b0-a7bd-5c11067180ec"></br>
</br>

  - 댓글</br>
<img width="1500" alt="댓글" src="https://github.com/user-attachments/assets/434c7285-5c18-4c49-94cf-a3ad0644bf28"></br>
</br>

  - 신고하기</br>
<img width="1500" alt="신고하기" src="https://github.com/user-attachments/assets/2ab46559-02c4-4a39-a3f3-cd5623ddf4df"></br>
</br>

  - 유저 페이지</br>
<img width="1500" src="https://github.com/user-attachments/assets/44de5b38-1da9-4f16-a437-827a084441cb"></br>
</br>

  - 그룹 관리하기</br>
<img width="1500" alt="그룹 관리하기" src="https://github.com/user-attachments/assets/6649bcc0-ae40-4d1f-aae4-48b96dd85ad0"></br>
</br>


  - 관리자</br>
<img width="1500" alt="그룹 관리하기" src="https://github.com/user-attachments/assets/29ef3073-5466-4c37-891b-a3d4edc22859"></br>
</br>

  - 채팅</br>
<img width="1500" alt="그룹 관리하기" src="https://github.com/user-attachments/assets/88b8f9b4-eeff-46f6-9f6c-86ff3d3bfdef"></br>
</br>


### 3.2. 기능설명</br>

| 분류                | 기능1                                      | 기능2                        |
|-----------------------|----------------------------------------|--------------------------------------------------------------|
| 봉사활동     |  ![Frame 91](https://github.com/user-attachments/assets/5b2e0634-f7c2-4f04-bb94-503fbcf3185a)| ![Frame 95](https://github.com/user-attachments/assets/3c561970-69d5-42f1-9cf7-27fe1ee57115)|
| 입양        |  ![Frame 92](https://github.com/user-attachments/assets/253ee0bb-2434-4648-be1e-90d5b3d74127)| ![Frame 93](https://github.com/user-attachments/assets/58b4870f-14c8-4d76-a1f2-29451d657d3b) |
| 커뮤니티      |  ![Frame 94](https://github.com/user-attachments/assets/3bb40fd9-0739-448c-b51a-f27656a530b6)|     |
</br>


### 3.3. 기능명세서
> 포포에는 현재 **114**개의 API가 개발되어 있으며, 자세한 내용은 분량상 네이버 블로그에 정리해 두었습니다. </br>
> **API Part 1** => https://blog.naver.com/hoyai-/223564816915 </br>
> **API Part 2** => https://blog.naver.com/hoyai-/223519299515 </br>
</br>


### 3.4. 디렉토리 구조
#### □ FE 디렉토리</br>
<pre>
ForPaw_FE
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── admin
│   │   ├── adopt_request
│   │   │   └── index.js
│   │   ├── dashboard
│   │   │   └── index.js
│   │   ├── inquiries
│   │   │   └── index.js
│   │   ├── member_management
│   │   │   └── index.js
│   │   └── reports
│   │       └── index.js
│   ├── adopt
│   │   ├── [id]
│   │   │   ├── index.js
│   │   │   └── inquire
│   │   │       └── index.js
│   │   ├── favorites
│   │   │   └── index.js
│   │   ├── pets
│   │   │   └── index.js
│   │   └── shelters
│   │       ├── [id]
│   │       │   ├── index.js
│   │       │   └── rescues
│   │       │       └── index.js
│   │       └── index.js
│   ├── chatting
│   │   ├── [id]
│   │   │   ├── albums
│   │   │   │   └── index.js
│   │   │   ├── files
│   │   │   │   └── index.js
│   │   │   ├── index.js
│   │   │   ├── links
│   │   │   │   └── index.js
│   │   │   └── notice
│   │   │       └── index.js
│   │   └── index.js
│   ├── community
│   │   ├── [id]
│   │   │   ├── edit
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   ├── adoption
│   │   │   └── index.js
│   │   ├── fostering
│   │   │   └── index.js
│   │   ├── myanswer
│   │   │   └── index.js
│   │   ├── mycomment
│   │   │   └── index.js
│   │   ├── mypost
│   │   │   └── index.js
│   │   ├── myquestion
│   │   │   └── index.js
│   │   ├── question
│   │   │   ├── [id]
│   │   │   │   ├── answer
│   │   │   │   │   ├── edit
│   │   │   │   │   │   └── index.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── edit
│   │   │   │   │   └── index.js
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   └── write
│   │       └── index.js
│   ├── home
│   │   ├── cats
│   │   │   └── index.js
│   │   ├── dogs
│   │   │   └── index.js
│   │   ├── faq
│   │   │   └── index.js
│   │   └── index.js
│   ├── index.js
│   ├── info
│   │   ├── alarm
│   │   │   └── index.js
│   │   ├── profile
│   │   │   ├── delete
│   │   │   │   └── index.js
│   │   │   ├── edit
│   │   │   │   └── index.js
│   │   │   ├── index.js
│   │   │   ├── inquiry
│   │   │   │   ├── index.js
│   │   │   │   ├── my-inquiries
│   │   │   │   │   └── index.js
│   │   │   │   └── write
│   │   │   │       └── index.js
│   │   │   ├── license
│   │   │   │   └── index.js
│   │   │   ├── policy
│   │   │   │   └── index.js
│   │   │   └── pw
│   │   │       └── index.js
│   │   └── search
│   │       └── index.js
│   ├── intro
│   │   └── index.js
│   ├── landing
│   │   └── index.js
│   ├── loading
│   │   └── index.js
│   ├── login
│   │   ├── find_account
│   │   │   ├── 01
│   │   │   │   └── index.js
│   │   │   └── 02
│   │   │       └── index.js
│   │   ├── index.js
│   │   └── signup
│   │       ├── 01
│   │       │   └── index.js
│   │       ├── 02
│   │       │   └── index.js
│   │       ├── 03
│   │       │   └── index.js
│   │       ├── 04
│   │       │   └── index.js
│   │       ├── agreements
│   │       │   └── index.js
│   │       ├── complete
│   │       │   └── index.js
│   │       └── sns
│   │           ├── 01
│   │           │   └── index.js
│   │           ├── 02
│   │           │   └── index.js
│   │           ├── agreements
│   │           │   └── index.js
│   │           └── complete
│   │               └── index.js
│   └── volunteer
│       ├── [id]
│       │   ├── approve
│       │   │   └── index.js
│       │   ├── edit
│       │   │   └── index.js
│       │   ├── index.js
│       │   ├── member
│       │   │   └── index.js
│       │   ├── notices
│       │   │   ├── [noticeID]
│       │   │   │   ├── editNotice
│       │   │   │   │   └── index.js
│       │   │   │   └── index.js
│       │   │   ├── addNotice
│       │   │   │   └── index.js
│       │   │   └── index.js
│       │   └── regular_meetings
│       │       ├── [meetingID]
│       │       │   ├── editMeeting
│       │       │   │   └── index.js
│       │       │   └── index.js
│       │       ├── addMeeting
│       │       │   └── index.js
│       │       └── index.js
│       ├── create_volunteer
│       │   └── index.js
│       ├── joined
│       │   └── index.js
│       ├── recommend
│       │   └── index.js
│       └── region
│           └── index.js
├── src
│   ├── components
│   │   ├── commons
│   │   │   ├── alarmModal
│   │   │   │   ├── AlarmModal.presenter.js
│   │   │   │   └── AlarmModal.styles.js
│   │   │   ├── api
│   │   │   │   ├── refreshAccessToken.js
│   │   │   │   └── toggleLike.js
│   │   │   ├── comment
│   │   │   │   ├── Comment.container.js
│   │   │   │   ├── Comment.presenter.js
│   │   │   │   ├── Comment.queries.js
│   │   │   │   ├── Comment.styles.js
│   │   │   │   ├── hooks
│   │   │   │   │   ├── useClickeMenu.js
│   │   │   │   │   └── useComment.js
│   │   │   │   └── input
│   │   │   │       ├── Input.container.js
│   │   │   │       ├── Input.presenter.js
│   │   │   │       ├── Input.queries.js
│   │   │   │       ├── Input.styles.js
│   │   │   │       └── hooks
│   │   │   │           └── useSubmitComment.js
│   │   │   ├── confirmModal
│   │   │   │   ├── ConfirmModal.presenter.js
│   │   │   │   └── ConfirmModal.styles.js
│   │   │   ├── district
│   │   │   │   └── districtName.js
│   │   │   ├── documents
│   │   │   │   ├── privacy.json
│   │   │   │   └── terms.json
│   │   │   ├── headers
│   │   │   │   ├── Headers.container.js
│   │   │   │   ├── Headers.presenter.js
│   │   │   │   ├── Headers.styles.js
│   │   │   │   ├── HomeHeader.container.js
│   │   │   │   ├── HomeHeader.presenter.js
│   │   │   │   └── HomeHeader.styles.js
│   │   │   ├── hooks
│   │   │   │   ├── useAuthCheck.js
│   │   │   │   ├── useCreateLatLng.js
│   │   │   │   ├── useDragAndClick.js
│   │   │   │   ├── useImageCompressor.js
│   │   │   │   ├── useImageCropper.js
│   │   │   │   ├── useItemGrouping.js
│   │   │   │   ├── useLikeToggle.js
│   │   │   │   ├── useLoginStatusCheck.js
│   │   │   │   ├── useMenuToggle.js
│   │   │   │   ├── useNavigate.js
│   │   │   │   ├── usePaginationScroll.js
│   │   │   │   ├── usePhotoManager.js
│   │   │   │   ├── usePhotoModal.js
│   │   │   │   ├── useProfilePhotoManager.js
│   │   │   │   ├── useRegionSelection.js
│   │   │   │   ├── useRequireLogin.js
│   │   │   │   ├── useRoleContext.js
│   │   │   │   ├── useS3Upload.js
│   │   │   │   ├── useScrollToTop.js
│   │   │   │   ├── useSortSelection.js
│   │   │   │   ├── useSubIcons.js
│   │   │   │   ├── useSupportSortSelection.js
│   │   │   │   ├── useTimer.js
│   │   │   │   └── useTruncateString.js
│   │   │   ├── icons
│   │   │   │   └── fontawesome.js
│   │   │   ├── modal
│   │   │   │   ├── ModalComponent.js
│   │   │   │   └── ModalComponent.styles.js
│   │   │   ├── navigation
│   │   │   │   ├── Navigation.container.js
│   │   │   │   ├── Navigation.present.js
│   │   │   │   └── Navigation.styles.js
│   │   │   ├── reportModal
│   │   │   │   ├── ReportModal.container.js
│   │   │   │   ├── ReportModal.presenter.js
│   │   │   │   ├── ReportModal.queries.js
│   │   │   │   ├── ReportModal.styles.js
│   │   │   │   └── hooks
│   │   │   │       └── useRequestSubmit.js
│   │   │   ├── resultModal
│   │   │   │   ├── ResultModal.presenter.js
│   │   │   │   └── ResultModal.styles.js
│   │   │   └── utils
│   │   │       ├── LinkifyText.js
│   │   │       ├── auth.js
│   │   │       └── aws-utils.js
│   │   └── units
│   │       ├── admin
│   │       │   ├── adminHandler
│   │       │   │   ├── AdminHandler.container.js
│   │       │   │   ├── AdminHandler.presenter.js
│   │       │   │   └── AdminHandler.styles.js
│   │       │   ├── adminHeader
│   │       │   │   ├── AdminHeader.presenter.js
│   │       │   │   └── AdminHeader.styles.js
│   │       │   ├── adopt_request
│   │       │   │   ├── Adopt_Request.container.js
│   │       │   │   ├── Adopt_Request.presenter.js
│   │       │   │   ├── Adopt_Request.queries.js
│   │       │   │   ├── Adopt_Request.styles.js
│   │       │   │   └── hooks
│   │       │   │       └── useFetchAdoptRequest.js
│   │       │   ├── dashboard
│   │       │   │   ├── Dashboard.container.js
│   │       │   │   ├── Dashboard.presenter.js
│   │       │   │   ├── Dashboard.queries.js
│   │       │   │   └── Dashboard.styles.js
│   │       │   ├── inquiries
│   │       │   │   ├── Inquiries.container.js
│   │       │   │   ├── Inquiries.presenter.js
│   │       │   │   ├── Inquiries.queries.js
│   │       │   │   ├── Inquiries.styles.js
│   │       │   │   └── hooks
│   │       │   │       └── useFetchInquiries.js
│   │       │   ├── member_management
│   │       │   │   ├── Member_Management.container.js
│   │       │   │   ├── Member_Management.presenter.js
│   │       │   │   ├── Member_Management.queries.js
│   │       │   │   ├── Member_Management.styles.js
│   │       │   │   └── hooks
│   │       │   │       └── useFetchMemberManagement.js
│   │       │   └── reports
│   │       │       ├── Reports.container.js
│   │       │       ├── Reports.presenter.js
│   │       │       ├── Reports.queries.js
│   │       │       ├── Reports.styles.js
│   │       │       └── hooks
│   │       │           └── useFetchReports.js
│   │       ├── adopt
│   │       │   ├── AdoptHandler.container.js
│   │       │   ├── AdoptHandler.presenter.js
│   │       │   ├── AdoptHandler.styles.js
│   │       │   ├── [id]
│   │       │   │   ├── AdoptPetDetail.container.js
│   │       │   │   ├── AdoptPetDetail.presenter.js
│   │       │   │   ├── AdoptPetDetail.queries.js
│   │       │   │   ├── AdoptPetDetail.styles.js
│   │       │   │   ├── hooks
│   │       │   │   │   └── useFetchPetDetail.js
│   │       │   │   └── inquire
│   │       │   │       ├── Inquire.container.js
│   │       │   │       ├── Inquire.presenter.js
│   │       │   │       ├── Inquire.queries.js
│   │       │   │       ├── Inquire.styles.js
│   │       │   │       └── hooks
│   │       │   │           ├── useAddressSearch.js
│   │       │   │           └── useNamePhoneInput.js
│   │       │   ├── favorites
│   │       │   │   ├── AdoptFavorites.container.js
│   │       │   │   ├── AdoptFavorites.presenter.js
│   │       │   │   ├── AdoptFavorites.queries.js
│   │       │   │   ├── AdoptFavorites.styles.js
│   │       │   │   └── hooks
│   │       │   │       └── useFetchFavPetsData.js
│   │       │   ├── pets
│   │       │   │   ├── AdoptPets.container.js
│   │       │   │   ├── AdoptPets.presenter.js
│   │       │   │   ├── AdoptPets.queries.js
│   │       │   │   ├── AdoptPets.styles.js
│   │       │   │   └── hooks
│   │       │   │       └── useFetchPetsData.js
│   │       │   └── shelters
│   │       │       ├── AdoptShelterHandler.container.js
│   │       │       ├── AdoptShelterHandler.presenter.js
│   │       │       ├── AdoptShelterHandler.styles.js
│   │       │       ├── AdoptShelters.container.js
│   │       │       ├── AdoptShelters.presenter.js
│   │       │       ├── AdoptShelters.queries.js
│   │       │       ├── AdoptShelters.styles.js
│   │       │       ├── [id]
│   │       │       │   ├── AdoptShelterDetail.container.js
│   │       │       │   ├── AdoptShelterDetail.presenter.js
│   │       │       │   ├── AdoptShelterDetail.queries.js
│   │       │       │   ├── AdoptShelterDetail.styles.js
│   │       │       │   ├── hooks
│   │       │       │   │   ├── useFetchShelterDetailData.js
│   │       │       │   │   ├── useGoogleMaps.js
│   │       │       │   │   └── useGoogleMapsScript.js
│   │       │       │   └── rescues
│   │       │       │       ├── AdoptShelterRescues.container.js
│   │       │       │       ├── AdoptShelterRescues.presenter.js
│   │       │       │       ├── AdoptShelterRescues.queries.js
│   │       │       │       ├── AdoptShelterRescues.styles.js
│   │       │       │       └── hooks
│   │       │       │           └── useFetchShelterRescuesData.js
│   │       │       └── hooks
│   │       │           ├── useCurrentLocation.js
│   │       │           ├── useDragHandler.js
│   │       │           ├── useFetchSheltersData.js
│   │       │           ├── useGoogleMaps.js
│   │       │           ├── useGoogleMapsScript.js
│   │       │           ├── useSearchShelters.js
│   │       │           ├── useSortedShelters.js
│   │       │           └── useUpdateMarkers.js
│   │       ├── chatting
│   │       │   ├── Chatting.container.js
│   │       │   ├── Chatting.presenter.js
│   │       │   ├── Chatting.queries.js
│   │       │   ├── Chatting.styles.js
│   │       │   ├── [id]
│   │       │   │   ├── ChattingDetail.container.js
│   │       │   │   ├── ChattingDetail.presenter.js
│   │       │   │   ├── ChattingDetail.queries.js
│   │       │   │   ├── ChattingDetail.styles.js
│   │       │   │   ├── ChattingDetailHandler.container.js
│   │       │   │   ├── ChattingDetailHandler.presenter.js
│   │       │   │   ├── ChattingDetailHandler.queries.js
│   │       │   │   ├── ChattingDetailHandler.styles.js
│   │       │   │   ├── albums
│   │       │   │   │   ├── Albums.container.js
│   │       │   │   │   ├── Albums.presenter.js
│   │       │   │   │   ├── Albums.queries.js
│   │       │   │   │   ├── Albums.styles.js
│   │       │   │   │   └── hooks
│   │       │   │   │       └── useFetchChatImagesData.js
│   │       │   │   ├── files
│   │       │   │   │   ├── Files.container.js
│   │       │   │   │   ├── Files.presenter.js
│   │       │   │   │   ├── Files.queries.js
│   │       │   │   │   ├── Files.styles.js
│   │       │   │   │   └── hooks
│   │       │   │   │       └── useFetchChatFilesData.js
│   │       │   │   ├── hooks
│   │       │   │   │   ├── useChatInput.js
│   │       │   │   │   ├── useChattingScroll.js
│   │       │   │   │   ├── useDataManager.js
│   │       │   │   │   ├── useDetailToggle.js
│   │       │   │   │   ├── useFetchChatMsgList.js
│   │       │   │   │   ├── useSearchSideMenu.js
│   │       │   │   │   └── useStompClient.js
│   │       │   │   ├── input
│   │       │   │   │   ├── ChattingInput.presenter.js
│   │       │   │   │   └── ChattingInput.styles.js
│   │       │   │   ├── links
│   │       │   │   │   ├── Links.container.js
│   │       │   │   │   ├── Links.presenter.js
│   │       │   │   │   ├── Links.queries.js
│   │       │   │   │   ├── Links.styles.js
│   │       │   │   │   └── hooks
│   │       │   │   │       └── useFetchChatLinksData.js
│   │       │   │   ├── notice
│   │       │   │   │   ├── ChattingNotice.container.js
│   │       │   │   │   ├── ChattingNotice.presenter.js
│   │       │   │   │   ├── ChattingNotice.queries.js
│   │       │   │   │   └── ChattingNotice.styles.js
│   │       │   │   └── sidemenu
│   │       │   │       ├── ChattingSideMenu.presenter.js
│   │       │   │       └── ChattingSideMenu.styles.js
│   │       │   └── hooks
│   │       ├── community
│   │       │   ├── CommunityHandler.container.js
│   │       │   ├── CommunityHandler.presenter.js
│   │       │   ├── CommunityHandler.styles.js
│   │       │   ├── [id]
│   │       │   │   ├── CommunityDetail.container.js
│   │       │   │   ├── CommunityDetail.presenter.js
│   │       │   │   ├── CommunityDetail.queries.js
│   │       │   │   ├── CommunityDetail.styles.js
│   │       │   │   ├── edit
│   │       │   │   │   ├── CommunityEdit.container.js
│   │       │   │   │   ├── CommunityEdit.presenter.js
│   │       │   │   │   ├── CommunityEdit.queries.js
│   │       │   │   │   ├── CommunityEdit.styles.js
│   │       │   │   │   └── hooks
│   │       │   │   │       └── useSubmitCommunityEdit.js
│   │       │   │   └── hooks
│   │       │   │       ├── useCommunityDelete.js
│   │       │   │       └── useCommunityLike.js
│   │       │   ├── adoption
│   │       │   │   ├── CommunityAdoption.container.js
│   │       │   │   ├── CommunityAdoption.presenter.js
│   │       │   │   ├── CommunityAdoption.queries.js
│   │       │   │   ├── CommunityAdoption.styles.js
│   │       │   │   └── hooks
│   │       │   │       └── useFetchAdoptionList.js
│   │       │   ├── floating_icon
│   │       │   │   ├── FloatingIcon.presenter.js
│   │       │   │   └── FloatingIcon.styles.js
│   │       │   ├── fostering
│   │       │   │   ├── CommunityFostering.container.js
│   │       │   │   ├── CommunityFostering.presenter.js
│   │       │   │   ├── CommunityFostering.queries.js
│   │       │   │   ├── CommunityFostering.styles.js
│   │       │   │   └── hooks
│   │       │   │       └── useFetchFosteringList.js
│   │       │   ├── mycontent
│   │       │   │   ├── MyCommunityHandler.container.js
│   │       │   │   ├── MyCommunityHandler.presenter.js
│   │       │   │   ├── MyCommunityHandler.queries.js
│   │       │   │   ├── MyCommunityHandler.styles.js
│   │       │   │   ├── myanswer
│   │       │   │   │   ├── MyAnswer.container.js
│   │       │   │   │   ├── MyAnswer.presenter.js
│   │       │   │   │   ├── MyAnswer.queries.js
│   │       │   │   │   ├── MyAnswer.styles.js
│   │       │   │   │   └── hooks
│   │       │   │   │       └── useFetchMyAnswer.js
│   │       │   │   ├── mycomment
│   │       │   │   │   ├── MyComment.container.js
│   │       │   │   │   ├── MyComment.presenter.js
│   │       │   │   │   ├── MyComment.queries.js
│   │       │   │   │   ├── MyComment.styles.js
│   │       │   │   │   └── hooks
│   │       │   │   │       └── useFetchMyComment.js
│   │       │   │   ├── mypost
│   │       │   │   │   ├── MyPost.container.js
│   │       │   │   │   ├── MyPost.presenter.js
│   │       │   │   │   ├── MyPost.queries.js
│   │       │   │   │   ├── MyPost.styles.js
│   │       │   │   │   └── hooks
│   │       │   │   │       └── useFetchMyPost.js
│   │       │   │   └── myquestion
│   │       │   │       ├── MyQuestion.container.js
│   │       │   │       ├── MyQuestion.presenter.js
│   │       │   │       ├── MyQuestion.queries.js
│   │       │   │       ├── MyQuestion.styles.js
│   │       │   │       └── hooks
│   │       │   │           └── useFetchMyQuestion.js
│   │       │   ├── question
│   │       │   │   ├── CommunityQuestion.container.js
│   │       │   │   ├── CommunityQuestion.presenter.js
│   │       │   │   ├── CommunityQuestion.queries.js
│   │       │   │   ├── CommunityQuestion.styles.js
│   │       │   │   ├── [id]
│   │       │   │   │   ├── QuestionDetail.container.js
│   │       │   │   │   ├── QuestionDetail.presenter.js
│   │       │   │   │   ├── QuestionDetail.queries.js
│   │       │   │   │   ├── QuestionDetail.styles.js
│   │       │   │   │   ├── answer
│   │       │   │   │   │   ├── QuestionAnswer.container.js
│   │       │   │   │   │   ├── QuestionAnswer.presenter.js
│   │       │   │   │   │   ├── QuestionAnswer.queries.js
│   │       │   │   │   │   ├── QuestionAnswer.styles.js
│   │       │   │   │   │   ├── edit
│   │       │   │   │   │   │   ├── AnswerEdit.container.js
│   │       │   │   │   │   │   ├── AnswerEdit.presenter.js
│   │       │   │   │   │   │   ├── AnswerEdit.queries.js
│   │       │   │   │   │   │   ├── AnswerEdit.styles.js
│   │       │   │   │   │   │   └── hooks
│   │       │   │   │   │   │       └── useSubmitAnswerEdit.js
│   │       │   │   │   │   └── hooks
│   │       │   │   │   │       └── useSubmitAsnwerPost.js
│   │       │   │   │   ├── edit
│   │       │   │   │   │   ├── QuestionEdit.container.js
│   │       │   │   │   │   ├── QuestionEdit.presenter.js
│   │       │   │   │   │   ├── QuestionEdit.queries.js
│   │       │   │   │   │   ├── QuestionEdit.styles.js
│   │       │   │   │   │   └── hooks
│   │       │   │   │   │       └── useSubmitQuestionEdit.js
│   │       │   │   │   └── hooks
│   │       │   │   │       └── useQNADelete.js
│   │       │   │   └── hooks
│   │       │   │       └── useFetchQuestionList.js
│   │       │   ├── reportModal
│   │       │   │   ├── ReportModal.presenter.js
│   │       │   │   ├── ReportModal.queries.js
│   │       │   │   ├── ReportModal.styles.js
│   │       │   │   └── hooks
│   │       │   │       └── useRequestReport.js
│   │       │   └── write
│   │       │       ├── CommunityWrite.container.js
│   │       │       ├── CommunityWrite.presenter.js
│   │       │       ├── CommunityWrite.queries.js
│   │       │       ├── CommunityWrite.styles.js
│   │       │       └── hooks
│   │       │           ├── useCategorySelection.js
│   │       │           └── useSubmitPost.js
│   │       ├── find_account
│   │       │   ├── find_account01
│   │       │   │   ├── FindAccount01.container.js
│   │       │   │   ├── FindAccount01.presenter.js
│   │       │   │   ├── FindAccount01.queries.js
│   │       │   │   ├── FindAccount01.styles.js
│   │       │   │   └── hooks
│   │       │   │       ├── useEmailCheck.js
│   │       │   │       └── useEmailDropdown.js
│   │       │   └── find_account02
│   │       │       ├── FIndAccount02.presenter.js
│   │       │       ├── FindAccount02.container.js
│   │       │       ├── FindAccount02.queries.js
│   │       │       ├── FindAccount02.styles.js
│   │       │       └── hooks
│   │       │           ├── useGetUserInfo.js
│   │       │           └── usePasswordCheck.js
│   │       ├── home
│   │       │   ├── Home.container.js
│   │       │   ├── Home.presenter.js
│   │       │   ├── Home.queries.js
│   │       │   ├── Home.styles.js
│   │       │   ├── cats
│   │       │   │   ├── Cats.container.js
│   │       │   │   ├── Cats.presenter.js
│   │       │   │   └── Cats.styles.js
│   │       │   ├── dogs
│   │       │   │   ├── Dogs.container.js
│   │       │   │   ├── Dogs.presenter.js
│   │       │   │   └── Dogs.styles.js
│   │       │   └── faq
│   │       │       ├── Faq.container.js
│   │       │       ├── Faq.presenter.js
│   │       │       └── Faq.styles.js
│   │       ├── info
│   │       │   ├── alarm
│   │       │   │   ├── Alarm.container.js
│   │       │   │   ├── Alarm.presenter.js
│   │       │   │   └── Alarm.styles.js
│   │       │   ├── profile
│   │       │   │   ├── Profile.container.js
│   │       │   │   ├── Profile.presenter.js
│   │       │   │   ├── Profile.queries.js
│   │       │   │   ├── Profile.styles.js
│   │       │   │   ├── delete
│   │       │   │   │   ├── AccountDelete.container.js
│   │       │   │   │   ├── AccountDelete.presenter.js
│   │       │   │   │   ├── AccountDelete.queries.js
│   │       │   │   │   ├── AccountDelete.styles.js
│   │       │   │   │   └── hooks
│   │       │   │   │       ├── useCheckBox.js
│   │       │   │   │       ├── useCurrentPasswordCheck.js
│   │       │   │   │       ├── useEmailCheck.js
│   │       │   │   │       └── useSignout.js
│   │       │   │   ├── edit
│   │       │   │   │   ├── ProfileEdit.container.js
│   │       │   │   │   ├── ProfileEdit.presenter.js
│   │       │   │   │   ├── ProfileEdit.queries.js
│   │       │   │   │   ├── ProfileEdit.styles.js
│   │       │   │   │   └── hooks
│   │       │   │   │       ├── useNickNameCheck.js
│   │       │   │   │       └── useUserInfoUpdate.js
│   │       │   │   ├── hooks
│   │       │   │   │   └── useLogout.js
│   │       │   │   ├── inquiry
│   │       │   │   │   ├── Inquiry.container.js
│   │       │   │   │   ├── Inquiry.presenter.js
│   │       │   │   │   ├── Inquiry.queries.js
│   │       │   │   │   ├── Inquiry.styles.js
│   │       │   │   │   ├── hooks
│   │       │   │   │   ├── my-inquiries
│   │       │   │   │   │   ├── MyInquiries.container.js
│   │       │   │   │   │   ├── MyInquiries.presenter.js
│   │       │   │   │   │   ├── MyInquiries.queries.js
│   │       │   │   │   │   └── MyInquiries.styles.js
│   │       │   │   │   └── write
│   │       │   │   │       ├── InquiryWrite.container.js
│   │       │   │   │       ├── InquiryWrite.presenter.js
│   │       │   │   │       ├── InquiryWrite.queries.js
│   │       │   │   │       ├── InquiryWrite.styles.js
│   │       │   │   │       └── hooks
│   │       │   │   │           └── useSubmitPost.js
│   │       │   │   ├── license
│   │       │   │   │   ├── License.container.js
│   │       │   │   │   ├── License.presenter.js
│   │       │   │   │   └── License.styles.js
│   │       │   │   ├── policy
│   │       │   │   │   ├── Policy.container.js
│   │       │   │   │   ├── Policy.presenter.js
│   │       │   │   │   └── Policy.styles.js
│   │       │   │   └── pw
│   │       │   │       ├── PasswordEdit.container.js
│   │       │   │       ├── PasswordEdit.presenter.js
│   │       │   │       ├── PasswordEdit.queries.js
│   │       │   │       ├── PasswordEdit.styles.js
│   │       │   │       └── hooks
│   │       │   │           ├── useCurrentPasswordCheck.js
│   │       │   │           ├── useNewPasswordCheck.js
│   │       │   │           └── useUpdateNewPassword.js
│   │       │   └── search
│   │       │       ├── Search.container.js
│   │       │       ├── Search.presenter.js
│   │       │       ├── Search.quries.js
│   │       │       ├── Search.styles.js
│   │       │       └── hooks
│   │       │           └── useFetchSearch.js
│   │       ├── intro
│   │       │   ├── Intro.Container.js
│   │       │   ├── Intro.presenter.js
│   │       │   └── Intro.styles.js
│   │       ├── landing
│   │       │   ├── Landing.container.js
│   │       │   ├── Landing.presenter.js
│   │       │   ├── Landing.styles.js
│   │       │   ├── meeting
│   │       │   │   ├── LandingMeeting.presenter.js
│   │       │   │   └── LandingMeeting.styles.js
│   │       │   └── question
│   │       │       ├── LandingQuestion.presenter.js
│   │       │       └── LandingQuestion.styles.js
│   │       ├── loading
│   │       │   ├── Loading.container.js
│   │       │   ├── Loading.presenter.js
│   │       │   └── Loading.styles.js
│   │       ├── login
│   │       │   ├── Login.container.js
│   │       │   ├── Login.presenter.js
│   │       │   ├── Login.queries.js
│   │       │   ├── Login.styles.js
│   │       │   └── hooks
│   │       │       ├── useEmailPasswordCheck.js
│   │       │       ├── useKakaoGoogleLogin.js
│   │       │       └── useLoginCheck.js
│   │       ├── signup
│   │       │   ├── SignupHeader
│   │       │   │   ├── SignupHeader.container.js
│   │       │   │   ├── SignupHeader.presenter.js
│   │       │   │   └── SignupHeader.styles.js
│   │       │   ├── agreements
│   │       │   │   ├── Agreements.container.js
│   │       │   │   ├── Agreements.presenter.js
│   │       │   │   ├── Agreements.styles.js
│   │       │   │   ├── hooks
│   │       │   │   │   ├── useAgreementState.js
│   │       │   │   │   └── usePolicyModal.js
│   │       │   │   └── policy
│   │       │   │       ├── Policy.presenter.js
│   │       │   │       └── Policy.styles.js
│   │       │   ├── complete
│   │       │   │   ├── SignupComplete.container.js
│   │       │   │   ├── SignupComplete.presenter.js
│   │       │   │   ├── SignupComplete.styles.js
│   │       │   │   └── hooks
│   │       │   │       └── useLoginCheck.js
│   │       │   ├── component
│   │       │   │   └── Progress.js
│   │       │   ├── signup01
│   │       │   │   ├── Signup01.container.js
│   │       │   │   ├── Signup01.presenter.js
│   │       │   │   ├── Signup01.styles.js
│   │       │   │   └── hooks
│   │       │   │       ├── useUserName.js
│   │       │   │       └── useUserType.js
│   │       │   ├── signup02
│   │       │   │   ├── Signup02.container.js
│   │       │   │   ├── Signup02.presenter.js
│   │       │   │   ├── Signup02.queries.js
│   │       │   │   ├── Signup02.styles.js
│   │       │   │   └── hooks
│   │       │   │       ├── useEmailCheck.js
│   │       │   │       └── useEmailDropdown.js
│   │       │   ├── signup03
│   │       │   │   ├── Signup03.container.js
│   │       │   │   ├── Signup03.presenter.js
│   │       │   │   ├── Signup03.queries.js
│   │       │   │   ├── Signup03.styles.js
│   │       │   │   └── hooks
│   │       │   │       ├── usePasswordCheck.js
│   │       │   │       └── usePasswordVerify.js
│   │       │   ├── signup04
│   │       │   │   ├── Signup04.container.js
│   │       │   │   ├── Signup04.presenter.js
│   │       │   │   ├── Signup04.queries.js
│   │       │   │   ├── Signup04.styles.js
│   │       │   │   └── hooks
│   │       │   │       ├── useGetUserInfo.js
│   │       │   │       ├── useNickNameCheck.js
│   │       │   │       └── useUserInfoSend.js
│   │       │   └── sns
│   │       │       ├── agreements
│   │       │       │   ├── SnsAgreements.container.js
│   │       │       │   ├── SnsAgreements.presenter.js
│   │       │       │   ├── SnsAgreements.styles.js
│   │       │       │   ├── hooks
│   │       │       │   │   ├── useAgreementState.js
│   │       │       │   │   └── usePolicyModal.js
│   │       │       │   └── policy
│   │       │       │       ├── Policy.presenter.js
│   │       │       │       └── Policy.styles.js
│   │       │       ├── complete
│   │       │       │   ├── SnsSignupComplete.container.js
│   │       │       │   ├── SnsSignupComplete.presenter.js
│   │       │       │   ├── SnsSignupComplete.styles.js
│   │       │       │   └── hooks
│   │       │       │       └── useGetUserInfo.js
│   │       │       ├── signup01
│   │       │       │   ├── SnsSignup01.container.js
│   │       │       │   ├── SnsSignup01.presenter.js
│   │       │       │   ├── SnsSignup01.styles.js
│   │       │       │   └── hooks
│   │       │       │       ├── useUserName.js
│   │       │       │       └── useUserType.js
│   │       │       └── signup02
│   │       │           ├── SnsSignup02.container.js
│   │       │           ├── SnsSignup02.presenter.js
│   │       │           ├── SnsSignup02.queries.js
│   │       │           ├── SnsSignup02.styles.js
│   │       │           └── hooks
│   │       │               ├── useGetUserInfo.js
│   │       │               ├── useNickNameCheck.js
│   │       │               └── useUserInfoSend.js
│   │       └── volunteer
│   │           ├── Volunteer.quries.js
│   │           ├── VolunteerHandler.container.js
│   │           ├── VolunteerHandler.presenter.js
│   │           ├── VolunteerHandler.styles.js
│   │           ├── [id]
│   │           │   ├── VolunteerDetail.container.js
│   │           │   ├── VolunteerDetail.presenter.js
│   │           │   ├── VolunteerDetail.quries.js
│   │           │   ├── VolunteerDetail.styles.js
│   │           │   ├── edit
│   │           │   │   ├── Edit.container.js
│   │           │   │   ├── Edit.presenter.js
│   │           │   │   ├── Edit.queries.js
│   │           │   │   ├── Edit.styles.js
│   │           │   │   ├── hooks
│   │           │   │   │   └── useSendVolunteerEdit.js
│   │           │   │   └── modal
│   │           │   │       └── successModal.js
│   │           │   ├── hooks
│   │           │   │   ├── useFetchVolunteerDetail.js
│   │           │   │   └── useNoticeClick.js
│   │           │   └── modals
│   │           │       ├── joinModal.presenter.js
│   │           │       └── joinModal.styles.js
│   │           ├── addMeeting
│   │           │   ├── AddMeeting.container.js
│   │           │   ├── AddMeeting.presenter.js
│   │           │   ├── AddMeeting.queries.js
│   │           │   ├── AddMeeting.styles.js
│   │           │   ├── component
│   │           │   │   ├── Calendar.container.js
│   │           │   │   ├── Calendar.presenter.js
│   │           │   │   └── Calendar.styles.js
│   │           │   └── hooks
│   │           │       ├── useChangeHandler.js
│   │           │       ├── useSelectDate.js
│   │           │       └── useSubmitMeetingInfo.js
│   │           ├── addNotice
│   │           │   ├── AddNotice.container.js
│   │           │   ├── AddNotice.presenter.js
│   │           │   ├── AddNotice.queries.js
│   │           │   ├── AddNotice.styles.js
│   │           │   └── hooks
│   │           │       └── useSubmitNotice.js
│   │           ├── approve
│   │           │   ├── Approve.container.js
│   │           │   ├── Approve.presenter.js
│   │           │   ├── Approve.queries.js
│   │           │   ├── Approve.styles.js
│   │           │   └── hooks
│   │           │       ├── useFetchUserList.js
│   │           │       └── useUserApproveReject.js
│   │           ├── create_volunteer
│   │           │   ├── Create_Volunteer.container.js
│   │           │   ├── Create_Volunteer.queries.js
│   │           │   ├── Create_Volunteer.styles.js
│   │           │   ├── Create_volunteer.presenter.js
│   │           │   └── hooks
│   │           │       ├── useCategorySelect.js
│   │           │       ├── useNameDescription.js
│   │           │       ├── usePeopleNumSelect.js
│   │           │       └── useSendVolunteerInfo.js
│   │           ├── hooks
│   │           │   ├── useAutoResizeTextArea.js
│   │           │   ├── useFetchVolunteer.js
│   │           │   ├── useFormat.js
│   │           │   └── useSearch.js
│   │           ├── joined
│   │           │   ├── VolunteerJoined.container.js
│   │           │   ├── VolunteerJoined.presenter.js
│   │           │   ├── VolunteerJoined.quries.js
│   │           │   ├── VolunteerJoined.styles.js
│   │           │   └── hooks
│   │           │       └── useFetchVolunteerJoined.js
│   │           ├── member
│   │           │   ├── Member.container.js
│   │           │   ├── Member.presenter.js
│   │           │   ├── Member.queries.js
│   │           │   ├── Member.styles.js
│   │           │   ├── hooks
│   │           │   │   ├── useStatusChange.js
│   │           │   │   └── useUserClick.js
│   │           │   └── modal
│   │           │       ├── ConfirmationModal.presenter.js
│   │           │       └── ConfirmationModal.styles.js
│   │           ├── notices
│   │           │   ├── Notices.container.js
│   │           │   ├── Notices.presenter.js
│   │           │   ├── Notices.quries.js
│   │           │   ├── Notices.styles.js
│   │           │   ├── [noticeID]
│   │           │   │   ├── Notice.container.js
│   │           │   │   ├── Notice.presenter.js
│   │           │   │   ├── Notice.quries.js
│   │           │   │   ├── Notice.styles.js
│   │           │   │   ├── components
│   │           │   │   │   └── Slider
│   │           │   │   │       ├── Slider.container.js
│   │           │   │   │       ├── Slider.presenter.js
│   │           │   │   │       └── Slider.styles.js
│   │           │   │   └── editNtocie
│   │           │   │       ├── EditNotice.container.js
│   │           │   │       ├── EditNotice.presenter.js
│   │           │   │       ├── EditNotice.queries.js
│   │           │   │       ├── EditNotice.styles.js
│   │           │   │       └── hooks
│   │           │   │           └── useSubmitEditNotice.js
│   │           │   └── hooks
│   │           │       └── useFetchNotices.js
│   │           ├── recommend
│   │           │   ├── VolunteerRecommend.container.js
│   │           │   ├── VolunteerRecommend.presenter.js
│   │           │   ├── VolunteerRecommend.styles.js
│   │           │   └── hooks
│   │           │       └── useFetchVolunteerRecommend.js
│   │           ├── region
│   │           │   ├── VolunteerRegion.container.js
│   │           │   ├── VolunteerRegion.presenter.js
│   │           │   ├── VolunteerRegion.quries.js
│   │           │   ├── VolunteerRegion.styles.js
│   │           │   └── hooks
│   │           │       └── useFetchNewAndRegionVolunteer.js
│   │           ├── regular_meetings
│   │           │   ├── Regular_Meetings.container.js
│   │           │   ├── Regular_Meetings.presenter.js
│   │           │   ├── Regular_Meetings.quries.js
│   │           │   ├── Regular_Meetings.styles.js
│   │           │   ├── [meetingID]
│   │           │   │   ├── Regular_Meeting.container.js
│   │           │   │   ├── Regular_Meeting.presenter.js
│   │           │   │   ├── Regular_Meeting.quries.js
│   │           │   │   ├── Regular_Meeting.styles.js
│   │           │   │   ├── editMeeting
│   │           │   │   │   ├── EditMeeting.container.js
│   │           │   │   │   ├── EditMeeting.presenter.js
│   │           │   │   │   ├── EditMeeting.queries.js
│   │           │   │   │   ├── EditMeeting.styles.js
│   │           │   │   │   └── hooks
│   │           │   │   │       └── useSubmitMeetingEdit.js
│   │           │   │   └── hooks
│   │           │   │       └── useRequestMeeting.js
│   │           │   └── hooks
│   │           │       └── useFetchRegularMeetings.js
│   │           └── volunteerDetailHeader
│   │               ├── VolunteerDetailHeader.container.js
│   │               ├── VolunteerDetailHeader.presenter.js
│   │               ├── VolunteerDetailHeader.queries.js
│   │               ├── VolunteerDetailHeader.styles.js
│   │               ├── hooks
│   │               │   ├── useClickOut.js
│   │               │   ├── useDelete.js
│   │               │   ├── useGetTitleByPath.js
│   │               │   └── useReport.js
│   │               └── modal
│   │                   ├── deleteModal.js
│   │                   └── deleteModal.styles.js
│   └── store
│       ├── useAuthStore.js
│       └── useModalStore.js
├── styles
│   ├── 01-02-emotion.js
│   ├── Home.module.css
│   └── globals.css
└── yarn.lock
</pre>
</br>

#### □ BE 디렉토리</br>
<pre>
ForPaw_BE
├── controller
│   ├── DTO
│   │   └── Query
│   │       ├── MeetingUserProfileDTO
│   │       ├── AlarmRequest
│   │       ├── AlarmResponse
│   │       ├── AnimalDTO
│   │       ├── AnimalRequest
│   │       ├── AnimalResponse
│   │       ├── AuthenticationRequest
│   │       ├── AuthenticationResponse
│   │       ├── ChatRequest
│   │       ├── ChatResponse
│   │       ├── GoogleMapDTO
│   │       ├── GoogleOauthDTO
│   │       ├── GroupRequest
│   │       ├── GroupResponse
│   │       ├── HomeResponse
│   │       ├── KakaoMapDTO
│   │       ├── KakaoOauthDTO
│   │       ├── PostRequest
│   │       ├── PostResponse
│   │       ├── RegionListDTO
│   │       ├── SearchResponse
│   │       ├── ShelterDTO
│   │       ├── ShelterResponse
│   │       ├── UserRequest
│   │       └── UserResponse
│   ├── AlarmController
│   ├── AnimalController
│   ├── AuthenticationController
│   ├── ChatController
│   ├── GroupController
│   ├── HomeController
│   ├── PostController
│   ├── RegionCodeController
│   ├── S3Controller
│   ├── SearchController
│   ├── ShelterController
│   └── UserController
├── core
│   ├── config
│   │   ├── AppStartupListener
│   │   ├── AsyncConfig
│   │   ├── QuerydslConfig
│   │   ├── RabbitMqConfig
│   │   ├── RedisConfig
│   │   ├── RestTemplateConfig
│   │   ├── S3Config
│   │   ├── ThymeleafConfig
│   │   ├── WebClientConfig
│   │   └── WebSocketConfig
│   ├── errors
│   │   ├── CustomException
│   │   ├── ExceptionCode
│   │   └── GlobalExceptionHandler
│   ├── security
│   │   ├── CustomUserDetails
│   │   ├── CustomUserDetailsService
│   │   ├── JwtAuthenticationFilter
│   │   ├── JWTProvider
│   │   └── SecurityConfig
│   └── utils
│       ├── ApiUtils
│       ├── CookieUtils
│       ├── EnumUtils
│       ├── FilterResponseUtils
│       └── LogUtils
├── domain
│   ├── Alarm
│   │   ├── Alarm
│   │   ├── AlarmType
│   ├── Animal
│   │   ├── Animal
│   │   ├── AnimalType
│   │   └── FavoriteAnimal
│   ├── Apply
│   │   ├── Apply
│   │   └── ApplyStatus
│   ├── Authentication
│   │   ├── LoginAttempt
│   │   └── Visit
│   ├── Chat
│   │   ├── ChatRoom
│   │   ├── ChatUser
│   │   ├── LinkMetadata
│   │   ├── Message
│   │   └── MessageType
│   ├── FAQ
│   │   ├── FAQ
│   │   └── FaqType
│   ├── Group
│   │   ├── FavoriteGroup
│   │   ├── Group
│   │   ├── GroupRole
│   │   ├── GroupUser
│   │   ├── Meeting
│   │   └── MeetingUser
│   ├── Inquiry
│   │   ├── Inquiry
│   │   ├── InquiryAnswer
│   │   ├── InquiryStatus
│   │   └── InquiryType
│   ├── Post
│   │   ├── Comment
│   │   ├── CommentLike
│   │   ├── PopularPost
│   │   ├── Post
│   │   ├── PostImage
│   │   ├── PostLike
│   │   └── PostType
│   ├── Report
│   │   ├── ContentType
│   │   ├── Report
│   │   ├── ReportStatus
│   │   └── ReportType
│   └── User
│       ├── AuthProvider
│       ├── User
│       ├── UserRole
│       ├── UserStatus
│       ├── District
│       ├── Province
│       ├── RegionCode
│       ├── Shelter
│       └── TimeStamp
├── repository
│   ├── Alarm
│   │   ├── AlarmRepository
│   │   ├── EmitterRepository
│   │   └── EmitterRepositoryImpl
│   ├── Animal
│   │   ├── AnimalRepository
│   │   └── FavoriteAnimalRepository
│   ├── Authentication
│   │   ├── LoginAttemptRepository
│   │   └── VisitRepository
│   ├── Chat
│   │   ├── ChatRoomRepository
│   │   ├── ChatUserRepository
│   │   └── MessageRepository
│   ├── Group
│   │   ├── FavoriteGroupRepository
│   │   ├── GroupRepository
│   │   ├── GroupUserRepository
│   │   ├── MeetingRepository
│   │   └── MeetingUserRepository
│   ├── Inquiry
│   │   ├── InquiryAnswerRepository
│   │   └── InquiryRepository
│   └── Post
│       ├── ApplyRepository
│       ├── FaqRepository
│       ├── RegionCodeRepository
│       ├── ReportRepository
│       ├── ShelterRepository
│       └── UserRepository
└── service
    ├── AlarmService
    ├── AnimalService
    ├── AuthenticationService
    ├── BrokerService
    ├── ChatService
    ├── GroupService
    ├── HomeService
    ├── PostService
    ├── RedisService
    └── RegionCodeService
    ├── S3Service
    ├── SearchService
    └── ShelterService
    └── UserService
</pre>
</br>

### 3.5. 사업체 멘토링 의견 반영 사항</br>
- ``기획 파트``</br>
  - '지역 상황 비교 시 추가 정보 제공'에 대한 피드백</br>
    > 기존 보고서에 부산과 타지역의 보호소 수나 현황을 비교하는 자료가 부족했습니다. 해당 피드백을 바탕으로 지역별 유실·유기동물 수 비교 자료[^8], 지역별 동물보호센터 비교 자료[^9], 지역별 자연사율·안락사율 비교 자료[^10]를 추가했습니다. 이를 바탕으로 부산 지역 보호소의 문제점을 여실히 드러내고 관련 서비스의 필요성을 제고했습니다. 또한, 도표를 함께 첨부하여 설득력을 높였습니다.</br >
  - '5 whys 분석법'에 대한 피드백</br>
      > 5 whys 분석법에 대한 구체적인 정의를 포함하지 않은 채 보고서를 작성했습니다. 피드백을 바탕으로 각주[^18]에 의미와 설명을 추가했습니다. 이를 통해 분석법의 개념을 모르는 사람도 쉽게 이해할 수 있게 했습니다.</br>
  - '사업화 계획'에 대한 피드백</br>
      > 
</br>

- ``개발 파트``</br>
  - '테스트 전략'에 대한 피드백 반영</br>
    >  피드백을 반영하여 성능을 어느 정도 보장할 수 있을지 측정하기 위해 부하 테스트를 진행하였습니다. 부하 테스트는 네이버의 오픈소스 툴인 Ngrinder를 활용하여 1,000명의 가상 사용자를 대상으로 시뮬레이션을 진행하였습니다. 그 결과, 각 사용자의 요청에 대한 초당 처리 트랜잭션(TPS)은 평균 754 TPS, 최대 1,531 TPS까지 도달했으며, 평균 응답 시간은 560.32ms로 측정되었습니다. 총 142,105건의 요청 중 140,470건이 성공적으로 처리되어 성공률은 98.8%를 기록했고, 1635건의 오류가 발생했습니다. 또한, Prometheus를 이용해 배포된 EC2 인스턴스의 시스템 자원을 실시간 모니터링한 결과, CPU 사용량은 평균 65%, 메모리 사용량은 55%로 안정적인 상태를 유지함을 확인하였습니다."</br >

<br>
<img width="455" alt="스크린샷 2024-09-04 오후 2 40 01" src="https://github.com/user-attachments/assets/777c1a98-dbe6-4d8b-bfa9-c530b2c1961d"> </br>

> 테스트한 결과값 일부

</br>

## 4. 설치 및 사용 방법
> Requirements: Docker, Docker Compose </br>
> (.env 파일은 보안상 깃에 포함되지 않아, 빌드가 바로 되지 않습니다. .env 파일이 있다고 가정할 때, 사용 방법은 다음과 같습니다) 
```bash
git clone https://github.com/The-5th-PNU-Convergence-SW-Hackathon/PNUSW-2024-team-08.git
cd PNUSW-2024-team-08/BE/spring

docker compose up -d
docker build -t hoyaii/spring .
docker run -d -p 8080:8080 --name spring --network forpaw_be_network hoyaii/spring

cd PNUSW-2024-team-08/BE/FastAPI
docker build -t hoyaii/fastapi .
docker run -d -p 8000:8000 --name fastapi --network forpaw_be_network hoyaii/fastapi

cd  ~/PNUSW-2024-team-08/FE

docker build -t hoyaii/react .
docker run -d -p 8000:8000 --name react --network forpaw_be_network hoyaii/react

```

</br>

## 5. 소개 및 시연 영상

> 프로젝트에 대한 소개와 시연 영상을 넣으세요.
> 프로젝트 소개 동영상을 교육원 메일(swedu@pusan.ac.kr)로 제출 이후 센터에서 부여받은 youtube URL주소를 넣으세요.
</br>

1️⃣ 회원가입

https://github.com/user-attachments/assets/e4e08d1d-abe4-4e7c-b25e-61040af71875


2️⃣ 메인 화면

https://github.com/user-attachments/assets/2de3bee5-4646-46da-8a1b-2914adc17044


3️⃣ 봉사활동



4️⃣ 입양

https://github.com/user-attachments/assets/587b5538-1cb3-4f62-995e-2e58afab7ae2


5️⃣ 커뮤니티

https://github.com/user-attachments/assets/ac284a0d-b082-472f-b7f9-5e547aba2674



6️⃣ 채팅

https://github.com/user-attachments/assets/239a0d1a-fd2b-4c8a-ae5a-95ac1300bdb2

</br>


## 6. 팀 소개
``Team_PAW``</br>
> 저희는 백엔드 개발자 2명, 프론트엔드 개발자 1명, 그리고 기획자 2명으로 이루어진 PAW 팀입니다. 각각의 팀원이 자신의 전문성을 최대한 발휘할 수 있도록 개발자들은 최적의 기술 스택과 코딩 품질을 유지하며 확장 가능한 시스템을 구현하는 데 집중했습니다. 기획자들은 PM으로서 프로젝트 관리를 하며 원활한 의사소통을 이끌었고, Farcilitator로서 생각을 모으고 팀원들을 독려하는 역할을 했습니다. 또한, 직군 간 부드러운 협업을 위해 Notion과 Figma 등의 협업툴을 적극 활용하여 실시간으로 아이디어를 시각화하고 프로젝트의 모든 단계를 투명하게 공유했습니다. 이렇듯 ``팀워크``와 ``몰입``을 추구하며 성공적인 결과물을 구현했습니다.</br>
</br>

- 이한홍(``BE 개발자``, ``팀장``)</br>
  - API, DB 설계 등 초기 기획 담당</br> 
  - 백엔드 개발 (Spring Boot, FastAPI)</br>
  - CI/CD 파이프라인 구축 등 인프라 구축</br>
  - 배포 및 관리 담당</br>
  - 관리자 페이지 UI/UX 설계 및 API 개발</br>

  

  </br>
- 박정우(``BE 개발자``)</br>
  - Postman을 활용한 API 기능 테스트 수행</br>
  - 관리자 페이지 API 개발 관여</br>
  - 작업 내용 문서화 및 협업 툴 관리</br>

  

  </br>

- 이종일(``FE 개발자``)</br>
  - 프론트엔드 개발 (React, NextJS)  </br>
  - 테스트 프레임워크를 활용해 유저 테스트 진행  </br>
  - 코드와 리소스를 압축하고 캐싱을 구현 </br>
  - 리유저블 코드 구조 설계 및 크로스 브라우징 이슈 관리 </br>
  - SSR을 사용해 동적 콘텐츠 처리 효율 증가 </br>

  
  </br>

- 최현빈(``기획자``) </br>
  - 시장 리서치 및 주제 방향성 설정 </br>
  - 서비스의 기능 정의 및 기능 요구 사항 도출 </br>
  - UI 및 사용자 경험 설계 </br>
  - 데이터를 기반으로 기능 개선 방안 도출 </br>
  - 기획서 작성 및 발표 자료 제작 </br>
  

  - 기획서 작성 및 발표자료 제작 </br>
  </br>

- 김도은(``기획자``) </br>
  - UI 설계 및 UX/UI 디자인 </br>
  - 서비스 아이디어 발굴 및 MVP 정의 </br>
  - BM 모델 개발 및 창업 지원 </br>
</br>

## 7. 해커톤 참여 후기
- 이한홍
  - 나에게 **PNU 창의융합 SW 해커톤**은 ``새로운 도전``이다. 

    > 이번 해커톤을 돌아보면, 새로운 배움과 성장을 경험한 매우 의미 있는 시간이었습니다. 초기 기획과 설계를 담당하며, 백지 상태에서 프로젝트를 구상하는 과정에서 기획 역량을 키울 수 있었고, 이전에는 도입해보지 않았던 Open API, LLM, 추천 시스템 등을 직접 구현하면서 기술적인 성장도 크게 이뤘습니다. 또한, 다양한 역할을 맡은 팀원들과의 협업을 통해 서로의 강점을 극대화하며 프로젝트를 즐겁게 진행할 수 있었고, 협업 능력을 한층 더 키울 수 있는 좋은 발판이 되었습니다.</br></br>

- 이종일
  - 나에게 **창의융합 SW 해커톤**은 ``퀀텀 점프``이다.
    
    > 짧은 기간 동안 끊임없이 몰입하였기에 마치 양자가 퀀텀 점프를 하듯이 실력이 향상되었습니다. 단순히 기능 구현에만 그치지 않고, 실제 사용자들의 편의성을 우선순위에 두고 개발에 임하였습니다. 최대한 많은 경우의 수를 고려하여 비정상적인 작동에 대비하였고, 팀원들과 함께 고민하며 기능의 완성도를 높였습니다. 그리고 무엇보다 멋진 팀원들과 함께했기에 즐겁게 작업할 수 있었습니다. 앞으로도 항상 도전하며 성장하겠습니다!</br></br>
  
- 박정우
  - 나에게 **창의융합 SW 해커톤**은 ``끝없는 성장``이다.
  
    > 해커톤에서 백엔드 개발자로 참여하여 어드민 페이지를 주로 만들었습니다. 다양한 활동 때문에 회의에 종종 참여하지 못했지만, 좋은 팀원들이 부족한 부분을 많이 채워주어 성공적으로 프로젝트를 마무리할 수 있었습니다. Spring Boot 코드를 짜보면서 실제 서비스가 어떻게 돌아가는지 감을 잡을 수 있었고, 이 경험이 나중에 취업할 때와 살아가는 데에 있어서 큰 도움이 될 것 같습니다. 이번 해커톤을 계기로 더 큰 개발자로 계속 성장하고 싶습니다. 모두 고생 많으셨습니다! </br></br>
    
- 최현빈
  - 나에게 **창의융합 SW 해커톤**은 ``넉넉한 그리움``이다.
    
    > 사람을 좋아하기에 기획자가 되었습니다. 이번 해커톤에서도 무엇보다 중요한 것은 바로 팀원들이었습니다. 큰 개발규모와 그에 맞는 다양한 기능들, 디자인과 기획서까지 이 모든 작업을 수행하며, 방대한 계획을 세웠던 5월의 자신을 원망하기도 했습니다. 하지만 하나의 목표를 세우고 발을 맞췄기에 성공적으로 끝에 다다를 수 있었습니다. 우리의 서비스는 여기서 끝나지 않을 겁니다. 사람들의 우리의 서비스를 편히 사용하는 그날까지, 그리고 유기동물 문제가 해결되는 그때까지, 포포는 계속됩니다. 두 계절을 잇는 몰입의 시간은 넉넉한 그리움으로 남을 것 같습니다. 마지막으로 팀원들과 교육원에 계신 모든 분께 고마움의 인사를 전합니다!  </br></br>
  
- 김도은
  - 나에게 **창의융합 SW 해커톤**은 ``튼튼한 다리``이다.

    > 해커톤을 완주하였더니 어디든 갈 수 있는 튼튼한 다리를 얻은 것 같습니다. 이번 프로젝트는 기획이라는 분야와 전공을 잇는 다리를 짓는 일이기도 했습니다. 좋은 팀원들을 만나 큰 기회를 얻을 수 있어서 영광이었습니다. 저의 반려견을 떠올리며, 사회와 동물에게 정말 도움이 되기를 바라는 마음으로 임하였습니다. 이와 비슷한 노력이 모여 모두가 행복하게, 자신의 권리를 누리며 살아가는 세상이 되었으면 좋겠습니다!



<br/>

## 8. 참고문헌 및 출처
[^1]: 출처: 한국 반려동물 보고서(18p), KB경영연구소(2023)
[^2]: 출처: 반려동물 보호복지 실태조사(3p), 농림축산식품부(2023)
[^3]: 출처: 동물복지에 대한 국민의식조사(128p, N=1,000), 농림축산식품부(2023)
[^4]: 출처: 동물복지에 대한 국민의식조사(84p, N=1,000), 농림축산식품부(2023)
[^5]: 출처: 동물복지에 대한 국민의식조사(88p, N=1,000), 농림축산식품부(2023)
[^6]: 출처: 동물복지에 대한 국민의식조사(179p, N=1,000), 농림축산식품부(2023)
[^7]: 출처: 반려동물 입양과정과 유기동물 발생에 대한 관련성 고찰 및 해결방안 모색, 한세명 외 4명(2022)
[^8]: 출처: 유실·유기동물 발생 분석 보고서(3p), 동물자유연대(2023)
[^9]: 출처: 동물 보호·복지 실태조사, 농림축산검역본부(2024)
[^10]: 출처: 유실·유기동물 발생 분석 보고서(51p), 동물자유연대(2023)
[^11]: 출처: ‘유실·유기동물 무덤 오명 부산', B tv 부산뉴스(2023)
[^12]: 출처: 동물복지에 대한 국민의식조사(130p, N=1,000), 농림축산식품부(2023)
[^13]: 출처: '유기견 보호소 가보니 신종 펫숍', SBS뉴스(2023)
[^14]: 출처: '유기견 보호소에 유기견이 없다...', 비디오머그(2023) 
[^15]: 출처: '부산유기동물보호센터 가유품사 네이버 카페-성인 주말봉사 신청'(2024.08.16.)
[^16]: 출처: In-Depth 인터뷰, 35m(2024.05.25.)
[^17]: 출처: 대한산업보건협회 월간지(60p, 2021.12월)
[^18]: 문제의 근본 원인을 파악하기 위해 "왜?"라는 질문을 다섯 번 반복하는 기법. 이를 통해 표면적인 문제의 원인이 아닌, 근본적인 원인을 찾아내고 해결할 수 있다. 처음 도요타 생산 시스템에서 사용되었으며, 현재 다양한 산업에서 문제 해결 및 프로세스 개선 도구로 활용되고 있다.
[^19]: 조직이나 프로젝트의 강점(S), 약점(W), 기회(O), 위협(T)을 평가하는 전략적 계획 도구. 강점과 약점은 내부 요인을, 기회와 위협은 외부 요인을 분석하여 현재 상황을 이해하고 전략적 결정을 내리는 데 도움을 준다. 이 분석은 조직의 경쟁력을 강화하고, 위험을 최소화하며, 기회를 최대화하는 데 유용하다.








