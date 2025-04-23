import { useParams } from "react-router-dom";

const PostPage = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);

  return (
    <article>
      <p>{post.title}</p>
    </article>
  );
};

export default PostPage;
