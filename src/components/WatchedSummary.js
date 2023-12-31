import { average } from "./App";

export function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.Runtime));

  return <div className="summary">
    <div>
      <span>movies: {watched.length}</span>
      <p>
        <span>IMDb:</span>
        <span>{avgImdbRating.toFixed(1).replace(".0", "")}</span>
      </p>
      <p>
        <span>User:</span>
        <span>{avgUserRating.toFixed(1).replace(".0", "")}</span>
      </p>
      <span>{avgRuntime} min</span>
    </div>
  </div>;
}
