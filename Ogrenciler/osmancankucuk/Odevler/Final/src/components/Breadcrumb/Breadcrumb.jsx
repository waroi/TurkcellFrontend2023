/* eslint-disable react/prop-types */
const Breadcrumb = ({ links }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {links.map((link, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${
              index === links.length - 1 ? "active" : ""
            }`}
          >
            {index === links.length - 1 ? (
              link.text
            ) : (
              <a href={link.url}>{link.text}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
