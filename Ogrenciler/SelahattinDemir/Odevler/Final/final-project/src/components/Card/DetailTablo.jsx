import Proptypes from "prop-types";
import { TableTd } from "./CardStyle";

function DetailTablo({ data }) {
  return (
    <table className="mt-3">
      <tbody>
        <tr>
          <TableTd className="pb-1">Quantity:</TableTd>
          <TableTd className="pb-1 ps-3">{data?.rating?.count}</TableTd>
        </tr>
        <tr>
          <TableTd className="pb-1">Name:</TableTd>
          <TableTd className="pb-1 ps-3">{data.title}</TableTd>
        </tr>
        <tr>
          <TableTd className="pb-1">Price:</TableTd>
          <TableTd className="pb-1 ps-3">{data.price}</TableTd>
        </tr>
        <tr>
          <TableTd className="pb-1">Category:</TableTd>
          <TableTd className="pb-1 ps-3">{data.category}</TableTd>
        </tr>
        <tr>
          <TableTd className="pb-1">Description:</TableTd>
          <TableTd className="pb-1 ps-3">{data.description}</TableTd>
        </tr>
        <tr>
          <TableTd>Rating:</TableTd>
          <TableTd className="ps-3">
            <ul className="d-inline-flex gap-2 p-0 m-0">
              {data.rating &&
                Array.from({ length: data.rating.rate }).map((_, index) => (
                  <li key={`star-${index}`}>
                    <i className="bi bi-star-fill text-warning"></i>
                  </li>
                ))}
              {data.rating &&
                Array.from({ length: 6 - data.rating.rate }).map((_, index) => (
                  <li key={`empty-star-${index}`}>
                    <i className="bi bi-star"></i>
                  </li>
                ))}
            </ul>
          </TableTd>
        </tr>
      </tbody>
    </table>
  );
}

DetailTablo.propTypes = {
  data: Proptypes.object.isRequired,
};

export default DetailTablo;
