const blocks = document.querySelectorAll('.block');
      window.addEventListener('scroll', revealBlocks);

      function revealBlocks() {
          blocks.forEach((block, index) => {
              const blockTop = block.getBoundingClientRect().top;
              const blockBottom = block.getBoundingClientRect().bottom;
              const windowHeight = window.innerHeight;

              if ((blockTop < windowHeight - 100 && blockTop > 0) || (blockBottom < windowHeight && blockBottom > 0)) {
                  if (!block.classList.contains('in-view')) {
                      block.classList.add('in-view');
                      // Сохраняем состояние блока в локальное хранилище
                      localStorage.setItem(`block-${index + 1}`, 'in-view');
                  }
              } else {
                  if (block.classList.contains('in-view')) {
                      block.classList.remove('in-view');
                      // Удаляем состояние блока из локального хранилища
                      localStorage.removeItem(`block-${index + 1}`);
                  }
              }
          });
      }

      // Проверяем состояние блоков при загрузке страницы и восстанавливаем анимацию
      blocks.forEach((block, index) => {
          if (localStorage.getItem(`block-${index + 1}`) === 'in-view' || index === 0) {
              block.classList.add('in-view');
          }
      });