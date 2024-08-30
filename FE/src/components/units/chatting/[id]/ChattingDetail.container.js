import React, { useEffect, useState } from "react";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import ChattingDetailUI from "./ChattingDetail.presenter";
import useFetchChatMsgList from "./hooks/useFetchChatMsgList";
import useChattingScroll from "./hooks/useChattingScroll";
import { useSearchSideMenu } from "./hooks/useSearchSideMenu";
import { useDataManager } from "./hooks/useDataManager";
import { useTruncateString } from "../../../../../src/components/commons/hooks/useTruncateString";
import useChatInput from "./hooks/useChatInput";
import ChattingInputUI from "./input/ChattingInput.presenter";
import ChattingSideMenuUI from "./sidemenu/ChattingSideMenu.presenter";
import { usePhotoModal } from "../../../../../src/components/commons/hooks/usePhotoModal";
import { useRouter } from "next/router";
import useDetailToggle from "./hooks/useDetailToggle";
import LinkifyText from "../../../../../src/components/commons/utils/LinkifyText";

const ChattingDetail = ({
  isSSRLoggedIn,
  profileURL,
  chatRoomId,
  chatMsgListData,
  chatRoomDrawerData,
}) => {
  console.log("ChattingDetail isSSRLoggedIn: ", isSSRLoggedIn);
  console.log("chatRoomId: ", chatRoomId);
  console.log("chatMsgListData: ", chatMsgListData);
  console.log("chatRoomDrawerData: ", chatRoomDrawerData);

  const router = useRouter();
  const chatRoomName = chatMsgListData.chatRoomName;
  const myNickName = chatMsgListData.myNickName;
  const [photos, setPhotos] = useState([]);
  const [files, setFiles] = useState([]);
  const {
    chatMsgList,
    setChatMsgList,
    addMessage,
    prevPage,
    loadPreviousMessages,
  } = useFetchChatMsgList(chatMsgListData);

  const {
    message,
    inputRef,
    handleSend,
    handleSendImages,
    handleSendFiles,
    handleChange,
    handleKeyDown,
    handleCompositionStart,
    handleCompositionEnd,
  } = useChatInput(
    addMessage,
    setChatMsgList,
    photos,
    files,
    chatRoomId,
    myNickName,
    profileURL
  );

  const { isDetail, toggleDetail } = useDetailToggle();

  const {
    isPhotoLimitReached,
    isDataModalOpen,
    isUploadConfirmed,
    addData,
    deleteData,
    handleDataUpload,
    dataInputRef,
    handleDataAddClick,
    closeDataModal,
    confirmUpload,
    getFileIconPath,
    downloadFile,
    getMainDomain,
  } = useDataManager(
    handleSendImages,
    handleSendFiles,
    photos,
    setPhotos,
    files,
    setFiles
  );

  const {
    isPhotoModalOpen,
    openPhotoModal,
    closePhotoModal,
    currentIndex,
    photosModal,
    handleNext,
    handlePrev,
    photoModalHandlers,
  } = usePhotoModal();

  const { scrollRef, initialRender } = useChattingScroll(
    chatMsgList,
    chatRoomId,
    prevPage,
    loadPreviousMessages
  );
  const { isSearchOpen, toggleSearch, isSideMenuOpen, toggleSideMenu } =
    useSearchSideMenu();
  const { truncateString, truncateFileName } = useTruncateString();
  const { navigateTo, navigateBack } = useNavigate();

  useEffect(() => {
    console.log("scrollRef current:", scrollRef.current);
  }, [scrollRef]);

  return (
    <>
      <ChattingDetailUI
        chatMsgList={chatMsgList}
        chatRoomName={chatRoomName}
        scrollRef={scrollRef}
        initialRender={initialRender}
        isDetail={isDetail}
        toggleDetail={toggleDetail}
        isSearchOpen={isSearchOpen}
        toggleSearch={toggleSearch}
        isSideMenuOpen={isSideMenuOpen}
        toggleSideMenu={toggleSideMenu}
        isPhotoModalOpen={isPhotoModalOpen}
        openPhotoModal={openPhotoModal}
        closePhotoModal={closePhotoModal}
        currentIndex={currentIndex}
        photosModal={photosModal}
        handleNext={handleNext}
        handlePrev={handlePrev}
        photoModalHandlers={photoModalHandlers}
        truncateString={truncateString}
        truncateFileName={truncateFileName}
        getFileIconPath={getFileIconPath}
        downloadFile={downloadFile}
        getMainDomain={getMainDomain}
        LinkifyText={LinkifyText}
        navigateTo={navigateTo}
        navigateBack={navigateBack}
      />
      <ChattingInputUI
        message={message}
        inputRef={inputRef}
        handleSend={handleSend}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
        handleCompositionStart={handleCompositionStart}
        handleCompositionEnd={handleCompositionEnd}
        photos={photos}
        files={files}
        isPhotoLimitReached={isPhotoLimitReached}
        isDataModalOpen={isDataModalOpen}
        isUploadConfirmed={isUploadConfirmed}
        addData={addData}
        deleteData={deleteData}
        handleDataUpload={handleDataUpload}
        dataInputRef={dataInputRef}
        handleDataAddClick={handleDataAddClick}
        closeDataModal={closeDataModal}
        confirmUpload={confirmUpload}
        getFileIconPath={getFileIconPath}
        truncateFileName={truncateFileName}
      />
      <ChattingSideMenuUI
        chatRoomDrawerData={chatRoomDrawerData}
        isSideMenuOpen={isSideMenuOpen}
        toggleSideMenu={toggleSideMenu}
        chatRoomId={chatRoomId}
        navigateTo={navigateTo}
      />
    </>
  );
};

export default React.memo(ChattingDetail);
