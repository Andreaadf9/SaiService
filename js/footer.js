// footer.js — versione corretta, usa percorsi RELATIVI e target="_blank" per esterni
(function () {
    const footerHTML = document.querySelector(".footer");
    if (!footerHTML) return;
  
    // ATTENZIONE: verifica il nome del logo nel repo; qui uso "LogominiSaiNs.png" 
    // (se il tuo file si chiama LogominiSai.png modifica qui di conseguenza)
    footerHTML.innerHTML = `
    <div class="footer-section">
      <div class="container">
        <div class="footer-cta pt-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-30 pb-5 d-flex justify-content-center">
              <div class="single-cta">
                <i class="fas fa-map-marker-alt" style="padding-right: 5px"></i>
                <div class="cta-text">
                  <h4>Sede Legale</h4>
                  <span>Via Masaccio 8, 42124<br>Reggio Emilia RE<br>P.Iva: 12302441006</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-30 pb-5 d-flex justify-content-center">
              <div class="single-cta">
                <i class="fas fa-phone"></i>
                <div class="cta-text">
                  <h4>Chiamaci</h4>
                  <span> <a href="tel:+393347364210" style="color:inherit; text-decoration:none;">+39 334 7364210</a> </span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-30 d-flex justify-content-center">
              <div class="single-cta">
                <i class="far fa-envelope-open"></i>
                <div class="cta-text">
                  <h4>Mandaci un'email</h4>
                  <span><a href="mailto:info@saitraslochi.it" style="color:inherit; text-decoration:none;">info@saitraslochi.it</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-50 pb-5 d-flex justify-content-center">
              <div class="footer-widget text-center">
                <div class="footer-logo mb-3">
                  <a href="index.html"><img src="img/LogominiSaiNs.png" class="img-fluid" alt="logo" style="height:60px;"></a>
                </div>
                <div class="footer-text">
                  <p>Siamo un'azienda di traslochi</p>
                </div>
              </div>
            </div>
  
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-30 d-flex justify-content-center">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Links utili</h3>
                </div>
                <ul style="list-style:none; padding-left:0; margin:0;">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="LavoraConNoi.html">Lavora Con Noi</a></li>
                  <!-- ATTENZIONE: se la tua pagina è partner.html usa partner.html, se è partners.html usa quello -->
                  <li><a href="partner.html">Partners</a></li>
                </ul>
              </div>
            </div>
  
            <div class="footer-social-icon col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center">
              <div class="footer-widget text-center">
                <div class="footer-widget-heading">
                  <h3>Seguici</h3>
                </div>
                <!-- Sostituisci gli href qui sotto con i link corretti dei tuoi profili -->
                <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f facebook-bg soc"></i></a>
                <a href="https://x.com/Move_Connect_" target="_blank" rel="noopener noreferrer"><i class="fab fa-x-twitter twitter-bg soc"></i></a>
                <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram instagram-bg soc"></i></a>
                <a href="https://www.tiktok.com/@your-tiktok" target="_blank" rel="noopener noreferrer"><i class="fab fa-tiktok tiktok-bg soc"></i></a>
                <a href="https://www.youtube.com/@your-channel" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube youtube-bg soc"></i></a>
              </div>
            </div>
  
          </div>
        </div>
      </div>
  
      <div class="copyright-area">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>Copyright &copy; 2024, Tutti i diritti riservati a <a href="index.html">Sai Service</a></p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 text-center">
              <div class="footer-menu text-center">
                <ul class="mb-0 text-center" style="list-style:none; padding-left:0;">
                  <li style="display:inline-block; margin:0 10px;"><a href="https://www.iubenda.com/privacy-policy/78378781/legal?an=no&s_ck=false&newmarkup=yes" target="_blank" rel="noopener noreferrer">Privacy</a></li>
                  <li style="display:inline-block; margin:0 10px;"><a href="https://www.iubenda.com/privacy-policy/78378781/cookie-policy?an=no&s_ck=false&newmarkup=yes" target="_blank" rel="noopener noreferrer">Cookie</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  })();