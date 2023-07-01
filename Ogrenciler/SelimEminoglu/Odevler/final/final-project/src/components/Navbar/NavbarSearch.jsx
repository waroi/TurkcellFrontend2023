import { useState } from "react";
import { SearchDiv, SearchLogo, NavbarInput } from "./styleNavbar";
import Icon from "../../Icon/Icon";

function NavbarSearch() {
  const [NavInput, setNavInput] = useState("");

  const handleChange = (e) => {
    setNavInput(e.target.value);
  };

  return (
    <SearchDiv>
      <SearchLogo src={Icon.Search} alt="logo" />
      <NavbarInput
        type="text"
        value={NavInput}
        onChange={handleChange}
        placeholder="Aramak İçin Buraya Yaz!"
      />
    </SearchDiv>
  );
}

export default NavbarSearch;
