const topMenu = document.getElementById("ct-top-menu");
const toggleTopMenuIcon = document.getElementById("ct-toggle-top-menu-icon");

document.addEventListener("click", (event) => {
  if (toggleTopMenuIcon.contains(event.target)) {
    topMenu.classList.toggle("hidden");
    topMenu.classList.toggle("ct-top-menu-expanded");
  } else {
      if(topMenu.classList.contains("ct-top-menu-expanded")){
          topMenu.classList.remove("ct-top-menu-expanded")
          topMenu.classList.add("hidden")
      }
  }
});
