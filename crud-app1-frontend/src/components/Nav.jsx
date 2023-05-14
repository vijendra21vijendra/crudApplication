import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <nav className="navbar bg-primary  navbar-expand-lg bg-body-tertiary" >
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/showEmployee">Show Employees</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/addEmployee">Add Employee</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        This is our website to show all the employees.
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Nav;