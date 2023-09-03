import React from "react";
import { useMovieContext } from "./context/GlobalState";
import * as actions from "./context/ActionTypes";
export const MovieControls = ({ movie, type }) => {
  const { MoviesDispatch } = useMovieContext();
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() =>
              MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
          >
            <i className="fa-solid fa-eye"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() =>
              MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                payload: movie.imdbID,
              })
            }
          >
            <i className="fa-fw fa fa-times" />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() =>
              MoviesDispatch({
                type: actions.MOVE_TO_WATCHLIST,
                payload: movie,
              })
            }
          >
            <i className="fa-solid fa-eye-slash"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() =>
              MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHED,
                payload: movie.imdbID,
              })
            }
          >
            <i className="fa-fw fa fa-times" />
          </button>
        </>
      )}
    </div>
  );
};
