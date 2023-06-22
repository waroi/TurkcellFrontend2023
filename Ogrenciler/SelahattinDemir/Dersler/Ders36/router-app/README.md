[Turn Back](../../../)

<h1 align="center">Ders36 - React Router</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="react" width="33" height="35"/> </a> </p>

# React Introduction

## React Router

&#10145; Create React App doesn't include page routing.

&#10145; React Router is the most popular solution.

### Add React Router

&#10145; To add React Router, run the following command:

    npm install react-router-dom

### Folder Structure

&#10145; To create an application with multiple page routes, let's first start with the file structure.

&#10145; Within the src folder, we'll create a folder named pages with several files:

&#10145; ``src\pages\:``

- Layout.js
- Home.js
- Blogs.js
- Contact.js
- NoPage.js

&#10145; Each file will contain a very basic React component.

### Basic Usage

&#10145; Now we will use our Router in our index.js file.

#### Example

    Use React Router to route to pages based on URL:
    index.js:

      import ReactDOM from "react-dom/client";
      import { BrowserRouter, Routes, Route } from "react-router-dom";
      import Layout from "./pages/Layout";
      import Home from "./pages/Home";
      import Blogs from "./pages/Blogs";
      import Contact from "./pages/Contact";
      import NoPage from "./pages/NoPage";

      export default function App() {
        return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        );
      }

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);

### Example Explained

&#10146; We wrap our content first with ``<BrowserRouter>``.

&#10146; Then we define our ``<Routes>``. An application can have multiple ``<Routes>``. Our basic example only uses one.

&#10146; ``<Route>``s can be nested. The first ``<Route>`` has a path of / and renders the ``Layout`` component.

&#10146; The nested ``<Route>``s inherit and add to the parent route. So the ``blogs`` path is combined with the parent and becomes ``/blogs``.

&#10146; The ``Home`` component route does not have a path but has an `` index`` attribute. That specifies this route as the default route for the parent route, which is ``/``.

&#10146; Setting the ``path`` to ``*`` will act as a catch-all for any undefined URLs. This is great for a 404 error page.

### Pages / Components

&#10147; The ``Layout`` component has ``<Outlet>`` and ``<Link>`` elements.

&#10147; The ``<Outlet>`` renders the current route selected.

&#10147; ``<Link>`` is used to set the URL and keep track of browsing history.

&#10147; Anytime we link to an internal path, we will use ``<Link>`` instead of ``<a href=""``>.

&#10147; The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.

#### Example

    Layout.js:

      import { Outlet, Link } from "react-router-dom";

      const Layout = () => {
        return (
          <>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>

            <Outlet />
          </>
        )
      };

      export default Layout;

      Home.js:

      const Home = () => {
        return (
          <h1>Home</h1>
        )
      };

      export default Home;

      Blogs.js:

      const Blogs = () => {
        return (
          <h1>Blogs</h1>
        )
      };

      export default Blogs;

      Contact.js:

      const Contact = () => {
        return (
          <h1>Contact</h1>
        )
      };

      export default Contact;

      NoPage.js:

      const NoPage = () => {
        return (
          <h1>404 - Page Not Found</h1>
        )
      };

      export default NoPage;


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders36/router-app/src/assets/media.gif)
