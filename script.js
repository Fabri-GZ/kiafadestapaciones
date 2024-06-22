

  document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navbarNavDropdown = document.querySelector(".navbar-nav");
    const navLinks = document.querySelectorAll(".drop-link");

    function toggleHamburger() {
      hamburger.classList.toggle("is-active");
      navbarNavDropdown.classList.toggle("show");
      document.body.classList.toggle("no-scroll");
    }

    hamburger.addEventListener("click", toggleHamburger);

    navLinks.forEach(function(link) {
      link.addEventListener("click", function() {
        if (hamburger.classList.contains("is-active")) {
          toggleHamburger();
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector("#navbar");
    let dropdownItem = document.querySelectorAll(".dropdown-item");
    
    function BgColor(color) {
        dropdownItem.forEach(item => {
            item.style.background = color;
        });
    }
    function NewBgColor() {
        if (window.innerWidth < 1022) {
            BgColor("#03072A");
        } else {
            if (window.scrollY > 550) {
                BgColor("#20222B");
            } else {
                BgColor("#03072A");
            }
        }
    }

    window.addEventListener("scroll", function () {
        if (window.innerWidth >= 1022) {
            if (window.scrollY > 550) {
                header.style.backgroundColor = "#18181A";
                header.style.height = "75px";
                BgColor("#18181A");
            } else {
                header.style.backgroundColor = "#03072A";
                header.style.height = "90px";
                BgColor("#03072A");
            }
        }
    });

    window.addEventListener("resize", function () {
        NewBgColor();
    });
    NewBgColor();
  });

  document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".drop-link");

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        var bsCollapse = new bootstrap.Collapse(document.getElementById("navbarNavDropdown"), {
          toggle: false
        });
        bsCollapse.hide();
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("play-bttn");
    const videoContainer = document.querySelector(".video-container");
    const video = document.getElementById("video-frame");
    const background = document.querySelector(".video-background");
  
    playButton.addEventListener("click", function() {
      videoContainer.style.display = "block";
      video.style.display = "block";
      background.style.display = "block";
    });
  
    document.addEventListener("click", function(event) {
      if (!videoContainer.contains(event.target) && event.target !== playButton) {
        videoContainer.style.display = "none";
        video.style.display = "none";
        background.style.display = "none";
      }
    });
  });

  function adjustServiceLayout() {
    let deviceWidth = window.innerWidth;
    let serviceImg = document.querySelectorAll(".service-img");
    let serviceContainer = document.querySelectorAll(".service-container");

    if (deviceWidth < 800) {
      serviceImg.forEach(function(image) {
        image.classList.remove("col-4");
        image.classList.add("col-12");
      });

      serviceContainer.forEach(function(container) {
        container.classList.remove("col-6");
        container.classList.add("col-12");
      });
    } else {
      serviceImg.forEach(function(image) {
        image.classList.remove("col-12");
        image.classList.add("col-4");
      });

      serviceContainer.forEach(function(container) {
        container.classList.remove("col-12");
        container.classList.add("col-6");
      });
    }
  }
  adjustServiceLayout();

  window.addEventListener("resize", adjustServiceLayout);

  function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }
  
