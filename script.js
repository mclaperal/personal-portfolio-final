/* =============================================================
   Small enhancements. The site works without this file;
   it only adds the mobile menu, scroll animations and polish.
   ============================================================= */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  /* ---- Current year in the footer ---- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---- Mobile menu toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      menu.classList.toggle("is-open", !open);
    });

    // Close after choosing a link
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });

    // Close with the Escape key and return focus to the button
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
      }
    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });
  }

  /* ---- Header border once the page is scrolled ---- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
    // Back in the hero: no section link should look active
    if (window.scrollY < 200) {
      document.querySelectorAll(".nav-menu a.is-active").forEach(function (a) {
        a.classList.remove("is-active");
        a.removeAttribute("aria-current");
      });
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Move keyboard focus to the section after an in-page link ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function () {
      var id = link.getAttribute("href").slice(1);
      var target = id && document.getElementById(id);
      if (!target || id === "top") return;
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });

  /* ---- Scroll reveal animations ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Highlight the nav link for the section on screen ---- */
  var navLinks = document.querySelectorAll(".nav-menu a");
  if ("IntersectionObserver" in window && navLinks.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          var active = a.getAttribute("href") === "#" + entry.target.id;
          a.classList.toggle("is-active", active);
          if (active) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) {
      sectionObserver.observe(s);
    });
  }
})();

/* ---- Pop-up video player for "Watch" links ----
   Without JavaScript (or on very old browsers) the links simply
   open the video file directly, which also works. */
(function () {
  "use strict";
  var dialog = document.getElementById("video-dialog");
  if (!dialog || typeof dialog.showModal !== "function") return;
  var video = dialog.querySelector("video");
  var title = document.getElementById("video-dialog-title");
  var closeBtn = dialog.querySelector(".video-close");
  var opener = null;

  document.querySelectorAll(".video-link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      opener = link;
      title.textContent = link.querySelector(".video-title").textContent;
      video.poster = link.getAttribute("data-poster") || "";
      video.src = link.getAttribute("href");
      dialog.showModal();
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
    });
  });

  function close() { dialog.close(); }
  closeBtn.addEventListener("click", close);
  // Click on the dark backdrop closes the player
  dialog.addEventListener("click", function (e) { if (e.target === dialog) close(); });
  dialog.addEventListener("close", function () {
    video.pause();
    video.removeAttribute("src");
    video.load();
    if (opener) opener.focus();
  });
})();
