
function sortCardsDateAndAlphabetic(sortValue,res) {
  if (sortValue == "a/z") {
   return res.sort((a, b) => {
      let itemA = a.brand.toLowerCase();
      let itemB = b.brand.toLowerCase();
      if (itemA > itemB) {
        return 1;
      }
      if (itemA < itemB) {
        return -1;
      }
      return 0
    })
   
  }
  if (sortValue == "z/a") {
  return  res.sort((a, b) => {
      let itemA = a.brand.toLowerCase();
      let itemB = b.brand.toLowerCase();
      if (itemA < itemB) {
        return 1;
      }
      if (itemA > itemB) {
        return -1;
      }
      return 0
    })
  }
  if (sortValue == "newDate") {
    return res.sort((a, b) => a.id - b.id);
  }
  if (sortValue == "oldDate") {
    return res.sort((a, b) => b.id - a.id);
  }
}
export default sortCardsDateAndAlphabetic;