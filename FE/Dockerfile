# 이미 리눅스, node, npm, yarn까지 모두 깔려있는 컴퓨터 다운로드
FROM node:20.10.0

# 작업 디렉토리 설정
WORKDIR /ForPaw_FE

# 패키지 먼저 설치하기
COPY package.json yarn.lock ./
RUN yarn install

# 소스코드 복사하기
COPY . .

# 빌드 명령어 실행
RUN yarn build

# 도커 안에서 프로그램 실행하기
CMD ["yarn", "start"]
