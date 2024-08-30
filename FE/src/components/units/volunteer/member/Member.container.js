import React, { useMemo, useCallback } from 'react';
import MemberUI from "./Member.presenter";
import VolunteerDetailHeader from "../volunteerDetailHeader/VolunteerDetailHeader.container";
import { useUserClick } from "./hooks/useUserClick";
import { useSearch } from '../hooks/useSearch';
import { useStatusChange } from "./hooks/useStatusChange";
import ConfirmationModal from "./modal/ConfirmationModal.presenter";

export default function Member({ isSSRLoggedIn, userRole, memberData }) {
  const {
    isClickedStatusChg,
    handleClickStatus,
    handleClickExpel,
    memberInfos,
    modalOpen,
    setModalOpen,
    selectedMember,
    confirmStatusChange,
    modalType,
  } = useStatusChange(memberData);

  const { clickedMemberIds, handleMemberClick } = useUserClick();
  const { search, handleSearch } = useSearch();

  const handleConfirmStatusChange = useCallback(async () => {
    if (selectedMember) {
      handleMemberClick(selectedMember.id);
    }
    await confirmStatusChange();
  }, [confirmStatusChange, selectedMember, handleMemberClick]);

  const filteredAndSortedMembers = useMemo(() => {
    const filteredMembers = memberInfos.members.filter(member => 
      member.nickName.toLowerCase().includes(search.toLowerCase())
    );

    return filteredMembers.sort((a, b) => {
      if (a.role === 'CREATOR') return -1;
      if (b.role === 'CREATOR') return 1;
      if (a.role === 'ADMIN' && b.role !== 'ADMIN') return -1;
      if (b.role === 'ADMIN' && a.role !== 'ADMIN') return 1;
      return new Date(a.joinDate) - new Date(b.joinDate);
    });
  }, [memberInfos.members, search]);

  const sortedMembersWithAdjustedPosition = useMemo(() => {
    let accumulatedOffset = 0;
    return filteredAndSortedMembers.map((member, index) => {
      const isActive = clickedMemberIds.includes(member.id) && member.role !== "CREATOR";
      const height = isActive ? 114 : 57;
      const adjustedPosition = accumulatedOffset;
      accumulatedOffset += height + 8; // gap이 8px 

      return {
        ...member,
        position: index,
        adjustedPosition,
        zIndex: filteredAndSortedMembers.length - index,
        isActive
      };
    });
  }, [filteredAndSortedMembers, clickedMemberIds]);
  
  return (
    <>
      <VolunteerDetailHeader isSSRLoggedIn={isSSRLoggedIn} userRole={userRole} />
      <MemberUI
        memberInfos={{...memberInfos, members: sortedMembersWithAdjustedPosition}}
        clickedMemberIds={clickedMemberIds}
        handleMemberClick={handleMemberClick}
        isClickedStatusChg={isClickedStatusChg}
        handleClickStatus={handleClickStatus}
        handleClickExpel={handleClickExpel}
        userRole={userRole}
        search={search}
        handleSearch={handleSearch}
      />
      <ConfirmationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmStatusChange}
        memberName={selectedMember?.nickName}
        currentRole={selectedMember?.currentRole}
        newRole={selectedMember?.newRole}
        modalType={modalType}
      />
    </>
  );
}