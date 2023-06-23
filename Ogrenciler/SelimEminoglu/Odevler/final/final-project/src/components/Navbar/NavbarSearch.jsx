import { useState } from "react";
import { SearchDiv, SearchLogo, NavbarInput } from "./styleNavbar";

function NavbarSearch() {
  const [NavInput, setNavInput] = useState("");

  const handleChange = (e) => {
    setNavInput(e.target.value);
  };

  return (
    <SearchDiv>
      <SearchLogo src=".\src\assets\icons\u_search.svg" alt="logo" />
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
