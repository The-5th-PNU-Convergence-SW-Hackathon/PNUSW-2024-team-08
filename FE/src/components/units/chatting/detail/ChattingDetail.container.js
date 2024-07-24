import { useEffect, useState } from "react";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import ChattingDetailUI from "./ChattingDetail.presenter";
import useFetchChatMsgList from "./hook/useFetchChatMsgList";
import useScrollToBottom from "./hook/useScrollToBottom";
import { useSearchSideMenu } from "./hook/useSearchSideMenu";
import { useDataManager } from "./hook/useDataManager";
import { useTruncateString } from "../../../../../src/components/commons/hooks/useTruncateString";
import useChatInput from "./hook/useChatInput";
import ChattingInputUI from "./input/ChattingInput.presenter";
import ChattingSideMenuUI from "./sidemenu/ChattingSideMenu.presenter";
import { usePhotoMsgModal } from "./hook/usePhotoMsgModal";

export default function ChattingDetail() {
  const { chatMsgList, addMessage } = useFetchChatMsgList();
  const {
    message,
    handleChange,
    handleSend,
    handleSendImages,
    handleKeyPress,
  } = useChatInput(addMessage);
  const {
    photos,
    files,
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
  } = useDataManager(handleSendImages);
  const {
    isPhotoModalOpen,
    openPhotoModal,
    closePhotoModal,
    currentIndex,
    photosModal,
    handleNext,
    handlePrev,
    photoModalHandlers,
  } = usePhotoMsgModal();
  const { scrollRef, initialRender } = useScrollToBottom(chatMsgList);
  const { isSearchOpen, toggleSearch, isSideMenuOpen, toggleSideMenu } =
    useSearchSideMenu();
  const { truncateFileName } = useTruncateString();
  const { navigateTo, navigateBack } = useNavigate();

  return (
    <>
      <ChattingDetailUI
        chatMsgList={chatMsgList}
        scrollRef={scrollRef}
        initialRender={initialRender}
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
        navigateTo={navigateTo}
        navigateBack={navigateBack}
      />
      <ChattingInputUI
        message={message}
        handleChange={handleChange}
        handleSend={handleSend}
        handleKeyPress={handleKeyPress}
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
        truncateFileName={truncateFileName}
      />
      <ChattingSideMenuUI
        isSideMenuOpen={isSideMenuOpen}
        toggleSideMenu={toggleSideMenu}
      />
    </>
  );
}
