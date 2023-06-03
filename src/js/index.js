const navList = document.querySelectorAll(".list");

function listActive() {
  navList.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}
navList.forEach((item) => {
  item.addEventListener("click", listActive);
});
