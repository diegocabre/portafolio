document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");

  logo.addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(
      logo.parentElement.getAttribute("href")
    );

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});
