package com.hong.ForPaw.domain.Post;

import com.hong.ForPaw.domain.Group.Group;
import com.hong.ForPaw.domain.TimeStamp;
import com.hong.ForPaw.domain.User.User;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.BatchSize;
import org.hibernate.annotations.SQLDelete;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "post_tb")
@SQLDelete(sql = "UPDATE post_tb SET removed_at = NOW() WHERE id=?")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Post extends TimeStamp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id")
    private Group group;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post parent;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
    @BatchSize(size = 10)
    private List<PostImage> postImages = new ArrayList<>();

    @OneToMany(mappedBy = "parent", cascade = CascadeType.ALL, orphanRemoval = true)
    @BatchSize(size = 10)
    private List<Post> children = new ArrayList<>();

    @Column
    @Enumerated(EnumType.STRING)
    private PostType postType;

    @Column
    private String title;

    @Column
    private String content;

    @Column
    private Long likeNum = 0L;

    @Column(name = "removed_at")
    private LocalDateTime removedAt;

    @Builder
    public Post(User user, Group group, PostType postType, String title, String content) {
        this.user = user;
        this.group = group;
        this.postType = postType;
        this.title = title;
        this.content = content;
    }

    public void updatePost(String title, String content){
        this.title = title;
        this.content = content;
    }

    // 연관관계 메서드
    public void addImage(PostImage postImage){
        postImages.add(postImage);
        postImage.updatePost(this);
    }

    public void addChildPost(Post child){
        this.children.add(child);
        child.updateParent(this);
    }

    public void updateParent(Post parent){
        this.parent =parent;
    }
}