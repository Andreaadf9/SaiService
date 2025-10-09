(function () {
  const navbarHTML = document.querySelector(".navbarMain");

  // === THEME HANDLING ===
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') document.body.classList.add('dark-theme');

  initNavbar();

  function initNavbar() {
    if (!navbarHTML) return;

    navbarHTML.innerHTML = `
<nav class="navbar navbar-expand-xxl sticky-top shadow theme-navbar" 
     style="background: linear-gradient(to right, #e0f2ff, #a6c9e2, #5f99d9, #3c6bbd, #1e3a8a); font-family: 'Montserrat', sans-serif; z-index: 1030; top: 0;">
  <div class="container-fluid">
    <a class="navbar-brand text-dark d-flex align-items-center" href="index.html">
      <img src="img/LogominiSaiNs.png" alt="Logo" class="img-fluid me-2" style="height: 60px;">
    </a>

    <button class="btn rounded-circle p-2 border-0 d-xxl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style="background-color: rgba(255,255,255,0.3);">
      <i data-lucide="menu" class="text-white"></i>
    </button>

    <ul class="navbar-nav ms-auto align-items-center gap-3 d-none d-xxl-flex">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
          <i data-lucide="briefcase" class="me-1"></i> Azienda
        </a>
        <ul class="dropdown-menu animate__animated animate__fadeIn">
          <li><a class="dropdown-item" href="profilo.html">Profilo</a></li>
          <li><a class="dropdown-item" href="index.html#certificazioni">Certificazioni</a></li>
          <li><a class="dropdown-item" href="profilo.html#storia">Storia</a></li>
        </ul>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
          <i data-lucide="truck" class="me-1"></i> Servizi
        </a>
        <ul class="dropdown-menu animate__animated animate__fadeIn">
          <li><a class="dropdown-item" href="logisticaTraslochi.html">Logistica & Traslochi</a></li>
          <li><a class="dropdown-item" href="library.html">Library</a></li>
          <li><a class="dropdown-item" href="pulizie.html">Pulizie civili & Industriali</a></li>
          <li><a class="dropdown-item" href="facility.html">Facility Management</a></li>
        </ul>
      </li>

      <li class="nav-item"><a class="nav-link" href="partner.html"><i data-lucide="users" class="me-1"></i> Partners</a></li>
      <li class="nav-item"><a class="nav-link" href="profilo.html">Chi Siamo</a></li>
      <li class="nav-item"><a class="nav-link" href="index.html#btnContatti">Contatti</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="index.html"><i class="fa-solid fa-house"></i> Home</a></li>
      <li class="nav-item">
        <button class="themeToggle btn btn-sm text-white me-3 rounded-circle p-2" style="background-color: rgba(255,255,255,0.3);">
          <i data-lucide="sun"></i>
        </button>
      </li>
    </ul>

    <!-- Offcanvas mobile -->
    <div class="offcanvas offcanvas-start text-bg-dark animated-slide d-xxl-none" tabindex="-1" id="offcanvasNavbar" style="background: linear-gradient(to right, #e0f2ff, #a6c9e2, #5f99d9, #3c6bbd, #1e3a8a); font-family: 'Montserrat', sans-serif;">
      <div class="offcanvas-header border-bottom border-light">
        <h5 class="offcanvas-title">
          <img src="img/LogominiSaiNs.png" alt="Logo" style="height: 60px;">
        </h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body d-flex flex-column justify-content-center align-items-center gap-3">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown">Azienda</a>
            <ul class="dropdown-menu animate__animated animate__fadeIn">
              <li><a class="dropdown-item" href="profilo.html">Profilo</a></li>
              <li><a class="dropdown-item" href="index.html#certificazioni">Certificazioni</a></li>
              <li><a class="dropdown-item" href="profilo.html#storia">Storia</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown">Servizi</a>
            <ul class="dropdown-menu animate__animated animate__fadeIn">
              <li><a class="dropdown-item" href="logisticaTraslochi.html">Logistica & Traslochi</a></li>
              <li><a class="dropdown-item" href="library.html">Library</a></li>
              <li><a class="dropdown-item" href="pulizie.html">Pulizie</a></li>
              <li><a class="dropdown-item" href="facility.html">Facility</a></li>
            </ul>
          </li>

          <li><a class="nav-link text-white" href="partner.html"><i data-lucide="users" class="me-1"></i> Partners</a></li>
          <li><a class="nav-link text-white" href="index.html"><i class="fa-solid fa-house"></i> Home</a></li>
          <li class="nav-item mt-2">
            <button class="themeToggle btn btn-sm text-white me-3 rounded-circle p-2" style="background-color: rgba(255,255,255,0.3);">
              <i data-lucide="sun"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    `;

    // === ICONS ===
    try { lucide.createIcons(); } catch (e) { console.warn('lucide.createIcons error', e); }

    // === STYLE FIX ===
    if (!document.getElementById('sai-dd-style')) {
      const style = document.createElement('style');
      style.id = 'sai-dd-style';
      style.innerHTML = `.dropdown-menu{ z-index:20000!important; } .dropdown{ position:relative; }`;
      document.head.appendChild(style);
    }

    // === EVENT DELEGATION for dropdowns ===
    document.addEventListener('click', function (e) {
      const toggle = e.target.closest('.dropdown-toggle');
      if (!toggle) return;

      // Se Bootstrap è disponibile, lascia che gestisca lui il dropdown
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

    // === Bootstrap init se presente ===
    if (typeof bootstrap !== 'undefined') {
      document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(el => {
        bootstrap.Dropdown.getOrCreateInstance(el);
      });
    }

    // === Observer per reinizializzare se la navbar cambia ===
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

    // === Offcanvas close on link click ===
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