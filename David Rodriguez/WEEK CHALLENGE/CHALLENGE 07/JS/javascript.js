function toggleMenu() {
  var sidebar = document.getElementById('sidebar');
  var menuToggle = document.querySelector('.menu-toggle');
  if (sidebar.style.left === "-300px") {
    sidebar.style.left = "0";
    menuToggle.style.left = "310px"; 
  } else {
    sidebar.style.left = "-300px";
    menuToggle.style.left = "10px"; 
  }
}