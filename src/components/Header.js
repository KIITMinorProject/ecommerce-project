import React from "react";
import "./Header.css";
import { auth } from "./firebase";
import { animateScroll as scroll } from "react-scroll";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9TmKlhZntCvsBkFcXdueBUOQ1ZgYIJkcYD0grh_2hXjRPnCtXSoeswZSsE5FJxlVtmyfQWqkDoK8tqkhU4FguIrKSO0_WJem0xYV_XsxW8_LoYqloiRDdxAFA3JZs_IVQ4PjuivZSngE4bLs-w9y9rmfs5q3vV28i-KcDHpLwXJ3fT5YcZ5KKgeZn/s1620/logo.png" alt="logo" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="Search Words&Pages" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to="/bookshelf">
          <div className="header__option">
            <span className="header__optionLineOne">Book</span>
            <span className="header__optionLineTwo">Shelf</span>
          </div>
        </Link>

        <Link to="/checkout">

          <div className="header__optionBasket">

            <ShoppingCartRoundedIcon />
            <div className="header__option">
              <span className="header__optionLineOne">Cart</span>
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;