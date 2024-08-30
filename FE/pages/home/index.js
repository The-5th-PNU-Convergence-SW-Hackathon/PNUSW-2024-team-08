import Home from "../../src/components/units/home/Home.container";
import {
  checkAuth,
  verifyAccessToken,
} from "../../src/components/commons/utils/auth";
import { fetchHomeData } from "../../src/components/units/home/Home.queries";
import cookie from "cookie";

export default function HomePage({ isSSRLoggedIn, profileURL, homeData }) {
  return (
    <>
      <Home
        isSSRLoggedIn={isSSRLoggedIn}
        profileURL={profileURL}
        homeData={homeData}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /home");

  const { req, res, query } = context;
  const { accessToken } = query;

  // 홈 데이터 가져오기
  const homeData = await fetchHomeData();

  // accessToken이 쿼리에 있는 경우 쿠키에 저장
  if (accessToken) {
    console.log("accessToken: ", accessToken);
    // Set the cookie in the response
    const serializedCookie = cookie.serialize("accessToken", accessToken, {
      secure: false, // 개발 환경에서는 HTTPS를 요구하지 않음
      sameSite: "Strict", // 동일 사이트에서만 쿠키 전송
      maxAge: 60 * 60 * 24, // 1일 동안 유지 (expires: 1일과 동일)
      path: "/", // 전체 사이트에서 접근 가능
    });

    res.setHeader("Set-Cookie", serializedCookie);
    console.log("Access token saved to cookies");

    // Manually set the cookie in the request header for immediate use
    req.headers.cookie = req.headers.cookie
      ? `${req.headers.cookie}; ${serializedCookie}`
      : serializedCookie;

    const { valid, profileURL } = await verifyAccessToken(accessToken);

    return {
      props: {
        isSSRLoggedIn: valid,
        profileURL,
        homeData,
      },
    };
  } else {
    // 쿠키가 설정된 후 checkAuth 실행
    const authResult = await checkAuth(context);
    console.log("authResult in /home:", authResult);

    const { isSSRLoggedIn, profileURL } = authResult.props;

    return {
      props: {
        isSSRLoggedIn,
        profileURL,
        homeData,
      },
    };
  }
}
