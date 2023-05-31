import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://w7.pngwing.com/pngs/80/950/png-transparent-computer-icons-foodie-blog-categories-miscellaneous-food-logo.png"
                height="100"
                loading="lazy"
              />
            </a>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Menu
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Foods
                </a>
              </li>
            </ul>
          </div>

          <div class="d-flex align-items-center">
            <a class="text-reset me-3" href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>

            <div class="dropdown">
              <a
                class="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-bell"></i>
                <span class="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://w7.pngwing.com/pngs/80/950/png-transparent-computer-icons-foodie-blog-categories-miscellaneous-food-logo.png"
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
