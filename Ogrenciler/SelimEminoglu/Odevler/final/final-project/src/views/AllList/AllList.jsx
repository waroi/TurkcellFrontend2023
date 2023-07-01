import Icon from "../../Icon/Icon";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../redux/slices/productList";
import { Container } from "../../assets/css/style";
import { Link } from "react-router-dom";
import {
  FilterDiv,
  ListDiv,
  Flex,
  FilterHeadline,
  FilterValueDiv,
  FilterHeadlineValue,
  FilterValues,
  Checkbox,
  LabelText,
  SortDiv,
  ListSortDiv,
  DropDownDivAllList,
  DropDownSelect,
  DropDownOption,
} from "./styleAllList";
import {
  CardDiv,
  CardİmgDiv,
  CardTextDiv,
  CardTitle,
  CardCategory,
  CardPrice,
  CardButtonDiv,
} from "../../components/CardList/styleCardList";
import Button from "../../components/Button/Button";

function AllList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  const [isCheckedWC, setCheckedWC] = useState(false);
  const [isCheckedMC, setCheckedMC] = useState(false);
  const [isCheckedJew, setCheckedJew] = useState(false);
  const [isCheckedElec, setCheckedElec] = useState(false);
  const [chooseValue, setChooseValue] = useState("");
  const [filterArr, setFilterArr] = useState([]);

  useEffect(() => {
    dispatch(fetchProduct());
    setFilterArr(products);
  }, [dispatch]);

  useEffect(() => {
    handleFilter();
  }, [isCheckedWC, isCheckedMC, isCheckedJew, isCheckedElec]);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleCheckboxChangeWC = () => {
    setCheckedWC(!isCheckedWC);
  };

  const handleCheckboxChangeMC = () => {
    setCheckedMC(!isCheckedMC);
  };

  const handleCheckboxChangeJew = () => {
    setCheckedJew(!isCheckedJew);
  };

  const handleCheckboxChangeElec = () => {
    setCheckedElec(!isCheckedElec);
  };

  const handleFilter = () => {
    if (!isCheckedWC && !isCheckedMC && !isCheckedJew && !isCheckedElec) {
      setFilterArr(products);
    }
    if (isCheckedWC) {
      setFilterArr(
        [...products].filter((item) => item.category == "women's clothing")
      );
    }

    if (isCheckedMC) {
      setFilterArr(
        [...products].filter((item) => item.category == "men's clothing")
      );
    }

    if (isCheckedJew) {
      setFilterArr([...products].filter((item) => item.category == "jewelery"));
    }

    if (isCheckedElec) {
      setFilterArr(
        [...products].filter((item) => item.category == "electronics")
      );
    }
  };

  const handleChangeSelect = (e) => {
    const selectValue = e.target.value;
    setChooseValue(selectValue);

    if (selectValue === "artan") {
      setFilterArr([...products].sort((a, b) => a.price - b.price));
    } else if (selectValue === "azalan") {
      setFilterArr([...products].sort((a, b) => b.price - a.price));
    } else {
      setFilterArr(products);
    }
  };

  return (
    <Container>
      <Flex>
        <FilterDiv>
          <FilterHeadline>Filter</FilterHeadline>
          <FilterValueDiv>
            <FilterHeadlineValue>Category</FilterHeadlineValue>
            <FilterValues>
              <LabelText>
                <Checkbox
                  type="checkbox"
                  checked={isCheckedWC}
                  onChange={() => setCheckedWC(!isCheckedWC)}
                  value="women's clothing"
                />
                Women's clothing
              </LabelText>
              <LabelText>
                <Checkbox
                  type="checkbox"
                  checked={isCheckedElec}
                  onChange={() => setCheckedElec(!isCheckedElec)}
                  value="electronics"
                />
                Electronics
              </LabelText>
              <LabelText>
                <Checkbox
                  type="checkbox"
                  checked={isCheckedJew}
                  onChange={() => setCheckedJew(!isCheckedJew)}
                  value="jewelery"
                />
                Jewelery
              </LabelText>
              <LabelText>
                <Checkbox
                  type="checkbox"
                  checked={isCheckedMC}
                  onChange={() => setCheckedMC(!isCheckedMC)}
                  value="men's clothing"
                />
                Men's clothing
              </LabelText>
            </FilterValues>
          </FilterValueDiv>
        </FilterDiv>
        <ListSortDiv>
          <SortDiv>
            Sıralama:
            <DropDownSelect value={chooseValue} onChange={handleChangeSelect}>
              <DropDownOption value="">Belirtilmemiş</DropDownOption>
              <DropDownOption value="artan">Fiyat(Artan)</DropDownOption>
              <DropDownOption value="azalan">Fiyat(Azalan)</DropDownOption>
            </DropDownSelect>
          </SortDiv>
          <ListDiv>
            {filterArr.map((item) => {
              return (
                <Link
                  to={`/products/${item.id}`}
                  key={self.crypto.randomUUID()}
                >
                  <CardDiv>
                    <CardİmgDiv image={item.image}></CardİmgDiv>

                    <CardTextDiv>
                      <CardTitle>{item.title}</CardTitle>
                      <CardCategory>
                        Category:{item.category}-Adet:{item.rating.count}
                      </CardCategory>
                      <CardPrice>{item.price} $</CardPrice>
                    </CardTextDiv>
                    <CardButtonDiv>
                      <Button title="Sepete Ekle" />
                    </CardButtonDiv>
                  </CardDiv>
                </Link>
              );
            })}
          </ListDiv>
        </ListSortDiv>
      </Flex>
    </Container>
  );
}

export default AllList;
