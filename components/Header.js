import {
    HeaderContainer,
    HeaderLogo,
    HeaderAddressOption,
    HeaderOptionLine1,
    HeaderOptionLine2,
    HeaderSearchBar,
    HeaderNavItems,
    NavOption,
    HeaderCartItems,
    SearchInput,
    CartItems,
    HeaderAddress,
    SearchIconWrapper,
  } from "./Header.styles";
  import ImageLogo from "../../src/assets/2.png";
  import SearchIcon from "@material-ui/icons/Search";
  import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
  import LocationOnIcon from "@material-ui/icons/LocationOn";
  import { Link } from "react-router-dom";
  
  const Header = ({ cartItems }) => {
    let totalQuantity = cartItems.reduce(
      (acc, ele) => acc + ele.data.quantity,
      0
    );
  
    return (
      <HeaderContainer>
        <Link to="/">
          <HeaderLogo>
            <img src={ImageLogo} />
          </HeaderLogo>
        </Link>
  
        <HeaderAddressOption>
          <LocationOnIcon></LocationOnIcon>
          <HeaderAddress>
            <HeaderOptionLine1>Hello</HeaderOptionLine1>
            <HeaderOptionLine2>Select Your Adderess</HeaderOptionLine2>
          </HeaderAddress>
        </HeaderAddressOption>
  
        <HeaderSearchBar>
          <SearchInput type="text" />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </HeaderSearchBar>
  
        <HeaderNavItems>
          <NavOption>
            <HeaderOptionLine1>Hello, Sign in</HeaderOptionLine1>
            <HeaderOptionLine2>Account</HeaderOptionLine2>
          </NavOption>
          <NavOption>
            <HeaderOptionLine1>Returns</HeaderOptionLine1>
            <HeaderOptionLine2>& Orders</HeaderOptionLine2>
          </NavOption>
          <HeaderCartItems>
            <Link to="/cart">
              <ShoppingCartIcon />
              <CartItems>{totalQuantity}</CartItems>
            </Link>
          </HeaderCartItems>
        </HeaderNavItems>
      </HeaderContainer>
    );
  };
  
  export default Header;