import { Link } from "react-router-dom"; // import link component

export const Navbar = () => {
  return (
    <div className="Navbar">
      {/* using Link to adress the different pages like defined before in <Routes> */}
      <Link to="/"> Home </Link>
      <Link to="/menu"> Menu </Link>
      <Link to="/contact"> Contact </Link>
      <Link to="/profile"> Profile </Link>
      <Link to="/about"> About </Link>
    </div>
  );
};
