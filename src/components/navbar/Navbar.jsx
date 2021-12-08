import "./navbar.scss";
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search />
          <span>KID</span>
          <Notifications />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </div>
        <ArrowDropDown />
      </div>
    </div>
  );
};

export default Navbar;
