import ChartCreator from "../ChartCreator/ChartCreator";

/* eslint-disable react/prop-types */
const CurrencyChart = ({ currency }) => {
  return (
    <div className="mt-5">
      {currency && (
        <>
          <ul className="d-flex list-unstyled gap-4">
            <li>Overview</li>
            <li>Markets</li>
            <li>Historical Data</li>
            <li>News</li>
            <li>Price Estimates</li>
            <li>More Info</li>
          </ul>
          <ChartCreator currencyName={currency.name} />
        </>
      )}
    </div>
  );
};

export default CurrencyChart;
