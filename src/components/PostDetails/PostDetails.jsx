import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {title, body} = post;
    return (
        <div>
            <h4>Post Name: {title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;