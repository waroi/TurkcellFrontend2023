export const addLastSearch = (user) => {
  const last = getLastSearches();
  if (last.includes(user)) {
    return;
  }
  last.push(user);
  localStorage.setItem("last", JSON.stringify(last));
};

export const getLastSearches = () => {
  const last = localStorage.getItem("last");
  return last ? JSON.parse(last) : [];
};
