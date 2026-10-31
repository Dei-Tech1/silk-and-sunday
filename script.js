
/* =========================================
   SILK & SUNDAY INTIMATES
   WEBSITE INTERACTIONS
   DEVELOPED BY GODZYA GROUP
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =====================================
     01 — MOBILE NAVIGATION
  ===================================== */

  const menuToggle =
    document.querySelector(".menu-toggle");

  const mainNav =
    document.querySelector(".main-nav");

  if (menuToggle && mainNav) {

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.addEventListener("click", () => {

      const isOpen =
        mainNav.classList.toggle("is-open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    });

    /* CLOSE MENU WHEN A LINK IS CLICKED */

    mainNav.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        mainNav.classList.remove("is-open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

    /* CLOSE MENU WHEN CLICKING OUTSIDE */

    document.addEventListener("click", event => {

      if (
        !mainNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {

        mainNav.classList.remove("is-open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    });

    /* CLOSE MENU WITH ESCAPE KEY */

    document.addEventListener("keydown", event => {

      if (event.key === "Escape") {

        mainNav.classList.remove("is-open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.focus();

      }

    });

  }

  /* =====================================
     02 — AUTOMATIC COPYRIGHT YEAR
  ===================================== */

  const yearElement =
    document.getElementById("currentYear");

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }

});

/* =========================================
   END OF JAVASCRIPT BLOCK 1
========================================= */
