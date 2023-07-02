import { CategoryCol, ProductMobileContainer, SelectOrderForDesktop } from "./productsPageStyle";
import ProductBanner from "../components/ListProducts/ProductBanner";
import ListProducts from "../components/ListProducts/ListProducts";
import { fetchAllProduct } from "../request/productRequest";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import filter from "../assets/filter.png"

const Products = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [unique, setUnique] = useState([]);

    const location = useLocation();
    const searchTerm = location.state && location.state.search;

    useEffect(() => {
        fetchAllProduct().then((data) => {
            setAllProducts(data);
            setUnique(data);
        });
    }, []);

    const uniqueCategories = [
        ...new Set(unique?.map((item) => item.category.toLowerCase())),
    ];

    const CategoryChange = (event) => {
        const categoryName = event.target.value;

        if (event.target.checked) {
            setSelectedCategories((prevCategories) => [
                ...prevCategories,
                categoryName,
            ]);
        } else {
            setSelectedCategories((prevCategories) =>
                prevCategories.filter((cat) => cat !== categoryName)
            );
        }
    };

    const filterProductsByCategory = (products) => {
        if (selectedCategories.length === 0) {
            return products;
        }
        return products.filter((product) =>
            selectedCategories.includes(product.category.toLowerCase())
        );
    };

    const filterProductsBySearch = (products) => {
        if (!searchTerm || searchTerm == "") {
            return products;
        }
        return products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const filteredProductsByCategory = filterProductsByCategory(allProducts);
    const filteredProducts = filterProductsBySearch(filteredProductsByCategory);



    const sortChange = (selectedValue) => {
        let sortedProducts = [...allProducts];

        switch (selectedValue) {
            case "priceDec":
                sortedProducts.sort((a, b) => Number(b.price) - Number(a.price));
                break;
            case "priceInc":
                sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));
                break;
            case "azSort":
                sortedProducts.sort((a, b) =>
                    a.title.toLowerCase().localeCompare(b.title.toLowerCase())
                );
                break;
            case "zaSort":
                sortedProducts.sort((a, b) =>
                    b.title.toLowerCase().localeCompare(a.title.toLowerCase())
                );
                break;
            case "azCat":
                sortedProducts.sort((a, b) =>
                    a.category.toLowerCase().localeCompare(b.category.toLowerCase())
                );
                break;
            case "zaCat":
                sortedProducts.sort((a, b) =>
                    b.category.toLowerCase().localeCompare(a.category.toLowerCase())
                );
                break;
            default:
                sortedProducts.sort((a, b) => Number(a.id) - Number(b.id));
                break;
        }

        setAllProducts(sortedProducts);
    };

    return (
        <div className="container">
            <ProductBanner />
            <div className="row">
                <CategoryCol className="col-lg-3">
                    <h5 className="text-start mt-4">Kategoriler</h5>
                    <ul className="list-group">
                        {uniqueCategories?.map((catName, i) => (
                            <div key={i}>
                                <li className="list-group ms-0 ps-0 mb-2">
                                    <div className="d-flex">
                                        <input
                                            type="checkbox"
                                            id={`${i}`}
                                            value={catName}
                                            onChange={CategoryChange}
                                            checked={selectedCategories?.includes(catName)}
                                        />
                                        <label className="ms-2" htmlFor={`${i}`}>
                                            {catName}
                                        </label>
                                    </div>
                                </li>
                            </div>
                        ))}
                    </ul>
                </CategoryCol>
                <div className="col-lg-9">
                    <div className="row mt-4">
                        <ProductMobileContainer className="row justify-content-between my-3 pb-3" >
                            <div className="col-6">
                                <select
                                    className="form-select rounded-4"
                                    aria-label="select"
                                    onChange={(e) => sortChange(e.target.value)}
                                >
                                    <option value="default">Varsayılan</option>
                                    <option value="priceDec">Azalan Fiyat</option>
                                    <option value="priceInc">Artan Fiyat</option>
                                    <option value="azSort">İsim(A-z)</option>
                                    <option value="zaSort">İsim(Z-a)</option>
                                    <option value="azCat">Kategori(A-z)</option>
                                    <option value="zaCat">Kategori(Z-a)</option>
                                </select>
                            </div>
                            <div className="col-6 text-end m-0 p-0">
                                <div className="dropdown ">
                                    <button className="btn dropdown-toggle text-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={filter} alt="" />
                                        Filter
                                    </button>
                                    <ul className="dropdown-menu  px-3">
                                        {uniqueCategories?.map((catName, i) => (
                                            <div key={i}>
                                                <li className="list-group ms-0 ps-0 mb-2">
                                                    <div className="d-flex">
                                                        <input
                                                            type="checkbox"
                                                            id={`${i}`}
                                                            value={catName}
                                                            onChange={CategoryChange}
                                                            checked={selectedCategories.includes(catName)}
                                                        />
                                                        <label className="ms-2" htmlFor={`${i}`}>
                                                            {catName}
                                                        </label>
                                                    </div>
                                                </li>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ProductMobileContainer>
                        <div className="d-flex justify-content-between mb-3">
                            <div className="d-flex align-items-baseline ">
                                <h4>Ürünler</h4>
                                <h6 className="ms-2">{allProducts?.length} Product</h6>
                            </div>
                            <SelectOrderForDesktop
                                className="form-select w-25"
                                aria-label="select"
                                onChange={(e) => sortChange(e.target.value)}
                            >
                                <option value="default">Varsayılan</option>
                                <option value="priceDec">Azalan Fiyat</option>
                                <option value="priceInc">Artan Fiyat</option>
                                <option value="azSort">İsim(A-z)</option>
                                <option value="zaSort">İsim(Z-a)</option>
                                <option value="azCat">Kategori(A-z)</option>
                                <option value="zaCat">Kategori(Z-a)</option>
                            </SelectOrderForDesktop>
                        </div>

                    </div>
                    <div className="row">
                        {filteredProducts.map((product) => (
                            <div className="col-6 col-lg-4" key={product.id}>
                                <ListProducts product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
