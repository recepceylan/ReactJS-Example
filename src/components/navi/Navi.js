import { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from "reactstrap";

const Navi = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <Navbar color="light" expand="md" light className="navContainer">
        <Link to="/" className="n-link">
          Characters
        </Link>
        <NavbarToggler className="me-2" onClick={toggleClass} />
        <Collapse navbar className={isActive ? "show" : ""}>
          <Nav className="menuBar" navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/add-character" className="nav-link">
                New Character
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
