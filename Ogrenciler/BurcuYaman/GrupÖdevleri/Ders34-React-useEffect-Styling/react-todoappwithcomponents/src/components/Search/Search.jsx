const Search = () => {

  const changeSearchInputValue = (e) => {
    const listItems = document.querySelectorAll(".singleItem");
    let searchWord = e.target.value.toUpperCase();
    listItems.forEach(function (listItem) {
      const text = listItem.textContent.toUpperCase();
      if (text.indexOf(searchWord) <= -1) {
        listItem.style.display = 'none'
      }
      else {
        listItem.style.display = 'flex'
      }
    })
  }
  return (
    <div>
      <input type="text" style={{
        width: '70%',
        padding: '10px',
        border: '1px solid #DDDDDD',
        borderRadius: '12px',
        marginBottom: '10px',
        outline: 'none'
      }} placeholder="Aramak istediğiniz task adını giriniz..." onChange={changeSearchInputValue}/>

    </div>
  )
}

export default Search
