const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

tabs.addEventListener("click", (e) => {
  //   console.log(e.target.dataset.id);
  const id = e.target.dataset.id;

  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("live");
    });
    e.target.classList.add("live");

    articles.forEach((article) => {
      article.classList.remove("live");
    });
    const elements = document.getElementById(id);
    elements.classList.add("live");
  }
});
