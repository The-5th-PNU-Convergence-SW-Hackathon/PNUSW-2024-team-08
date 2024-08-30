import { useState, useCallback } from "react";
import { changeRole, requestExpel } from "../Member.queries";
import { useRouter } from "next/router";

const sortMembers = (members) => {
  return members.sort((a, b) => {
    if (a.role === 'CREATOR') return -1;
    if (b.role === 'CREATOR') return 1;
    if (a.role === 'ADMIN' && b.role === 'ADMIN') {
      return new Date(a.joinDate) - new Date(b.joinDate);
    }
    if (a.role === 'ADMIN') return -1;
    if (b.role === 'ADMIN') return 1;
    return new Date(a.joinDate) - new Date(b.joinDate);
  });
};

export const useStatusChange = (initialMemberData) => {
  const router = useRouter();
  const { id } = router.query;
  const [isClickedStatusChg, setIsClickedStatusChg] = useState(false);
  const [memberInfos, setMemberInfos] = useState({
    ...initialMemberData,
    members: sortMembers(initialMemberData.members.map(m => ({ ...m, animationState: 'stable' })))
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [modalType, setModalType] = useState("roleChange");

  const handleClickStatus = useCallback((userId, currentRole) => {
    const member = memberInfos.members.find(m => m.id === userId);
    const newRole = currentRole === "ADMIN" ? "USER" : "ADMIN";
    setSelectedMember({ ...member, currentRole, newRole });
    setModalType("roleChange");
    setModalOpen(true);
  }, [memberInfos.members]);

  const handleClickExpel = useCallback((userId) => {
    const member = memberInfos.members.find(m => m.id === userId);
    setSelectedMember(member);
    setModalType("expel");
    setModalOpen(true);
  }, [memberInfos.members]);

  const updateMemberPositions = useCallback((members) => {
    let accumulatedOffset = 0;
    return members.map(member => {
      const height = 57; 
      const newPosition = accumulatedOffset;
      accumulatedOffset += height + 8; 

      return {
        ...member,
        adjustedPosition: newPosition,
      };
    });
  }, []);

  const confirmStatusChange = useCallback(async () => {
    if (!selectedMember) return;

    setIsClickedStatusChg(true);
    setModalOpen(false);

    try {
      if (modalType === "roleChange") {
        await changeRole(id, selectedMember.id, selectedMember.newRole);

        setMemberInfos(prev => ({
          ...prev,
          members: prev.members.map(m =>
            m.id === selectedMember.id ? { ...m, animationState: 'exiting' } : m
          )
        }));

        setTimeout(() => {
          setMemberInfos(prev => {
            const updatedMembers = prev.members.map(m =>
              m.id === selectedMember.id
                ? { ...m, role: selectedMember.newRole, animationState: 'entering' }
                : m
            );
            const sortedMembers = sortMembers(updatedMembers);
            const positionedMembers = updateMemberPositions(sortedMembers);

            return {
              ...prev,
              members: positionedMembers
            };
          });

          setTimeout(() => {
            setMemberInfos(prevState => ({
              ...prevState,
              members: prevState.members.map(m => ({ ...m, animationState: 'stable' }))
            }));
          }, 300);
        }, 300);

        console.log(`사용자 ${selectedMember.id}의 역할이 ${selectedMember.currentRole}에서 ${selectedMember.newRole}로 변경되었습니다`);
      } else if (modalType === "expel") {
        await requestExpel(id, selectedMember.id);
        setMemberInfos(prevMemberInfos => {
          const updatedMembers = prevMemberInfos.members.filter(member => member.id !== selectedMember.id);
          const sortedMembers = sortMembers(updatedMembers);
          const positionedMembers = updateMemberPositions(sortedMembers);
          return {
            ...prevMemberInfos,
            members: positionedMembers,
            participantCnt: prevMemberInfos.participantCnt - 1
          };
        });
        console.log(`사용자 ${selectedMember.id}가 추방되었습니다`);
      }
    } catch (error) {
      console.error("작업 실패", error);
    } finally {
      setIsClickedStatusChg(false);
      setSelectedMember(null);
    }
  }, [id, modalType, selectedMember, updateMemberPositions]);

  return {
    isClickedStatusChg,
    handleClickStatus,
    handleClickExpel,
    memberInfos,
    setMemberInfos,
    modalOpen,
    setModalOpen,
    selectedMember,
    confirmStatusChange,
    modalType
  };
};