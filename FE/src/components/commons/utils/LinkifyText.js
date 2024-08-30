import React from "react";

const linkify = (text) => {
  const urlRegex = /https?:\/\/[^\s가-힣]+/g;

  // 텍스트를 URL과 그 외의 텍스트로 분리
  const parts = text.split(urlRegex);

  // URL에 해당하는 부분을 추출
  const urls = text.match(urlRegex);

  // 텍스트와 URL을 결합하여 JSX 요소로 변환
  return parts.reduce((acc, part, index) => {
    acc.push(part); // URL 이외의 텍스트 추가

    // URL이 존재하면 링크로 감쌉니다.
    if (urls && urls[index]) {
      acc.push(
        <a
          key={index}
          href={urls[index]}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#4a90e2", textDecoration: "underline" }}
        >
          {urls[index]}
        </a>
      );
    }

    return acc;
  }, []);
};

const LinkifyText = ({ content }) => {
  return <span>{linkify(content)}</span>;
};

export default LinkifyText;
