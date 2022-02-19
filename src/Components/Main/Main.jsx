import "./Main.sass";
import down_arrow from "../../assets/svg/down_arrow.svg";
import Search from "../Search/Search";
import NavBar from "../NavBar/NavBar";

const Main = () => {
  return (
    <div id="top" className="Main">
      <div className="title_block">
        <div className="title_main">Bhromaon</div>
        <div className="subtitle">Safe Travel Anywhere</div>
      </div>
      <div className="search_block">
        <Search />
      </div>
      <div className="scroll_block">
        <a href="#about" className="scroll_container">
          <div className="scroll_text">Scroll Down</div>
          <div className="scroll_arrow">
            <img src={down_arrow} alt="down" />
          </div>
        </a>
      </div>
      <NavBar />
    </div>
  );
};

export default Main;
