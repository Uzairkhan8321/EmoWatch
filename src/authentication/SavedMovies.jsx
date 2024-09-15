import { useEffect, useState } from "react";
import { db } from "../Context/firbase";
import { onSnapshot, doc } from "firebase/firestore";
import { UserAuth } from "../Context/Authcontext";
import { Link } from "react-router-dom";

const SavedMovies = () => {
  const { user } = UserAuth();
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      const data = doc.data();
      setSavedMovies(data.savedMovies || []);
    });
  }, [user?.email]);

//   const handleDelete = async (movieId) => {
//     try {
//       const userDocRef = doc(db, "users", `${user?.email}`);
//       await updateDoc(userDocRef, {
//         savedMovies: arrayRemove(movieId),
//       });
//     } catch (error) {
//       console.error("Error deleting movie:", error);
//     }
//   };

  return (
    <section className="savedShows-container">
      <div className="savedShows">
        <h2>Your Saved Movies</h2>
        {savedMovies.length === 0 ? (
          <p>No saved Movies</p>
        ) : (
          <div className="showsList">
            <div className="showCard">
              {savedMovies?.map((movie) => {
                return (
                  <div key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                      <img
                        src={movie.img}
                        alt={movie.title}
                        className="image"
                      />
                      <h3>{movie.title}</h3>
                    </Link>
                    {/* <button onClick={() => handleDelete(movie.id)}>
                      Delete
                    </button> */}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedMovies;
