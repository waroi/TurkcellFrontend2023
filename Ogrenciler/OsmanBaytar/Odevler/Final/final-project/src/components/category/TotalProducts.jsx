import { useState, useEffect } from "react";
import { productRequest } from "../../utils/Request";
import ProductBox from "./ProductBox";
import { TotalProductsButton } from "../../styles/TotalProducts";

const TotalProducts = (props) => {
  const [productsData, setProductsData] = useState([]);
  const [isButton, setIsButton] = useState(false);
  const [buttonNumber, setButtonNumber] = useState(1);
  const [fakeAllData, setFakeAllData] = useState([]);
  const [fakeMensClothingData, setFakeMensClothingData] = useState([]);
  const [fakeJeweleryData, setFakeJeweleryData] = useState([]);
  const [fakeElectronicsData, setFakeElectronicsData] = useState([]);
  const [fakeWomensClothingData, setFakeWomensClothingData] = useState([]);
  const [fakeMinPriceData, setFakeMinPriceData] = useState([]);
  const [fakeMaxPriceData, setFakeMaxPriceData] = useState([]);
  const [fakeMinRateData, setFakeMinRateData] = useState([]);
  const [fakeMaxRateData, setFakeMaxRateData] = useState([]);
  const [fakeCombinedData, setFakeCombinedData] = useState([]);
  const [fakeIntersectedData, setFakeIntersectedData] = useState([]);
  const [fakeSortedData, setFakeSortedData] = useState([]);
  const [fakeProductsData, setFakeProductsData] = useState([]);
  const [sortedCount, setSortedCount] = useState(0);

  console.count("counter");

  useEffect(() => {
    productRequest.get().then((data) => {
      setProductsData(data);
    });
  }, []);

  useEffect(() => {
    productRequest.get().then((data) => {
      // setProductsData(data);
      setFakeAllData(data);
      setFakeProductsData(data);
      setFakeCombinedData(data);
      setFakeMinPriceData(data);
      setFakeMaxPriceData(data);
      setFakeMinRateData(data);
      setFakeMaxRateData(data);
      setFakeIntersectedData(data);
    });
  }, []);

  useEffect(() => {
    if (props.mensClothing == true) {
      setFakeMensClothingData(
        fakeAllData.filter(function (item) {
          return item.category == "men's clothing";
        })
      );
    } else if (props.mensClothing == false || props.mensClothing == undefined) {
      setFakeMensClothingData([]);
    }
    if (props.jewelery == true) {
      setFakeJeweleryData(
        fakeAllData.filter(function (item) {
          return item.category == "jewelery";
        })
      );
    } else if (props.jewelery == false || props.jewelery == undefined) {
      setFakeJeweleryData([]);
    }
    if (props.electronics == true) {
      setFakeElectronicsData(
        fakeAllData.filter(function (item) {
          return item.category == "electronics";
        })
      );
    } else if (props.electronics == false || props.electronics == undefined) {
      setFakeElectronicsData([]);
    }
    if (props.womensClothing == true) {
      setFakeWomensClothingData(
        fakeAllData.filter(function (item) {
          return item.category == "women's clothing";
        })
      );
    } else if (
      props.womensClothing == false ||
      props.womensClothing == undefined
    ) {
      setFakeWomensClothingData([]);
    }
    if (props.minPrice != 0) {
      setFakeMinPriceData(
        fakeAllData.filter(function (item) {
          return item.price >= props.minPrice;
        })
      );
    } else if (props.minPrice == 0) {
      setFakeMinPriceData(fakeAllData);
    }
    if (props.maxPrice != 999.99) {
      setFakeMaxPriceData(
        fakeAllData.filter(function (item) {
          return item.price <= props.maxPrice;
        })
      );
    } else if (props.maxPrice == 999.99) {
      setFakeMaxPriceData(fakeAllData);
    }
    if (Number(props.minRate)) {
      if (props.minRate != 0) {
        setFakeMinRateData(
          fakeAllData.filter(function (item) {
            return Number(item.rate) >= Number(props.minRate);
          })
        );
      }
    } else if (props.minRate == 0 || props.minRate == "") {
      setFakeMinRateData(fakeAllData);
    }
    if (Number(props.maxRate)) {
      if (props.maxRate != 5) {
        setFakeMaxRateData(
          fakeAllData.filter(function (item) {
            return Number(item.rate) <= Number(props.maxRate);
          })
        );
      }
    } else if (props.maxRate == 5 || props.maxRate == "") {
      setFakeMaxRateData(fakeAllData);
    }
  }, [
    props.mensClothing,
    props.jewelery,
    props.electronics,
    props.womensClothing,
    props.minPrice,
    props.maxPrice,
    props.minRate,
    props.maxRate,
  ]);

  // useEffect(() => {
  //   if (props.jewelery == true) {
  //     setFakeJeweleryData(
  //       fakeAllData.filter(function (item) {
  //         return item.category == "jewelery";
  //       })
  //     );
  //   } else if (props.jewelery == false || props.jewelery == undefined) {
  //     setFakeJeweleryData([]);
  //   }
  // }, [props.jewelery]);

  // useEffect(() => {
  //   if (props.electronics == true) {
  //     setFakeElectronicsData(
  //       fakeAllData.filter(function (item) {
  //         return item.category == "electronics";
  //       })
  //     );
  //   } else if (props.electronics == false || props.electronics == undefined) {
  //     setFakeElectronicsData([]);
  //   }
  // }, [props.electronics]);

  // useEffect(() => {
  //   if (props.womensClothing == true) {
  //     setFakeWomensClothingData(
  //       fakeAllData.filter(function (item) {
  //         return item.category == "women's clothing";
  //       })
  //     );
  //   } else if (
  //     props.womensClothing == false ||
  //     props.womensClothing == undefined
  //   ) {
  //     setFakeWomensClothingData([]);
  //   }
  // }, [props.womensClothing]);

  // useEffect(() => {
  //   if (props.minPrice != 0) {
  //     setFakeMinPriceData(
  //       fakeAllData.filter(function (item) {
  //         return item.price >= props.minPrice;
  //       })
  //     );
  //   } else if (props.minPrice == 0) {
  //     setFakeMinPriceData(fakeAllData);
  //   }
  // }, [props.minPrice]);

  // useEffect(() => {
  //   if (props.maxPrice != 999.99) {
  //     setFakeMaxPriceData(
  //       fakeAllData.filter(function (item) {
  //         return item.price <= props.maxPrice;
  //       })
  //     );
  //   } else if (props.maxPrice == 999.99) {
  //     setFakeMaxPriceData(fakeAllData);
  //   }
  // }, [props.maxPrice]);

  // useEffect(() => {
  //   if (Number(props.minRate)) {
  //     if (props.minRate != 0) {
  //       setFakeMinRateData(
  //         fakeAllData.filter(function (item) {
  //           return Number(item.rate) >= Number(props.minRate);
  //         })
  //       );
  //     }
  //   } else if (props.minRate == 0 || props.minRate == "") {
  //     setFakeMinRateData(fakeAllData);
  //   }
  // }, [props.minRate]);

  // useEffect(() => {
  //   if (Number(props.maxRate)) {
  //     if (props.maxRate != 5) {
  //       setFakeMaxRateData(
  //         fakeAllData.filter(function (item) {
  //           return Number(item.rate) <= Number(props.maxRate);
  //         })
  //       );
  //     }
  //   } else if (props.maxRate == 5 || props.maxRate == "") {
  //     setFakeMaxRateData(fakeAllData);
  //   }
  // }, [props.maxRate]);

  useEffect(() => {
    if (
      (props.mensClothing == false || props.mensClothing == undefined) &&
      (props.jewelery == false || props.jewelery == undefined) &&
      (props.electronics == false || props.electronics == undefined) &&
      (props.womensClothing == false || props.womensClothing == undefined)
    ) {
      setFakeCombinedData(fakeAllData);
    } else
      setFakeCombinedData([
        ...fakeMensClothingData,
        ...fakeJeweleryData,
        ...fakeElectronicsData,
        ...fakeWomensClothingData,
      ]);
  }, [
    fakeMensClothingData,
    fakeJeweleryData,
    fakeElectronicsData,
    fakeWomensClothingData,
  ]);

  useEffect(() => {
    if (
      (props.minPrice == 0 || props.minPrice == "") &&
      (props.maxPrice == 999.99 || props.maxPrice == "") &&
      (props.minRate == 0 ||
        props.minRate == "" ||
        props.maxRate == 5 ||
        props.maxRate == "")
    ) {
      setFakeIntersectedData(fakeCombinedData);
    } else {
      setFakeIntersectedData(
        fakeCombinedData
          .filter((item) => fakeMinPriceData.includes(item))
          .filter((item) => fakeMaxPriceData.includes(item))
          .filter((item) => fakeMinRateData.includes(item))
          .filter((item) => fakeMaxRateData.includes(item))
      );
    }
  }, [
    fakeCombinedData,
    fakeMinPriceData,
    fakeMaxPriceData,
    fakeMinRateData,
    fakeMaxRateData,
  ]);

  useEffect(() => {
    if (props.sortValue == "default") {
      setFakeSortedData(fakeIntersectedData);
    } else if (props.sortValue == "title-a-z") {
      setFakeSortedData(
        fakeIntersectedData.sort((a, b) => a.title.localeCompare(b.title))
      );
    } else if (props.sortValue == "title-z-a") {
      setFakeSortedData(
        fakeIntersectedData.sort((a, b) => b.title.localeCompare(a.title))
      );
    } else if (props.sortValue == "price-low-high") {
      setFakeSortedData(fakeIntersectedData.sort((a, b) => a.price - b.price));
    } else if (props.sortValue == "price-high-low") {
      setFakeSortedData(fakeIntersectedData.sort((a, b) => b.price - a.price));
    } else if (props.sortValue == "rating-high-low") {
      setFakeSortedData(fakeIntersectedData.sort((a, b) => b.rate - a.rate));
    } else if (props.sortValue == "rating-low-high") {
      setFakeSortedData(fakeIntersectedData.sort((a, b) => a.rate - b.rate));
    }
    setSortedCount(sortedCount + 1);
  }, [props.sortValue, fakeIntersectedData]);

  useEffect(() => {
    if (fakeSortedData.length > 15) {
      setIsButton(true);
      setButtonNumber(2);
      setFakeProductsData(fakeSortedData.slice(0, 15));
    } else {
      setIsButton(false);
      setButtonNumber(1);
      setFakeProductsData(fakeSortedData);
    }
  }, [fakeSortedData]);

  // console.log(props.sortValue);
  // console.log(fakeMensClothingData);
  // console.log(props.minPrice);
  // console.log(fakeCombinedData);
  // console.log(fakeMinPriceData);
  // console.log(fakeMinRateData);
  // console.log(fakeMaxRateData);
  console.log(productsData);
  console.log(fakeAllData);
  console.log(fakeIntersectedData);
  console.log(fakeSortedData);
  console.log(props.sortValue);
  // console.log(fakeSortedData.slice(0, 15));
  // console.log(fakeProductsData);

  function handleClickButton(e) {
    if (e.target.textContent == "1") {
      setFakeProductsData(fakeSortedData.slice(0, 15));
    } else if (e.target.textContent == "2") {
      setFakeProductsData(fakeSortedData.slice(15, fakeSortedData.length));
    }
  }

  return (
    <>
      {sortedCount > 0 &&
        fakeSortedData.map((product, index) => {
          return <ProductBox product={product} key={index} />;
        })}
      <div className="text-center mt-5">
        {isButton && (
          <div>
            {[...Array(buttonNumber)].map((item, index) => {
              return (
                <TotalProductsButton onClick={handleClickButton} key={index}>
                  {index + 1}
                </TotalProductsButton>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default TotalProducts;
