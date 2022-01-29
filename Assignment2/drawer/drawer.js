const links = document.querySelectorAll(".links");
links.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const curLink = document.querySelectorAll(".active");
    curLink[0].classList.remove("active");
    item.classList.add("active");
    //   console.log("hello");
  });
});
