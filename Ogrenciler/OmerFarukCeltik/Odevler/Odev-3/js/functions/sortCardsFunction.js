
function sortCardsDateAndAlphabetic(sortValue,res) {
  if (sortValue == "a/z") {
   return res.sort((a, b) => {
      let itemA = a.contentTitle.toLowerCase();
      let itemB = b.contentTitle.toLowerCase();
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
      let itemA = a.contentTitle.toLowerCase();
      let itemB = b.contentTitle.toLowerCase();
      if (itemA < itemB) {
        return 1;
      }
      if (itemA > itemB) {
        return -1;
      }
      return 0
    })
  }
  if (sortValue == "date") {
    return res.sort((a, b) => a.publicationDate - b.publicationDate);
  }
}
export default sortCardsDateAndAlphabetic;