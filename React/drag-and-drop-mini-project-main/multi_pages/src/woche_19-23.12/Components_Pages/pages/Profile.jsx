import { ChangeProfile } from "../Components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
    const { username } = useContext(AppContext);

    return (
      <div>
        <h1> THIS IS THE Profile PAGE</h1>
        PROFILE, user is: {username} 
        <ChangeProfile />
      </div>
    );
  };