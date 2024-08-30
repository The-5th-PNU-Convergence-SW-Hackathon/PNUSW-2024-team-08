import React, { useRef, useEffect, useCallback } from "react";
import * as S from "./ChattingInput.styles";
import Image from "next/image";

const ChattingInputUI = React.memo((props) => {
  return (
    <>
      <S.ChatInputWrapper>
        <S.ChatDataAdd onClick={props.handleDataAddClick}>
          <input
            type="file"
            ref={props.dataInputRef}
            style={{ display: "none" }}
            multiple
            onChange={props.handleDataUpload}
          />
          <Image
            src="/images/chatting/chatting_add_icon.svg"
            alt="chatting_add_icon"
            width={20}
            height={20}
          />
        </S.ChatDataAdd>
        <S.ChatTextareaBlock
          autoFocus
          ref={props.inputRef}
          value={props.message}
          placeholder="채팅 내용을 입력해주세요."
          onChange={props.handleChange}
          onKeyDown={props.handleKeyDown}
          onCompositionStart={props.handleCompositionStart}
          onCompositionEnd={props.handleCompositionEnd}
          minRows={1}
          maxRows={3}
        />
        <S.ChatInputButton onClick={props.handleSend}>
          <Image
            src="/images/chatting/chatting_input_arrow.svg"
            alt="chatting_input_arrow"
            width={17}
            height={17}
          />
        </S.ChatInputButton>
      </S.ChatInputWrapper>

      {props.isDataModalOpen &&
        props.photos.length + props.files.length > 0 && (
          <S.DataModalOverlay onClick={props.closeDataModal}>
            <S.DataModalContent onClick={(e) => e.stopPropagation()}>
              <S.UploadTitle>파일 전송</S.UploadTitle>
              <S.UploadDataContainer>
                {props.photos.map((photo) => (
                  <S.UploadDataBlock key={photo.id}>
                    {console.log("Photo: ", photo)}
                    {console.log("Photo URL: ", photo.preview)}
                    <S.UploadPhoto src={photo.preview} alt={photo.name} />
                    <S.UploadDataInfo>
                      <S.UploadDataName>
                        {props.truncateFileName(photo.name, 16) +
                          "." +
                          photo.extension}
                      </S.UploadDataName>
                      <S.UploadDataSize>
                        {(photo.size / 1024 / 1024).toFixed(2) + "MB"}
                      </S.UploadDataSize>
                    </S.UploadDataInfo>
                    <S.UploadDataDelete
                      onClick={() => props.deleteData(photo.id)}
                    >
                      ✕
                    </S.UploadDataDelete>
                  </S.UploadDataBlock>
                ))}
                {props.files.map((file) => (
                  <S.UploadDataBlock key={file.id}>
                    <S.UploadFileImgBlock>
                      <img
                        src={props.getFileIconPath(file.extension)}
                        alt={file.name}
                        with={70}
                        height={70}
                      />
                    </S.UploadFileImgBlock>
                    <S.UploadDataInfo>
                      <S.UploadDataName>
                        {props.truncateFileName(file.name, 18) +
                          "." +
                          file.extension}
                      </S.UploadDataName>
                      <S.UploadDataSize>
                        {(file.size / 1024 / 1024).toFixed(2) + "MB"}
                      </S.UploadDataSize>
                    </S.UploadDataInfo>
                    <S.UploadDataDelete
                      onClick={() => props.deleteData(file.id)}
                    >
                      ✕
                    </S.UploadDataDelete>
                  </S.UploadDataBlock>
                ))}
              </S.UploadDataContainer>
              <S.DataBtnBlock>
                <S.CancelBtn onClick={props.closeDataModal}>취소</S.CancelBtn>
                <S.UploadBtn onClick={props.confirmUpload}>
                  {props.photos.length + props.files.length}개 전송
                </S.UploadBtn>
              </S.DataBtnBlock>
            </S.DataModalContent>
          </S.DataModalOverlay>
        )}
    </>
  );
});

export default ChattingInputUI;
