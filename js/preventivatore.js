// ---- DATI REGIONI E PROVINCE ITALIANE ----
const regioni = [
    "Abruzzo","Basilicata","Calabria","Campania","Emilia-Romagna","Friuli-Venezia Giulia",
    "Lazio","Liguria","Lombardia","Marche","Molise","Piemonte","Puglia","Sardegna","Sicilia",
    "Toscana","Trentino-Alto Adige","Umbria","Valle d'Aosta","Veneto"
  ];
  const province = [ 
    { nome: "Agrigento", regione: "Sicilia" },{ nome: "Alessandria", regione: "Piemonte" },{ nome: "Ancona", regione: "Marche" },
    { nome: "Aosta", regione: "Valle d'Aosta" },{ nome: "Arezzo", regione: "Toscana" },{ nome: "Ascoli Piceno", regione: "Marche" },
    { nome: "Asti", regione: "Piemonte" },{ nome: "Avellino", regione: "Campania" },{ nome: "Bari", regione: "Puglia" },
    { nome: "Barletta-Andria-Trani", regione: "Puglia" },{ nome: "Belluno", regione: "Veneto" },{ nome: "Benevento", regione: "Campania" },
    { nome: "Bergamo", regione: "Lombardia" },{ nome: "Biella", regione: "Piemonte" },{ nome: "Bologna", regione: "Emilia-Romagna" },
    { nome: "Bolzano", regione: "Trentino-Alto Adige" },{ nome: "Brescia", regione: "Lombardia" },{ nome: "Brindisi", regione: "Puglia" },
    { nome: "Cagliari", regione: "Sardegna" },{ nome: "Caltanissetta", regione: "Sicilia" },{ nome: "Campobasso", regione: "Molise" },
    { nome: "Caserta", regione: "Campania" },{ nome: "Catania", regione: "Sicilia" },{ nome: "Catanzaro", regione: "Calabria" },
    { nome: "Chieti", regione: "Abruzzo" },{ nome: "Como", regione: "Lombardia" },{ nome: "Cosenza", regione: "Calabria" },
    { nome: "Cremona", regione: "Lombardia" },{ nome: "Crotone", regione: "Calabria" },{ nome: "Cuneo", regione: "Piemonte" },
    { nome: "Enna", regione: "Sicilia" },{ nome: "Fermo", regione: "Marche" },{ nome: "Ferrara", regione: "Emilia-Romagna" },
    { nome: "Firenze", regione: "Toscana" },{ nome: "Foggia", regione: "Puglia" },{ nome: "Forlì-Cesena", regione: "Emilia-Romagna" },
    { nome: "Frosinone", regione: "Lazio" },{ nome: "Genova", regione: "Liguria" },{ nome: "Gorizia", regione: "Friuli-Venezia Giulia" },
    { nome: "Grosseto", regione: "Toscana" },{ nome: "Imperia", regione: "Liguria" },{ nome: "Isernia", regione: "Molise" },
    { nome: "La Spezia", regione: "Liguria" },{ nome: "L'Aquila", regione: "Abruzzo" },{ nome: "Latina", regione: "Lazio" },
    { nome: "Lecce", regione: "Puglia" },{ nome: "Lecco", regione: "Lombardia" },{ nome: "Livorno", regione: "Toscana" },
    { nome: "Lodi", regione: "Lombardia" },{ nome: "Lucca", regione: "Toscana" },{ nome: "Macerata", regione: "Marche" },
    { nome: "Mantova", regione: "Lombardia" },{ nome: "Massa-Carrara", regione: "Toscana" },{ nome: "Matera", regione: "Basilicata" },
    { nome: "Messina", regione: "Sicilia" },{ nome: "Milano", regione: "Lombardia" },{ nome: "Modena", regione: "Emilia-Romagna" },
    { nome: "Monza e della Brianza", regione: "Lombardia" },{ nome: "Napoli", regione: "Campania" },{ nome: "Novara", regione: "Piemonte" },
    { nome: "Nuoro", regione: "Sardegna" },{ nome: "Oristano", regione: "Sardegna" },{ nome: "Padova", regione: "Veneto" },
    { nome: "Palermo", regione: "Sicilia" },{ nome: "Parma", regione: "Emilia-Romagna" },{ nome: "Pavia", regione: "Lombardia" },
    { nome: "Perugia", regione: "Umbria" },{ nome: "Pesaro e Urbino", regione: "Marche" },{ nome: "Pescara", regione: "Abruzzo" },
    { nome: "Piacenza", regione: "Emilia-Romagna" },{ nome: "Pisa", regione: "Toscana" },{ nome: "Pistoia", regione: "Toscana" },
    { nome: "Pordenone", regione: "Friuli-Venezia Giulia" },{ nome: "Potenza", regione: "Basilicata" },{ nome: "Prato", regione: "Toscana" },
    { nome: "Ragusa", regione: "Sicilia" },{ nome: "Ravenna", regione: "Emilia-Romagna" },{ nome: "Reggio Calabria", regione: "Calabria" },
    { nome: "Reggio Emilia", regione: "Emilia-Romagna" },{ nome: "Rieti", regione: "Lazio" },{ nome: "Rimini", regione: "Emilia-Romagna" },
    { nome: "Roma", regione: "Lazio" },{ nome: "Rovigo", regione: "Veneto" },{ nome: "Salerno", regione: "Campania" },
    { nome: "Sassari", regione: "Sardegna" },{ nome: "Savona", regione: "Liguria" },{ nome: "Siena", regione: "Toscana" },
    { nome: "Siracusa", regione: "Sicilia" },{ nome: "Sondrio", regione: "Lombardia" },{ nome: "Sud Sardegna", regione: "Sardegna" },
    { nome: "Taranto", regione: "Puglia" },{ nome: "Teramo", regione: "Abruzzo" },{ nome: "Terni", regione: "Umbria" },
    { nome: "Torino", regione: "Piemonte" },{ nome: "Trapani", regione: "Sicilia" },{ nome: "Trento", regione: "Trentino-Alto Adige" },
    { nome: "Treviso", regione: "Veneto" },{ nome: "Trieste", regione: "Friuli-Venezia Giulia" },{ nome: "Udine", regione: "Friuli-Venezia Giulia" },
    { nome: "Varese", regione: "Lombardia" },{ nome: "Venezia", regione: "Veneto" },{ nome: "Verbano-Cusio-Ossola", regione: "Piemonte" },
    { nome: "Vercelli", regione: "Piemonte" },{ nome: "Verona", regione: "Veneto" },{ nome: "Vibo Valentia", regione: "Calabria" },
    { nome: "Vicenza", regione: "Veneto" },{ nome: "Viterbo", regione: "Lazio" }];
  
  // ---- DATI PREZZI E LOGICA ----
  const prezziBase = [
    { range: '0-10', prezzo: 400, imballaggio: 100 },
    { range: '10-20', prezzo: 800, imballaggio: 200 },
    { range: '20-30', prezzo: 1200, imballaggio: 300 },
    { range: '30-40', prezzo: 1600, imballaggio: 400 },
    { range: '40-50', prezzo: 1800, imballaggio: 500 },
    { range: '50-60', prezzo: 2300, imballaggio: 600 },
    { range: '60+', prezzo: 3000, imballaggio: 700 }
  ];
  
  const macrozone = {
    nord: [ 'Piemonte', 'Valle d\'Aosta', 'Lombardia', 'Liguria', 'Trentino-Alto Adige',
            'Friuli-Venezia Giulia', 'Veneto', 'Emilia-Romagna' ],
    centro: [ 'Toscana', 'Marche', 'Umbria', 'Lazio', 'Abruzzo' ],
    sud: [ 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna' ]
  };
  
  function getMacroZona(regione) {
    if (macrozone.nord.includes(regione)) return 'nord';
    if (macrozone.centro.includes(regione)) return 'centro';
    return 'sud';
  }
  function getPrezzoBase(range) {
    return prezziBase.find(e => e.range === range);
  }
  function formatCurrency(eur) {
    return eur.toLocaleString('it-IT', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 });
  }
  // ---- POPOLAMENTO SELECTS ----
  function populateRegioni(selectId) {
    const select = document.getElementById(selectId);
    select.innerHTML = '<option value="">Seleziona regione...</option>';
    regioni.forEach(reg => {
      select.innerHTML += `<option value="${reg}">${reg}</option>`;
    });
  }
  function populateProvince(selectId, regione) {
    const select = document.getElementById(selectId);
    select.innerHTML = '<option value="">Seleziona provincia...</option>';
    province.filter(p => p.regione === regione).forEach(prov => {
      select.innerHTML += `<option value="${prov.nome}">${prov.nome}</option>`;
    });
  }
  
  // ---- LOGICA FORM E PREVENTIVO ----
  const LOGO_SRC = "data:image/png;base64,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";
  // Sostituiscilo con la tua stringa Base64 completa PNG!
  
  function getCheckedLabels(group) {
    const mapping = {
      pianoPartenza: [
        { id: 'pianoTerraPartenza', label: 'Piano terra' },
        { id: 'pianoRialzatoPartenza', label: 'Piano rialzato' },
        { id: 'pianoSeminterratoPartenza', label: 'Piano seminterrato' }
      ],
      pianoDestinazione: [
        { id: 'pianoTerraDestinazione', label: 'Piano terra' },
        { id: 'pianoRialzatoDestinazione', label: 'Piano rialzato' },
        { id: 'pianoSeminterratoDestinazione', label: 'Piano seminterrato' }
      ],
      servizi: [
        { id: 'bancali', label: 'Bancali' },
        { id: 'arredo', label: 'Arredo' },
        { id: 'mobilio', label: 'Mobilio' }
      ]
    };
    return mapping[group]
      .filter(item => document.getElementById(item.id)?.checked)
      .map(item => item.label)
      .join(', ');
  }
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    populateRegioni('regionePartenza');
    populateRegioni('regioneDestinazione');
    document.getElementById('regionePartenza').addEventListener('change', function() {
      populateProvince('provinciaPartenza', this.value);
    });
    document.getElementById('regioneDestinazione').addEventListener('change', function() {
      populateProvince('provinciaDestinazione', this.value);
    });
  
    document.getElementById('traslocoForm').addEventListener('submit', function(e) {
      e.preventDefault();
  
      // --- Raccolta dati ---
      const range = document.getElementById('metriCubi').value;
      const baseInfo = getPrezzoBase(range);
      let prezzo = baseInfo ? baseInfo.prezzo : 0;
  
      const regionePartenza = document.getElementById('regionePartenza').value;
      const macroPartenza = getMacroZona(regionePartenza);
      if (macroPartenza === 'nord') prezzo += 200;
      if (macroPartenza === 'centro') prezzo += 100;
      const provinciaPartenza = document.getElementById('provinciaPartenza').value;
      const zonaPartenza = document.getElementById('zonaPartenza').value;
      if (zonaPartenza === 'centro') prezzo += 100;
      const imballaggio = document.getElementById('imballaggio').value;
      if (imballaggio === 'si') prezzo += baseInfo ? baseInfo.imballaggio : 0;
  
      let servizi = [];
      let serviziPrezzo = 0;
      if (document.getElementById('bancali').checked) { servizi.push('Bancali'); serviziPrezzo += 50; }
      if (document.getElementById('arredo').checked) { servizi.push('Arredo'); serviziPrezzo += 60; }
      if (document.getElementById('mobilio').checked) { servizi.push('Mobilio'); serviziPrezzo += 100; }
      prezzo += serviziPrezzo;
  
      // Piano partenza multiplo
      let pianoPartenzaArr = [];
      let pianoPartenzaPrezzo = 0;
      if (document.getElementById('pianoTerraPartenza').checked) { pianoPartenzaArr.push('Piano terra'); pianoPartenzaPrezzo += 10; }
      if (document.getElementById('pianoRialzatoPartenza').checked) { pianoPartenzaArr.push('Piano rialzato'); pianoPartenzaPrezzo += 100; }
      if (document.getElementById('pianoSeminterratoPartenza').checked) { pianoPartenzaArr.push('Piano seminterrato'); pianoPartenzaPrezzo += 30; }
      prezzo += pianoPartenzaPrezzo;
  
      const regioneDestinazione = document.getElementById('regioneDestinazione').value;
      const provinciaDestinazione = document.getElementById('provinciaDestinazione').value;
      const macroDestinazione = getMacroZona(regioneDestinazione);
      if (macroDestinazione === 'nord') prezzo += 200;
      if (macroDestinazione === 'centro') prezzo += 100;
      const zonaDestinazione = document.getElementById('zonaDestinazione').value;
      if (zonaDestinazione === 'centro') prezzo += 100;
  
      let pianoDestinazioneArr = [];
      let pianoDestinazionePrezzo = 0;
      if (document.getElementById('pianoTerraDestinazione').checked) { pianoDestinazioneArr.push('Piano terra'); pianoDestinazionePrezzo += 10; }
      if (document.getElementById('pianoRialzatoDestinazione').checked) { pianoDestinazioneArr.push('Piano rialzato'); pianoDestinazionePrezzo += 100; }
      if (document.getElementById('pianoSeminterratoDestinazione').checked) { pianoDestinazioneArr.push('Piano seminterrato'); pianoDestinazionePrezzo += 30; }
      prezzo += pianoDestinazionePrezzo;
  
      let riepilogoHTML = `
        <h2 class="mb-3 text-success fw-bold">Riepilogo Preventivo Trasloco</h2>
        <ul class="list-group mb-3">
          <li class="list-group-item"><strong>Volume:</strong> ${range.replace('+', ' +')} m³</li>
          <li class="list-group-item"><strong>Partenza:</strong> ${regionePartenza} (${provinciaPartenza}) - Zona: ${zonaPartenza.charAt(0).toUpperCase()+zonaPartenza.slice(1)}</li>
          <li class="list-group-item"><strong>Piani partenza:</strong> ${pianoPartenzaArr.length ? pianoPartenzaArr.join(', ') : 'Nessuno selezionato'}</li>
          <li class="list-group-item"><strong>Destinazione:</strong> ${regioneDestinazione} (${provinciaDestinazione}) - Zona: ${zonaDestinazione.charAt(0).toUpperCase()+zonaDestinazione.slice(1)}</li>
          <li class="list-group-item"><strong>Piani destinazione:</strong> ${pianoDestinazioneArr.length ? pianoDestinazioneArr.join(', ') : 'Nessuno selezionato'}</li>
          <li class="list-group-item"><strong>Imballaggio:</strong> ${imballaggio === 'si' ? 'Sì' : 'No'}</li>
          <li class="list-group-item"><strong>Servizi aggiuntivi:</strong> ${servizi.length ? servizi.join(', ') : 'Nessuno'}</li>
        </ul>
        <h3 class="fw-bold mb-3">Totale: <span class="text-primary">${formatCurrency(prezzo)}</span></h3>
        <div class="d-flex flex-wrap gap-2">
          <button class="btn btn-gradient" id="generaPDF"><i class="fa-solid fa-file-pdf me-2"></i>Scarica PDF</button>
          <button class="btn btn-outline-primary" id="inviaEmail"><i class="fa-solid fa-paper-plane me-2"></i>Invia Preventivo</button>
        </div>
      `;
  
      document.getElementById('traslocoForm').style.display = 'none';
      const riepilogo = document.getElementById('riepilogoPreventivo');
      riepilogo.innerHTML = riepilogoHTML;
      riepilogo.style.display = 'block';
  
      // --- PDF GENERATOR e invio email ---
      document.getElementById('generaPDF').addEventListener('click', function () {
        const pdf = new window.jspdf.jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });
      
        const pageWidth = pdf.internal.pageSize.getWidth();
      
        // Cornice
        pdf.setDrawColor(180, 180, 180);
        pdf.setLineWidth(1);
        pdf.roundedRect(8, 8, pageWidth-16, 282, 7, 7, 'S');
      
        // Logo centrato grande
        const logoWidth = 60;
        const logoHeight = 25;
        const centerX = (pageWidth - logoWidth) / 2;
        pdf.addImage(LOGO_SRC, 'PNG', centerX, 16, logoWidth, logoHeight);
      
        // Titolo evidenziato
        pdf.setFillColor(30, 144, 255);
        pdf.roundedRect(32, 46, pageWidth-64, 12, 4, 4, 'F');
        pdf.setTextColor(255,255,255);
        pdf.setFontSize(16);
        pdf.setFont(undefined, 'bold');
        pdf.text('Riepilogo Preventivo Trasloco', pageWidth/2, 54, {align: 'center'});
      
        // Info azienda
        pdf.setFontSize(10);
        pdf.setTextColor(60,60,60);
        pdf.setFont(undefined, 'normal');
        pdf.text('Sai Traslochi Sedi:', pageWidth/2, 63, {align:'center'});
        pdf.text('Piazza Benvenuto Cocuzza, Pomezia (Roma), 00071', pageWidth/2, 68, {align:'center'});
        pdf.text('Via Masaccio 8, Reggio NellEmilia, 42124', pageWidth/2, 73, {align:'center'});
        pdf.text('Email: info@saitraslochi.it | Tel: +39 328 969 9902', pageWidth/2, 78, {align:'center'});
      
        // Box preventivo
        let y = 87;
        pdf.setDrawColor(220,220,220);
        pdf.setFillColor(245,245,245);
        pdf.roundedRect(22, y-6, pageWidth-44, 85, 6, 6, 'FD');
        y += 3;
      
        pdf.setTextColor(0,0,0);
        pdf.setFontSize(12);
      
        function addLine(label, value) {
          pdf.setFont(undefined, 'bold');
          pdf.text(label, 28, y);
          pdf.setFont(undefined, 'normal');
          pdf.text(value, 70, y);
          y += 9;
        }
      
        addLine("Volume:", document.getElementById('metriCubi').value + ' m³');
        addLine("Partenza:", `${document.getElementById('regionePartenza').value} (${document.getElementById('provinciaPartenza').value}) - Zona: ${capitalize(document.getElementById('zonaPartenza').value)}`);
        addLine("Piani partenza:", getCheckedLabels('pianoPartenza'));
        addLine("Destinazione:", `${document.getElementById('regioneDestinazione').value} (${document.getElementById('provinciaDestinazione').value}) - Zona: ${capitalize(document.getElementById('zonaDestinazione').value)}`);
        addLine("Piani destinazione:", getCheckedLabels('pianoDestinazione'));
        addLine("Imballaggio:", document.getElementById('imballaggio').value === 'si' ? 'Sì' : 'No');
        addLine("Servizi aggiuntivi:", getCheckedLabels('servizi') || 'Nessuno');
      
        // Totale in evidenza
        y += 4;
        pdf.setFillColor(245,255,230);
        pdf.setDrawColor(125,192,72);
        pdf.roundedRect(28, y-4, pageWidth-56, 15, 4, 4, 'FD');
        pdf.setFontSize(14);
        pdf.setTextColor(32,140,70);
        pdf.setFont(undefined, 'bold');
        pdf.text("Totale:", 32, y+6);
        pdf.text(document.querySelector('#riepilogoPreventivo h3 span').innerText, pageWidth-32, y+6, {align: 'right'});
        y += 20;
      
        // Disclaimer
        pdf.setTextColor(120,120,120);
        pdf.setFontSize(9);
        pdf.setFont(undefined, 'normal');
        pdf.text("Il preventivo ha valore indicativo e può variare dopo sopralluogo.\nInvia questo PDF a info@saitraslochi.it o chiama il +39 328 969 9902.", 28, y, {maxWidth: pageWidth-56});
      
        // Pulsante mailto
        y += 18;
        pdf.setFillColor(30,144,255);
        pdf.roundedRect(pageWidth/2-40, y, 80, 12, 6, 6, 'F');
        pdf.setFontSize(11);
        pdf.setTextColor(255,255,255);
        pdf.setFont(undefined, 'bold');
        const linkLabel = "Invia preventivo via email";
        pdf.setFontSize(11);
        pdf.setFont(undefined, 'bold');
        pdf.setTextColor(255,255,255);
        
        // Calcola larghezza del testo
        const textWidth = pdf.getTextWidth(linkLabel);
        // Calcola posizione X centrale
        const centerLinkX = (pageWidth - textWidth) / 2;
        
        // Usa textWithLink 
        pdf.textWithLink(linkLabel, centerLinkX, y+8.5, {
          url: "mailto:info@saitraslochi.it?subject=Richiesta Preventivo&body=In allegato il preventivo generato dal sito"
        });
      
        pdf.save('preventivo-trasloco.pdf');
      });
  
      document.getElementById('inviaEmail').addEventListener('click', function() {
        alert("Il PDF generato NON può essere allegato automaticamente alla mail. Scaricalo prima e poi allegalo manualmente all'email.");
        let subject = encodeURIComponent("Preventivo Sito");
        let body = encodeURIComponent(
          "Salve! Ho sfruttato il vostro preventivatore e vorrei discutere di questo con un operatore di Sai Service. In allegato troverete il file PDF con il preventivo."
        );
        window.location.href = `mailto:info@saitraslochi.it?subject=${subject}&body=${body}`;
      });
  
    });
  });