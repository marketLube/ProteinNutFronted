import { BiArrowBack, BiArrowToRight } from "react-icons/bi";
import "./shopbutton.css";

function ShopButton({ style }) {
  return (
    <div>
      <button className="shop-btn" style={style}>
        <span className="span-mother">
          <span>S</span>
          <span>h</span>
          <span>o</span>
          <span>p</span>
          <span className="hide">s</span>
          <span>N</span>
          <span>o</span>
          <span>w</span>
        </span>
        <span className="span-mother2">
          <span>S</span>
          <span>h</span>
          <span>o</span>
          <span>p</span>
          <span className="hide">s</span>
          <span>N</span>
          <span>o</span>
          <span>w</span>
        </span>
        <BiArrowToRight className="shop-now-arrow" />
      </button>
    </div>
  );
}

export default ShopButton;
