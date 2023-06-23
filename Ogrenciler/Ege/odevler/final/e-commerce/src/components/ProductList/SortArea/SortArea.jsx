const SortArea = () => {
    return (
        <select name="sortSelect" id="sortSelect">
            <option value="priceDesc">price desc</option>
            <option value="priceAsc">price asc</option>
            <option value="nameAz">name a-z</option>
            <option value="nameZa">name z-a</option>
            <option value="categoryAz">category a-z</option>
            <option value="categoryZa">category z-a</option>
        </select>
    )
}

export default SortArea