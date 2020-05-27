(function () {
  if (document.readyState === "loading") {
    return function (f) {
      document.addEventListener("DOMContentLoaded", f);
    };
  }

  return function (f) {
    f();
  };
})()(function () {
  document.documentElement.className = "";

  var burger = document.getElementById("burger");
  var navbar = document.getElementById("navbar");

  if (burger !== null && navbar !== null) {
    burger.addEventListener("click", function () {
      if (navbar.className === "navbar-menu") {
        navbar.className = "navbar-menu is-active";
      } else {
        navbar.className = "navbar-menu";
      }
    });
  }
});
