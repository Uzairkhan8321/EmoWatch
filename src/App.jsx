import "./index.css";
import Navbar from "./Navbar/Navbar";

// import Intheator from "./InTheater/Intheator";
// import Navbar from './Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import Home from "./Components/Home";
import TvShowDetails from "./TvShowDetails";
// import Account from "./Account/Account";
import EMOTION from "./Emotion Elixir/EMOTION";
import News from "./News/News";
import SignUp from "./authentication/SIgnup";
import Login from "./authentication/Login";

import { ToastContainer } from "react-toastify";
// import SavedShows from "./authentication/SavedShows";
import Searched from "./Searched/Searched";
import SavedMovies from "./authentication/SavedMovies";
import Account from "./authentication/Account";
import Footer from "./Footer/Footer";
const App = () => {
  return (
    <main>
        <div className="main__container ">
      {/* <AuthContextProvider> */}
          {/* {/* <div className="hero_container"> */}
          <Navbar />
          <ToastContainer
            className="toast-message"
            autoClose={500}
            newestOnTop={true}
            theme="dark"
          />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/tvshow/:id" element={<TvShowDetails />} />
          {/* <Route path="/account" element={<Account/>}/> */}
          <Route path="/emotionelixir" element={<EMOTION />} />
          <Route path="/news" element={<News />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/savedshows" element={<SavedShows />} /> */}
          <Route path="/savedshows" element={<Account />} />
          <Route path="/savedmovies" element={<SavedMovies />} />
          <Route path="/searched/:search" element={<Searched />} />
        </Routes>
        <Footer/>
      {/* </AuthContextProvider> */}
    </main>
  );
};

export default App;
