import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://drive.google.com/uc?export=download&id=1hHAjQR-Vz4-rzU8_14AxXMT8BNJkfTR2";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://lepasjenuh.com/wp-content/uploads/2021/01/horimiya-anime-1252274.jpeg"
        alt=""
      />

      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop type="video/mp4"></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>2019</span>
            </div>
            <div className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </div>
            <div className="genre">Romace</div>
          </div>
        </>
      )}
    </div>
  );
}
