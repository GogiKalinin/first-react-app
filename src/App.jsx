import "./App.sass";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import BookScreen from "./Components/BookScreen/BookScreen";
import FeedbackScreen from "./Components/FeedbackScreen/FeedbackScreen";
import Footer from "./Components/Footer/Footer";
import book_1 from "./assets/images/backgrounds/book_1.png";
import book_2 from "./assets/images/backgrounds/book_2.png";

const App = () => {
  const firstBookScreen = {
    image: book_1,
    position: "start",
    button_text: "Book Now",
    country: "Spain",
    title: "Grand Spain Madrid",
    text: "But I must explain to you how all this mistaken gfdsfsdfdsfsdf idea of account to denouncing pleasure and praising pain was account  born and I account will give you a complete account of the system",
  };

  const secondBookScreen = {
    image: book_2,
    position: "end",
    button_text: "Book Now",
    country: "Spain",
    title: "Grand Spain Madrid",
    text: "But I must explain to you how all this mistaken idea of account to denouncing pleasure and praising pain was account  born and I account will give you a complete account of the system",
  };

  return (
    <div className="App">
      <Main />
      <About />
      <BookScreen data={firstBookScreen} />
      <BookScreen data={secondBookScreen} />
      <FeedbackScreen />
      <Footer />
    </div>
  );
};

export default App;
