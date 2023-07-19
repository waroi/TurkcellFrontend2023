const apiUrl = "https://api.github.com/users/";

export const fetchData = async (user) => {
  const response = await fetch(apiUrl + user, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "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",
    },
  });
  const responseData = await response.json();
  return responseData;
};

export const fetchRepos = async (user) => {
  const response = await fetch(apiUrl + user + "/repos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "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",
    },
  });
  const responseData = await response.json();
  return responseData;
};
