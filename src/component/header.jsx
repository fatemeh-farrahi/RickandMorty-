import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="d-flex w-100 justify-content-center ">
      <div className="d-flex w-50 bg-third p-3 justify-content-between">
        <Link className="nav" to="home">
          <li class="nav-item">Home</li>
        </Link>
        <Link className="nav" to="location">
          <li class="nav-item">Location</li>
        </Link>
        <Link className="nav" to="about">
          <li class="nav-item">About</li>
        </Link>
        <Link className="nav" to="count">
          <li class="nav-item">Count</li>
        </Link>
        <Link className="nav" to="counter">
          <li class="nav-item">Counter</li>
        </Link>
      </div>
    </div>
  );
}

export default Header;
