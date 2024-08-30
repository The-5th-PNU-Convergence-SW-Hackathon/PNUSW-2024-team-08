import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

const accessKeyId = process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID;
const secretAccessKey = process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY;

// AWS 설정 (여기에 발급받은 액세스 키와 비밀 액세스 키를 입력합니다)
const s3 = new AWS.S3({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  region: "ap-northeast-2",
});

/**
 * S3에 파일을 업로드하는 함수
 */
export const uploadFileToS3 = async (file, bucketName, folderPath) => {
  console.log("uploadFileToS3 file:", file);

  try {
    const fileExtension = file.name.split(".").pop();
    const fileName = file.name;
    const fullPath = `${folderPath}/${fileName}`;
    const params = {
      Bucket: bucketName,
      Key: fullPath,
      Body: file,
    };

    const result = await s3.upload(params).promise();
    console.log("File uploaded to S3:", result);
    return `https://${bucketName}.s3.${s3.config.region}.amazonaws.com/${fullPath}`;
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw error;
  }
};
