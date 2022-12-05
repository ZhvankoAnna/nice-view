(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-contact-modal-open]'),
    closeModalBtn: document.querySelector('[data-contact-modal-close]'),
    modal: document.querySelector('[data-contact-modal]'),
  };

  refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('contact-us__backdrop--is-hidden');
  }
})();
