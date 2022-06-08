import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
} from "./Navbar.styles";
import Logo from "../assets/logo.png";

function Navbar() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <img src={Logo} alt="" srcset="" />
            </NavLogo>
            <MenuIcon onClick={handleClick}>
              {click ? <BiX /> : <BiMenu />}
            </MenuIcon>

            <Menu onClick={handleClick} click={click}>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/">
                  Home
                </MenuLink>
              </MenuItem>
              {!isLoggedIn && (
                <>
                  <MenuItem>
                    <MenuLink onClick={closeMenu} to="/login">
                      Login
                    </MenuLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuLink onClick={closeMenu} to={`/signup/`}>
                      Signup
                    </MenuLink>
                  </MenuItem>
                </>
              )}
              {isLoggedIn && (
                <>
                  <MenuItem>
                    <MenuLink onClick={closeMenu} to={`/userprofile/`}>
                      Profile
                    </MenuLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuLink onClick={closeMenu} to={`/createquiz/`}>
                      Start a Quizzz
                    </MenuLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuLink onClick={closeMenu} to={`/createquestion/`}>
                      Create Question
                    </MenuLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuLink onClick={logoutUser} to={`/`}>
                      Logout
                    </MenuLink>
                  </MenuItem>
                </>
              )}
              {/*               <MenuItemBtn>
                {button ? (
                  <MenuLinkBtn to="/order-now">
                    <Button primary>Order Now</Button>
                  </MenuLinkBtn>
                ) : (
                  <MenuLinkBtn to="/order-now">
                    <Button primary bigFont onClick={closeMenu}>
                      Order Now
                    </Button>
                  </MenuLinkBtn>
                )}
              </MenuItemBtn> */}
            </Menu>

            {/* <ul>
              <li>
                <Link to="/">
                  <button>Home</button>
                </Link>
              </li>

              {isLoggedIn && (
                <>
                  <li>
                    <Link to={`/userprofile/`}>
                      <button>User Profile</button>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/createquiz/`}>
                      <button>Create a Quizzz</button>
                    </Link>
                  </li>
                  <li>
                    <button onClick={logoutUser}>Logout</button>
                  </li>
                </>
              )}

              {!isLoggedIn && (
                <>
                  <li>
                    <Link to="/signup">
                      <button>Signup</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <button className="btn">Login</button>
                    </Link>
                  </li>
                </>
              )}
            </ul> */}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
