package com.hong.ForPaw.domain.Post;

import com.hong.ForPaw.domain.TimeStamp;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor(access =  AccessLevel.PROTECTED)
@Getter
public class PostImage extends TimeStamp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    @Column
    private String imageURL;

    @Builder
    public PostImage(Post post, String imageURL) {
        this.post = post;
        this.imageURL = imageURL;
    }
}