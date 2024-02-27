function openModal(imgPath) {
      var modal = document.getElementById("modal");
      var modalImg = document.getElementById("modalImg");

      modalImg.src = imgPath;
      modal.classList.add("show");

      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    }

    function closeModal() {
      var modal = document.getElementById("modal");
      modal.classList.remove("show");

      document.body.style.overflow = "auto"; // Restore scrolling when modal is closed
    }