// Simple blog search filter
document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");
  const blogList = document.getElementById("blogList");
  const blogs = blogList.getElementsByTagName("li");

  searchBar.addEventListener("keyup", function () {
    const filter = searchBar.value.toLowerCase();
    for (let i = 0; i < blogs.length; i++) {
      const text = blogs[i].innerText.toLowerCase();
      blogs[i].style.display = text.includes(filter) ? "" : "none";
    }
  });
});
