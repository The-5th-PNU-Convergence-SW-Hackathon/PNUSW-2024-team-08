package com.hong.ForPaw.repository.Post;

import com.hong.ForPaw.domain.Post.Post;
import com.hong.ForPaw.domain.Post.PostImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostImageRepository extends JpaRepository<PostImage, Long> {

    void deleteByPostId(Long postId);

    void deleteByPostIdAndIdNotIn(Long postId, List<Long> retainedImageIds);
}