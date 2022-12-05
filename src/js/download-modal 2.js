(() => {
    const refs = {
      openModalBtns: document.querySelectorAll('[data-download-modal-open]'),
      closeModalBtn: document.querySelector('[data-download-modal-close]'),
      modal: document.querySelector('[data-download-modal]'),
    };

    refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle('download__backdrop--is-hidden');
    }

  })();