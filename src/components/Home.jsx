import { Link } from "react-router-dom";

const Home = ({ posts }) => {
  return (
    <main className="d-flex flex-column gap-4 p-12">
      {posts.map((post) => {
        return (
          <Link to={`/PostPage/${post.id}`}>
            <article className="d-flex flex-column b-1-vlg rounded-4 p-8 shadow">
              <div className="mb-4">
                <p className="f-color-mute f-size-body2">
                  {post.title.length < 30
                    ? post.title
                    : `${post.title.slice(0, 30)}...`}
                </p>
              </div>
              <div className="mb-16">
                <p className="f-color-secondary f-size-body1">
                  {post.body.length < 200
                    ? post.body
                    : `${post.body.slice(0, 200)}...`}
                </p>
              </div>
              <div className="d-flex gap-16 bt-1-d-vlg p-4">
                <p className="f-color-tertiary f-size-body3 post-cred">{`By: ${post.author}`}</p>
                <p className="f-color-tertiary f-size-body3 post-cred">
                  {post.date}
                </p>
              </div>
            </article>
          </Link>
        );
      })}
    </main>
  );
};

export default Home;
