import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post;

    return (
        <div>
            <h4>Title: {title}</h4>
            <Link to={`/posts/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;