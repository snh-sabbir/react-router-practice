import { Link } from "react-router-dom";

const Photo = ({photo}) => {
    const {id, title, url, thumbnail} = photo;
    return (
        <div>
            <h4>Title: {title}</h4>
            <Link to={`/photos/${id}`}>Photo Details</Link>
        </div>
    );
};

export default Photo;