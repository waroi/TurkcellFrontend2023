const cursor = document.querySelector(".cursor");
let timeout;

// cursor animation
document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;
  // console.log(x, y);

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  cursor.style.display = "block";
  // console.log(cursor.style.left, cursor.style.top);

  // stop cursor animation
  clearTimeout(timeout);
  timeout = setTimeout(() => (cursor.style.display = "none"), 2000);
  console.log(timeout);
});

// stop cursor animation off the screen
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});
