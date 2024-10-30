import { useLoaderData } from "react-router-dom";

const PhotoDetails = () => {
    const photo = useLoaderData();
    const {title, url} = photo;
    return (
        <div>
            <h4>{title}</h4>
            <img src={url} alt="" />
        </div>
    );
};

export default PhotoDetails;