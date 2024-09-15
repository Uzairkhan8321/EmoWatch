import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
// import searh from "../images/search1.svg";
import { UserAuth } from "../Context/Authcontext";
import SearchBox from "../Searched/SearchBox";
import logo from "../images/logo.png";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  const { user, logOut } = UserAuth();

  const [isopen, setIsOpen] = useState(false);
  const navToggle = () => {
    setIsOpen(!isopen);
  };
  return (
    // Wrap the entire navbar in a container div
    <div className="navbar__container">
      <nav>
        <div className="navbar">
          <div className="navbar__logo">
            {/* <p>
              Elixir<span>F</span>licks
            </p> */}
            <img src={logo} alt="" />
          </div>
          <div className="nav__right">
            <div className="nav__list">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="inhall">Movies</Link>
                </li>
                <li>
                  <Link to="/emotionelixir">Emotion Elixir</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  {user ? (
                    <Link to="/savedshows" className="btn btn--signup">
                      Saved Shows
                    </Link>
                  ) : (
                    <Link to="./signUp" className="btn btn--signup">
                      Login
                    </Link>
                  )}
                  {/* <Link to="/signUp">Sign Up</Link> */}
                </li>

                <li>
                  {user ? (
                    <Link className="btn btn--login" onClick={logOut}>
                      Log Out
                    </Link>
                  ) : (
                    <Link to={"/login"} className="btn btn--login">
                      Register
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <nav className="mobile_menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="inhall">Movies</Link>
              </li>
              <li>
                <Link to="/emotionelixir">Emotion Elixir</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                {user ? (
                  <Link to="/savedshows" className="btn btn--signup">
                    Saved Shows
                  </Link>
                ) : (
                  <Link to="./signUp" className="btn btn--signup">
                    Login
                  </Link>
                )}
                {/* <Link to="/signUp">Sign Up</Link> */}
              </li>

              <li>
                {user ? (
                  <Link className="btn btn--login" onClick={logOut}>
                    Log Out
                  </Link>
                ) : (
                  <Link to={"/login"} className="btn btn--login">
                    Register
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
        <SearchBox />
      </nav>
    </div>
  );
};

export default Navbar;
