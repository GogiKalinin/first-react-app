import "./FeedbackScreen.sass";
import FeedbackBlock from "../FeedbackBlock/FeedbackBlock";

const FeedbackScreen = () => {
  return (
    <div id="feedback" className="FeedbackScreen">
      <div className="feedback_title">What Our Tourist Say</div>
      <FeedbackBlock />
      <div />
    </div>
  );
};

export default FeedbackScreen;
