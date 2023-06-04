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

// navbar

const nav = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  let scrollY = 200;
  let windwoPosotion = window.pageYOffset;

  if (windwoPosotion >= scrollY) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
