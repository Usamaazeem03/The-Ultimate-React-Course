import { Link } from "react-router-dom";
import SearchOrder from "../feactures/menu/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Usama</p>
    </header>
  );
}

export default Header;
