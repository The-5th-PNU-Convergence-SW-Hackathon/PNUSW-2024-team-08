import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["pnucoding.s3.ap-northeast-2.amazonaws.com"],
  },
};

// PWA 설정과 기존 Next.js 설정을 병합
export default withPWA({
  dest: "public", // 서비스 워커 파일이 생성될 위치
  register: true, // 서비스 워커를 자동으로 등록
  skipWaiting: true, // 사용 중인 오래된 서비스 워커를 새로운 서비스 워커로 교체
})(nextConfig);
