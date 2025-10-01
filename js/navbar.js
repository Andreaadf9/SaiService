let navbarHTML = document.querySelector(".navbarMain");

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
}

navbar();

function navbar() {
  if (!navbarHTML) return; // Protezione se manca l'elemento nel DOM

  navbarHTML.innerHTML = `
<nav class="navbar navbar-expand-xxl sticky-top shadow theme-navbar" 
     style="background: linear-gradient(to right, #e0f2ff, #a6c9e2, #5f99d9, #3c6bbd, #1e3a8a); font-family: 'Montserrat', sans-serif; z-index: 1030; top: 0;">    <div class="container-fluid">
      <!-- Logo -->
      <a class="navbar-brand text-dark d-flex align-items-center" href="/index.html">
        <img src="img/LogominiSaiNs.png" alt="Logo" class="img-fluid me-2" style="height: 60px;">
      </a>

      <!-- Theme Toggle cambio tema prima era qui  -->
     

      <!-- Toggler -->
     <button class="btn rounded-circle p-2 border-0 d-xxl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" style="background-color: rgba(255,255,255,0.3);">
            <i data-lucide="menu" class="text-white"></i>
      </button>

      <!-- Desktop menu -->
      <ul class="navbar-nav ms-auto align-items-center gap-3 d-none d-xxl-flex">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
            <i data-lucide="briefcase" class="me-1"></i> Azienda
          </a>
          <ul class="dropdown-menu animate__animated animate__fadeIn">
            <li><a class="dropdown-item" href="/profilo.html">Profilo</a></li>
            <li><a class="dropdown-item" href="/index.html#certificazioni">Certificazioni</a></li>
            <li><a class="dropdown-item" href="/profilo.html#storia">Storia</a></li>
            
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
            <i data-lucide="truck" class="me-1"></i> Servizi
          </a>
          <ul class="dropdown-menu animate__animated animate__fadeIn">
            
            <li><a class="dropdown-item" href="/logisticaTraslochi.html">Logistica & Traslochi</a></li>
              <li><a class="dropdown-item" href="/library.html">Library</a></li>
            <li><a class="dropdown-item" href="/pulizie.html">Pulizie civili & Industriali</a></li>
            <li><a class="dropdown-item" href="/facility.html">Facility Managment</a></li>
          
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/partenr.html"><i data-lucide="users" class="me-1"></i> Partners</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="/profilo.html">Chi Siamo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/index.html#btnContatti">Contatti</a>
        </li>
        <li class="nav-item">
                <a class="nav-link text-white" href="/index.html"><i class="fa-solid fa-house"></i> Home</a>
          
        </li>
        <li class="nav-item">
        <button class="themeToggle btn btn-sm text-white me-3 rounded-circle p-2" style="background-color: rgba(255,255,255,0.3);">
  <i data-lucide="sun"></i>
</button>
        </li>
      </ul>
      
      

      <!-- Offcanvas mobile -->
      <div class="offcanvas offcanvas-start text-bg-dark animated-slide d-xxl-none" tabindex="-1" id="offcanvasNavbar"style="background: linear-gradient(to right, #e0f2ff, #a6c9e2, #5f99d9, #3c6bbd, #1e3a8a); font-family: 'Montserrat', sans-serif;">
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
                    <li><a class="dropdown-item" href="/profilo.html">Profilo</a></li>
                    <li><a class="dropdown-item" href="/index.html#Certificazioni">Certificazioni</a></li>
                    <li><a class="dropdown-item" href="/profilo.html#storia">Storia</a></li>
                    
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown">Servizi</a>
                  <ul class="dropdown-menu animate__animated animate__fadeIn">
                    <li><a class="dropdown-item" href="/logisticaTraslochi.html">Logistica & Traslochi</a></li>
                    <li><a class="dropdown-item" href="/library.html">Library</a></li>
                    <li><a class="dropdown-item" href="/pulizie.html">Pulizie</a></li>
                    <li><a class="dropdown-item" href="/facility.html">Facility</a></li>
                  </ul>
                </li>
                <li><a class="nav-link text-white" href="/partner.html"><i data-lucide="users" class="me-1"></i> Partners</a></li>
                <li><a class="nav-link text-white" href="/index.html"><i class="fa-solid fa-house"></i> Home</a></li>
                 <li class="nav-item">
        <button class="themeToggle btn btn-sm text-white me-3 rounded-circle p-2" style="background-color: rgba(255,255,255,0.3);">
  <i data-lucide="sun"></i>
</button>
        </li>
              </ul>
        </div>
      </div>
    </div>
  </nav>`;

  lucide.createIcons();
  



  const themeToggles = document.querySelectorAll('.themeToggle');

  function updateThemeIcons() {
    const isDark = document.body.classList.contains('dark-theme');
    themeToggles.forEach(btn => {
      btn.innerHTML = `<i data-lucide="${isDark ? 'moon' : 'sun'}"></i>`;
    });
    lucide.createIcons();
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
}

// Gestione apertura e chiusura dropdown sulla sidebar
let dropdown1 = document.querySelector(".drop1");
let dropdown2 = document.querySelector(".drop2");

document.querySelector(".hamburger")?.addEventListener("click", () => {
  dropdown1?.classList.add("show");
  dropdown2?.classList.add("show");

  setTimeout(() => {
    let back = document.querySelector(".offcanvas-backdrop");
    if (back) {
      back.addEventListener("click", () => {
        dropdown1?.classList.remove("show");
        dropdown2?.classList.remove("show");
      });
    }
  }, 300);
});

document.querySelector(".closed")?.addEventListener("click", () => {
  dropdown1?.classList.remove("show");
  dropdown2?.classList.remove("show");
});

