import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-spinner"></div>
      <p className="loader-text">Loading your notes...</p>
    </div>
  );
}

export default Loader;
