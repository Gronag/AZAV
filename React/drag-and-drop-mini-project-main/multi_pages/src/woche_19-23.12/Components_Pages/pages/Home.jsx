import { useContext } from "react";
import { AppContext } from "../App"

export const Home = () => {
  const { username } = useContext(AppContext)
  return <h1> THIS IS THE HOME PAGE and user ist: {username}</h1>;
};
