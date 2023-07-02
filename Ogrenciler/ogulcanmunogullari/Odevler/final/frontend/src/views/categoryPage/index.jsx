import { useEffect, useState } from "react"
import FetchTool from "../../utils/fetchTool"
import { Breadcrumb, CallToAction, CallToActionBox, CallToActionSection, CallToActionSection2, CategoryContainer, CategoryItem, CategoryItemDiv, FilterContainer, Flex, MainDiv, PageContainer, PriceItem, PriceItemDiv, RatingItem, RatingItemDiv, SearchDiv, Sorting, SortingContainer } from "./style"
import BasicCard from "../../components/Elements/card/BasicCard"
import Filter from "../../assets/filter.png"
import breadcrumb_icon from "../../assets/breadcrumb_icon.png"
import CategoryBanner from "../../assets/category_banner.png"
import TransparentButton from "../../components/Elements/buttons/TransparentButton"
import BasicButton from "../../components/Elements/buttons/BasicButton"
import { Link } from "react-router-dom"


const CategoryPage = () => {
  const [products, setProducts] = useState([])
  const [mobileFilter, setMobileFilter] = useState(false)
  const [filter, setFilter] = useState({
    category: [],
    price: {
      min: undefined,
      max: undefined
    },
    rating: "",
    sorting: "featured",
    search: ""
  })

  useEffect(() => {
    if (products.length > 0) return;
    FetchTool.getProducts().then(res => {
      setProducts(res)

      if (filter.price.min != undefined && filter.price.max != undefined) return;

      setFilter({
        ...filter,
        price: {
          max: res.reduce((acc, cur) => {
            return acc > cur.price ? acc : cur.price
          }, 0),
          min: res.reduce((acc, cur) => {
            return acc < cur.price ? acc : cur.price
          }, 0)
        }
      })
    })
  }, [filter, products.length])
  return (
    <PageContainer>
      <Breadcrumb>
        <Link to={"/"}>
          Home
        </Link>
        <img src={breadcrumb_icon} alt="breadcrumb icon" />
        <p>
          Categories
        </p>
      </Breadcrumb>
      <CallToAction>
        <Flex direction={"row-reverse"} mdirection={"column"}>
          <CallToActionSection>
            <CallToActionBox></CallToActionBox>
            <Flex direction={"column"} mdirection={"column"} className="ctaTexts">
              <h2>One More Friend</h2>
              <h3>Thousands More Fun!</h3>
              <p>
                Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
              </p>

              <Flex margin={"1em 0"} justify={"space-around"} align={"center"} gap={"5px"}>
                <div className="ctaButton">
                  <TransparentButton bcolor={"#FDFDFD"} hover={"#cacaca"}>
                    View Intro
                  </TransparentButton>
                </div>
                <div>
                  <BasicButton
                    text={"#00171F"}
                    mtext={"#fff"}
                    color={"#FDFDFD"}
                    mcolor={"#003459"}
                    mhover={"#0078CD"}
                    hover={"#cacaca"}
                    width={"107px"}>
                    Explore Now
                  </BasicButton>
                </div>
              </Flex>

            </Flex>
          </CallToActionSection>
          <CallToActionSection2>
            <img src={CategoryBanner} alt="" />
          </CallToActionSection2>
        </Flex>
      </CallToAction>
      <SortingContainer>
        <h3 onClick={() => setMobileFilter(!mobileFilter)}>
          <span className="mobileIcon">
            <img src={Filter} alt="filter img" />
          </span>
          Filter
        </h3>

        <Sorting>
          <select name="sorting" value={
            filter.sorting
          }
            onChange={
              e => {
                setFilter({
                  ...filter,
                  sorting: e.target.value
                })
              }
            }>
            <option name="sorting" value="featured"  >Sort by: Popular</option>
            <option name="sorting" value="a-z">Sort by: A-Z</option>
            <option name="sorting" value="z-a">Sort by: Z-A</option>
            <option name="sorting" value="low">Sort by: Low to High</option>
            <option name="sorting" value="high">Sort by: High to Low</option>
          </select>
        </Sorting>

      </SortingContainer>
      <MainDiv>
        <FilterContainer display={String(mobileFilter)}>
          <CategoryItemDiv>
            <h3>
              Category
            </h3>
            <CategoryItem>
              <input id="mc" type="checkbox" value={"men's clothing"}
                onChange={
                  e => {
                    if (e.target.checked) {
                      setFilter({
                        ...filter,
                        category: [...filter.category, e.target.value]
                      })
                    } else {
                      setFilter({
                        ...filter,
                        category: filter.category.filter(item => item !== e.target.value)
                      })
                    }
                  }
                }
              />
              <label htmlFor="mc">
                men&lsquo;s clothing
              </label>
            </CategoryItem>
            <CategoryItem>
              <input id="jewelery" type="checkbox" value={"jewelery"} onChange={
                e => {
                  if (e.target.checked) {
                    setFilter({
                      ...filter,
                      category: [...filter.category, e.target.value]
                    })
                  } else {
                    setFilter({
                      ...filter,
                      category: filter.category.filter(item => item !== e.target.value)
                    })
                  }
                }
              } />
              <label htmlFor="jewelery">
                jewelery
              </label>
            </CategoryItem>
            <CategoryItem>
              <input id="electronics" type="checkbox" value={"electronics"} onChange={
                e => {
                  if (e.target.checked) {
                    setFilter({
                      ...filter,
                      category: [...filter.category, e.target.value]
                    })
                  } else {
                    setFilter({
                      ...filter,
                      category: filter.category.filter(item => item !== e.target.value)
                    })
                  }
                }
              } />
              <label htmlFor="electronics">
                electronics
              </label>
            </CategoryItem>
            <CategoryItem>
              <input id="wc" type="checkbox" value={"women's clothing"} onChange={
                e => {
                  if (e.target.checked) {
                    setFilter({
                      ...filter,
                      category: [...filter.category, e.target.value]
                    })
                  } else {
                    setFilter({
                      ...filter,
                      category: filter.category.filter(item => item !== e.target.value)
                    })
                  }
                }
              } />
              <label htmlFor="wc">
                women&lsquo;s clothing
              </label>
            </CategoryItem>
          </CategoryItemDiv>
          <SearchDiv>
            <h3>
              Search
            </h3>
            <input placeholder="Search" type="search" value={filter.search} onChange={
              e => {
                setFilter({
                  ...filter,
                  search: e.target.value
                })
              }
            } />
          </SearchDiv>
          <PriceItemDiv>
            <h3>
              Price
            </h3>
            <PriceItem>
              <div>
                <input type="number" placeholder="Min" value={
                  filter.price.min ?? ""
                }
                  onChange={
                    e => {
                      setFilter({
                        ...filter,
                        price: {
                          ...filter.price,
                          min: e.target.value
                        }
                      })
                    }
                  }
                />
              </div>
              <div>
                <input type="number" placeholder="Max"
                  value={
                    filter.price.max ?? ""
                  }
                  onChange={
                    e => {
                      setFilter({
                        ...filter,
                        price: {
                          ...filter.price,
                          max: e.target.value
                        }
                      })
                    }
                  }
                />
              </div>
            </PriceItem>

          </PriceItemDiv>
          <RatingItemDiv>
            <h3>
              Rating
            </h3>
            <RatingItem>
              <label htmlFor="4">
                4+
              </label>
              <input name="rating" id="4" type="radio" value={4} onChange={
                e => {
                  if (e.target.checked) {
                    setFilter({
                      ...filter,
                      rating: e.target.value
                    })
                  } else {
                    setFilter({
                      ...filter,
                      rating: ""
                    })
                  }
                }} />
            </RatingItem>
            <RatingItem>
              <label htmlFor="3">
                3+
              </label>
              <input name="rating" id="3" type="radio" value={3} onChange={
                e => {
                  if (e.target.checked) {
                    setFilter({
                      ...filter,
                      rating: e.target.value
                    })
                  } else {
                    setFilter({
                      ...filter,
                      rating: ""
                    })
                  }
                }} />
            </RatingItem>
            <RatingItem>
              <label htmlFor="2">
                2+
              </label>
              <input name="rating" id="2" type="radio" value={2} onChange={
                e => {
                  if (e.target.checked) {
                    setFilter({
                      ...filter,
                      rating: e.target.value
                    })
                  } else {
                    setFilter({
                      ...filter,
                      rating: ""
                    })
                  }
                }} />
            </RatingItem>
            <RatingItem>
              <label htmlFor="1">
                1+
              </label>
              <input name="rating" id="1" type="radio" value={1} onChange={
                e => {
                  if (e.target.checked) {
                    setFilter({
                      ...filter,
                      rating: e.target.value
                    })
                  } else {
                    setFilter({
                      ...filter,
                      rating: ""
                    })
                  }
                }} />
            </RatingItem>
          </RatingItemDiv>
        </FilterContainer>
        <CategoryContainer>
          {products.length > 0 && products.filter(
            product => {
              if (filter.category.length == 0) {
                return true
              } else {
                return filter.category.includes(product.category)
              }
            }
          ).filter(
            product => {
              if (filter.price.min == 0 && filter.price.max == (undefined || "")) {
                return true
              } else {
                return (
                  product.price >=
                  filter.price.min
                  &&
                  product.price <= filter.price.max)
              }
            }
          ).filter(
            product => {
              if (filter.rating == "") {
                return true
              } else {
                return product.rating.rate >= filter.rating
              }
            }
          ).filter(
            product => {
              if (filter.search == "") {
                return true
              } else {
                return product.title.toLowerCase().includes(filter.search.toLowerCase())
              }
            }
          ).sort(
            (a, b) => {
              if (filter.sorting == "low") {
                return a.price - b.price
              } else if (filter.sorting == "high") {
                return b.price - a.price
              } else if (filter.sorting == "a-z") {
                return a.title.localeCompare(b.title)
              } else if (filter.sorting == "z-a") {
                return b.title.localeCompare(a.title)
              } else {
                return true
              }
            }
          ).map(product => {
            return (
              <BasicCard key={product.id} product={product} />
            )
          })}
        </CategoryContainer>
      </MainDiv>
    </PageContainer>
  )
}

export default CategoryPage