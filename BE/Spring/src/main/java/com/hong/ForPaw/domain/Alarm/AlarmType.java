package com.hong.ForPaw.domain.Alarm;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum AlarmType {
    comment("새 댓글"),
    notice("공지사항"),
    chatting("새 채팅"),
    answer("궁금해요 답변"),
    newMeeting("새로운 정기모임"),
    todayMeeting("오늘의 정기모임"),
    join("그룹 가입");

    private String value;
}
