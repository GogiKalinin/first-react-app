import "./AboutPicturesBlock.sass";

const AboutPicturesBlock = () => {
  return (
    <div className="AboutPicturesBlock">
      <img
        className="about_picture_container picture_right"
        src={require("../../assets/images/places/place_1.png")}
      />
      <img
        className="about_picture_container picture_left"
        src={require("../../assets/images/places/place_2.png")}
      />
    </div>
  );
};

export default AboutPicturesBlock;
