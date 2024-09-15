import  { useState, useEffect } from "react";
import { db } from "../Context/firbase";
import { onSnapshot, doc } from "firebase/firestore";
import { UserAuth } from "../Context/Authcontext";
import { Link } from "react-router-dom";
import "./SavedShows.css";
import SavedMovies from "./SavedMovies";

const SavedShows = () => {
  const { user } = UserAuth();
  const [savedShows, setSavedShows] = useState([]);


  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setSavedShows(doc.data()?.savedShows);
      // console.log(savedShows)
    });
  }, [user?.email]);

  return (
    <section className="savedShows-container">
      <div className="savedShows">
        <h2>Your Saved Shows</h2>
        {savedShows?.length === 0 ? (
          <p>No saved shows</p>
        ) : (
          <div className="showsList">
            <div className="showCard">
        
            {
                savedShows.map((show)=>{
                  return(
                   <div key={show.id}>
                     <Link to={`/tvshow/${show.id}`}>
                      <img src={show.img} alt={show.title} className="image" />
                      <h3>{show.title}</h3>
                    </Link>
                   </div>
                  )
                })
              }
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedShows;
