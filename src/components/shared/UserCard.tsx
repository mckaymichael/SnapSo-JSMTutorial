import { Models } from "appwrite";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";

type UserCardProps = {
  user: Models.Document;
};

const UserCard = ({ user }: UserCardProps) => {

  return (
        <Link to={`/profile/${user.$id}`} className="user-card">
          <img
            src={ user.imageUrl || "/assets/icons/profile-placeholder.svg"}
            alt="profile image"
            className="rounded-full w-14 h-14"
          />
          <h2 className="base-medium text-light-1 text-center line-clamp-1">{user.name}</h2>
          <p className="small-regular text-light-3 text-center line-clamp-1">
            @{user.username}
          </p>
          <Button className="shad-button_primary px-5">
            Follow
          </Button>
        </Link>
  );
};

export default UserCard;
