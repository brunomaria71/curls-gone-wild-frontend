import "../styles/MenuBar.css";

const Menubar = () => {
  return (
    <nav className="menubar">
      <div className="curls-nav">
        <a href="/home">
          <h1>Curls Gone Wild</h1>
        </a>
      </div>
      <div className="nav-links">
        <>
          <a href="/home">Home</a>
          <a href="/reviews/add">Add Review</a>
          <a href="/reviews">See What Others Are Saying</a>
        </>
      </div>
    </nav>
  );
};

export default Menubar;
