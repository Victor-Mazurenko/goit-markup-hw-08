(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const iconCloseRef = document.querySelector("#menu-container .mob-menu-icon");

  menuBtnRef.addEventListener("click", toggleMobMenu);
  iconCloseRef.addEventListener("click", toggleMobMenu);

  function toggleMobMenu() {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  }
})();
