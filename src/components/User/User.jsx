import { Link } from "react-router-dom";
import "./User.css";

const User = ({ user }) => {
  const { name, id } = user;
  return (
    <div>
        <h4>Name: {name}</h4>
        <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
