import Link from "next/link";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
    return (
        <div><nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Fullstack Java Training</a>
          <Link className="btn" href="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="btn btn-outline-light" href="/users/adduser">Add User</Link>
        </div>
      </nav></div>
    )
}