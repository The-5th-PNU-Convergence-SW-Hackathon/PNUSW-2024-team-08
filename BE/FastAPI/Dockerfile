# 베이스 이미지
FROM python:3.9

# 작업 디렉토리를 /project로 설정
WORKDIR /project

# 요구 사항 파일 복사
COPY ./requirements.txt /project/requirements.txt

# 의존성 설치
RUN pip install --no-cache-dir --upgrade -r /project/requirements.txt

# .env 파일 복사
COPY ./app/.env /project/app/.env

# 나머지 파일 복사
COPY ./app /project/app

# 환경 변수 설정
ENV PYTHONPATH=/project

# 애플리케이션 실행
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]