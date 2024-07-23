package com.hong.ForPaw.domain.Post;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum PostType {
    notice("공지사항"),
    adoption("입양 스토리"),
    protection("임시 보호 스토리"),
    question("궁금해요");

    private String value;
}