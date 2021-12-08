import Navbar from "../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        width="100%"
        src="https://wallpapercave.com/wp/wp6434337.jpg"
        alt=""
      />
    </div>
  );
};

export default Home;
