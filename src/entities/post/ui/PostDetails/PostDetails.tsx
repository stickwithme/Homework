import type { FC } from "react";
import type { Post } from "../../model/types";
import type { Comment } from "../../../../widgets/CommentList/ui/CommentList";
import { CommentList } from "../../../../widgets/CommentList/ui/CommentList";

interface PostDetailsProps {
  post: Post;
  comments: Comment[];
}

export const PostDetails: FC<PostDetailsProps> = ({ post, comments }) => {
  return (
    <div>
      <h3 style={{ margin: 0 }}>{post.title}</h3>
      <p>{post.body}</p>
      <p style={{ fontSize: 12, opacity: 0.7 }}>Автор: {post.userId}</p>
      <hr />
      <CommentList comments={comments} />
    </div>
  );
};
