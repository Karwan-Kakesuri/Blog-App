import { useParams } from "react-router-dom";

const PostPage = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);

  return (
    <article className="d-flex flex-column rounded-4 p-8 mb-32 mt-32">
      <div className="mb-4">
        <p className="f-color-mute f-size-body2">{post.title}</p>
      </div>
      <div className="mb-16">
        <p className="f-color-secondary f-size-body1">{post.body}</p>
      </div>
      <div className="d-flex gap-16 bt-1-d-vlg p-4">
        <p className="f-color-tertiary f-size-body3 post-cred">{`By: ${post.author}`}</p>
        <p className="f-color-tertiary f-size-body3 post-cred">{post.date}</p>
      </div>
    </article>
  );
};

export default PostPage;
