(function () {
  const navbarHTML = document.querySelector(".navbarMain");

  // === THEME HANDLING ===
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') document.body.classList.add('dark-theme');

  initNavbar();

  function initNavbar() {
    if (!navbarHTML) return;

    navbarHTML.innerHTML = `...` // <-- lascia invariato il tuo HTML attuale della navbar qui (non modificarlo)

    // --- lucide icons ---
    try { lucide.createIcons(); } catch (e) { console.warn('lucide.createIcons error', e); }

    // --- style fix ---
    if (!document.getElementById('sai-dd-style')) {
      const style = document.createElement('style');
      style.id = 'sai-dd-style';
      style.innerHTML = `.dropdown-menu{ z-index:20000!important; } .dropdown{ position:relative; }`;
      document.head.appendChild(style);
    }

    // --- EVENT DELEGATION per dropdown (robusto e cross-page) ---
    document.addEventListener('click', function (e) {
      const toggle = e.target.closest('.dropdown-toggle');
      if (!toggle) return;

      // Se Bootstrap è disponibile, lasciamo fare a lui
      if (typeof bootstrap !== 'undefined') return;

      e.preventDefault();
      const dropdown = toggle.closest('.dropdown');
      const menu = dropdown?.querySelector('.dropdown-menu');
      const isShown = dropdown?.classList.contains('show');

      // Chiudi eventuali altri dropdown aperti
      document.querySelectorAll('.dropdown.show').forEach(d => {
        if (d !== dropdown) {
          d.classList.remove('show');
          d.querySelector('.dropdown-menu')?.classList.remove('show');
          d.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle dropdown corrente
      if (!isShown) {
        dropdown.classList.add('show');
        menu?.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
      } else {
        dropdown.classList.remove('show');
        menu?.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // --- Inizializza Bootstrap se presente ---
    if (typeof bootstrap !== 'undefined') {
      document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(el => {
        bootstrap.Dropdown.getOrCreateInstance(el);
      });
    }

    // --- Observer: se la navbar viene aggiornata, reapplica init bootstrap ---
    const mo = new MutationObserver(() => {
      if (typeof bootstrap !== 'undefined') {
        document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(el => {
          bootstrap.Dropdown.getOrCreateInstance(el);
        });
      }
    });
    mo.observe(navbarHTML, { childList: true, subtree: true });

    // === THEME TOGGLE ===
    const themeToggles = document.querySelectorAll('.themeToggle');

    function updateThemeIcons() {
      const isDark = document.body.classList.contains('dark-theme');
      themeToggles.forEach(btn => {
        btn.innerHTML = `<i data-lucide="${isDark ? 'moon' : 'sun'}"></i>`;
      });
      try { lucide.createIcons(); } catch (e) { }
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    themeToggles.forEach(btn => {
      btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        document.querySelector('.theme-navbar')?.classList.toggle('dark-theme');
        updateThemeIcons();
      });
    });

    updateThemeIcons();

    // --- Offcanvas close on click ---
    document.querySelectorAll('#offcanvasNavbar a').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        if (anchor.matches('[data-bs-toggle="dropdown"], .dropdown-toggle')) return;

        const offEl = document.getElementById('offcanvasNavbar');
        if (!offEl) return;

        if (typeof bootstrap !== 'undefined') {
          try {
            const inst = bootstrap.Offcanvas.getInstance(offEl) || new bootstrap.Offcanvas(offEl);
            inst.hide();
          } catch (e) {
            offEl.classList.remove('show');
          }
        }
      });
    });
  }
})();