(() => {
    const refs = {
      openModalBtns: document.querySelectorAll("[data-modal-flat-open]"),
      closeModalBtn: document.querySelector("[data-modal-flat-close]"),
      modal: document.querySelector("[data-modal-flat]"),
    };

    refs.openModalBtns.forEach(btn => btn.addEventListener("click", toggleModal));
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle("backdrop--is-hidden");
      document.body.classList.toggle('scroll-lock');
    }
  })();