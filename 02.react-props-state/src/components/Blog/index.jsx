import PropTypes from "prop-types";

const Blog = ({ blogInfo }) => {
  console.log(blogInfo);

  return (
    <div>
      <h3>{blogInfo.title}</h3>
      <p>{blogInfo.description}</p>
      <p>Author: {blogInfo.author}</p>
    </div>
  );
};

// Blog.propTypes = {
//   blogInfo: PropTypes.object,
// };
Blog.propTypes = {
  blogInfo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
  }),
};
export default Blog;
