(function(){
      const themeButtons = document.querySelectorAll('.theme-btn');
      const body = document.body;
      const themeMapping = {
        'default': '',
        'minimal': 'minimal-theme',
        'luxury': 'luxury-theme',
        'elegant': 'elegant-theme',
        'personalizad': 'personalized-theme',  // disabled currently
      };

      // Initialize theme from default selected btn (Traditional)
      let currentTheme = 'default';

      // Theme button click handler
      themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          // if (btn.disabled) return;
          const selectedTheme = btn.dataset.theme;

          // If already selected, do nothing
          if(currentTheme === selectedTheme) return;

          // Remove previous theme class if present
          if(currentTheme !== 'default' && themeMapping[currentTheme]){
            body.classList.remove(themeMapping[currentTheme]);
          }
          // Add new theme class if not default
          if(selectedTheme !== 'default' && themeMapping[selectedTheme]){
            body.classList.add(themeMapping[selectedTheme]);
          }

          // Mark pressed states and selection for accessibility & style
          themeButtons.forEach(b => {
            if(b === btn){
              b.classList.add('selected');
              b.setAttribute('aria-pressed', 'true');
            } else {
              b.classList.remove('selected');
              b.setAttribute('aria-pressed', 'false');
            }
          });

          currentTheme = selectedTheme;
        });
      });

      // Services image switching logic
      const serviceLines = document.querySelectorAll('.service-line');
      const serviceImg = document.getElementById('service-img');

      function setActiveService(index){
        serviceLines.forEach((line, idx) => {
          if(idx === index){
            line.classList.add('active');
            serviceImg.src = line.dataset.imgSrc;
            serviceImg.alt = line.dataset.alt;
          } else {
            line.classList.remove('active');
          }
        });
      }
      // Initial set first service active
      setActiveService(0);

      serviceLines.forEach((line, idx) => {
        line.addEventListener('mouseenter', () => {
          setActiveService(idx);
        });
        line.addEventListener('focus', () => {
          setActiveService(idx);
        });
      });

      // For accessibility keyboard navigation set active service on focus
    })();