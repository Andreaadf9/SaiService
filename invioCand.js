(function(){
    const canvas = document.getElementById('heroCanvasJobs');
    if(!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    let w = 0, h = 0, dpr = 1;
    const heroEl = document.querySelector('.hero-jobs');

    function resize() {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      const rect = heroEl.getBoundingClientRect();
      w = Math.max(300, Math.floor(rect.width));
      h = Math.max(200, Math.floor(rect.height));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    window.addEventListener('resize', resize, { passive:true });
    resize();

    const palette = ['#0f3b57', '#1a5e88', '#257cc2', '#60aaff'];
    const blobs = [];
    const BLOBS = 6;

    function init() {
      blobs.length = 0;
      for (let i=0;i<BLOBS;i++){
        blobs.push({
          x: Math.random()*w,
          y: Math.random()*h,
          r: Math.min(w,h) * (0.12 + Math.random()*0.12), 
          vx: (Math.random()-0.5) * 0.25,
          vy: (Math.random()-0.5) * 0.18,
          color: palette[i % palette.length],
          phase: Math.random()*Math.PI*2,
          drift: 0.002 + Math.random()*0.003
        });
      }
    }
    init();

    function draw() {
      // background gradient
      const g = ctx.createLinearGradient(0,0,0,h);
      g.addColorStop(0, '#06202f');
      g.addColorStop(1, '#093445');
      ctx.fillStyle = g;
      ctx.fillRect(0,0,w,h);

      // draw soft blobs using radial gradients
      ctx.globalCompositeOperation = 'lighter';
      for (let b of blobs){
        // slight oscillation
        b.x += Math.sin(b.phase) * b.vx;
        b.y += Math.cos(b.phase*0.8) * b.vy;
        b.phase += b.drift;

        // boundary wrap-around to keep blobs in view
        if (b.x < -b.r) b.x = w + b.r;
        if (b.x > w + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = h + b.r;
        if (b.y > h + b.r) b.y = -b.r;

        // radial gradient: center intense, edges transparent
        const grad = ctx.createRadialGradient(b.x, b.y, Math.max(1,b.r*0.05), b.x, b.y, b.r);
        grad.addColorStop(0, hexToRgba(b.color, 0.55));
        grad.addColorStop(0.4, hexToRgba(b.color, 0.25));
        grad.addColorStop(1, hexToRgba(b.color, 0.02));
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI*2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
    }

    function hexToRgba(hex, alpha){
      const c = hex.replace('#','');
      const r = parseInt(c.substring(0,2),16);
      const g = parseInt(c.substring(2,4),16);
      const b = parseInt(c.substring(4,6),16);
      return `rgba(${r},${g},${b},${alpha})`;
    }

    let raf = null;
    function loop(){
      // if hero resized (e.g. mobile -> desktop) re-init radii
      draw();
      raf = requestAnimationFrame(loop);
    }
    loop();

    // re-init on resize to recalc radii
    window.addEventListener('resize', () => {
      resize();
      init();
    });
  })();

  
  window.emailjsConfig = {
    userID: 'qWEF6KTz-fd6KKBNF',// chiave pubblica
    serviceID: 'service_pbt1ma6',// serv.id
    templateID: 'template_4dzzb7p'// Templ.id
  };
  (function(){
    const form = document.getElementById('applyForm');
    const resultEl = document.getElementById('formResult');
    const fileInput = document.getElementById('cvFile');

    function showMsg(type, txt){
      resultEl.style.display = 'block';
      resultEl.className = 'formResult alert alert-' + (type === 'success' ? 'success' : 'danger');
      resultEl.textContent = txt;
      setTimeout(()=>{ resultEl.style.display = 'none'; }, 7000);
    }

    
    function fileToDataURL(file){
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result); 
        reader.onerror = err => reject(err);
        reader.readAsDataURL(file);
      });
    }

    
    if (window.emailjsConfig && window.emailjs) {
      try { emailjs.init(window.emailjsConfig.userID); } catch(e){ /* ignore */ }
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!form.reportValidity()) return;
      
        const name = document.getElementById("nome").value.trim();
        const phone = document.getElementById("telefono").value.trim();
        const email = document.getElementById("email").value.trim();
        const role = document.getElementById("posizione").value;
        const message = document.getElementById("messaggio").value.trim();
        const file = fileInput.files[0];
      
        if (window.emailjsConfig && window.emailjs) {
          try {
            const templateParams = {
              nome: name,
              telefono: phone,
              email: email,
              ruolo: role,
              messaggio: message,
              to_email: "candidature@saiservice.it"
            };
      
            if (file) {
              const dataURL = await fileToDataURL(file);
              templateParams.attachments = JSON.stringify([
                { name: file.name, data: dataURL }
              ]);
            }
      
            await emailjs.send(
              window.emailjsConfig.serviceID,
              window.emailjsConfig.templateID,
              templateParams
            );
      
            showMsg(
              "success",
              "✅ Candidatura inviata con successo. Verrai contattato al più presto."
            );
            form.reset();
            return;
          } catch (err) {
            console.error("EmailJS send error:", err);
          }
        }
     

      // Fallback: mai
      try {
        let subject = encodeURIComponent(`Candidatura: ${role} - ${name}`);
        let body = `Nome: ${name}%0D%0AEmail: ${email}%0D%0ATelefono: ${phone}%0D%0ARuolo: ${role}%0D%0A%0D%0AMessaggio:%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0A`;
        if (file) {
          body += encodeURIComponent('ATTENZIONE: ho selezionato un file CV localmente. Se il client non lo allega automaticamente, allegalo manualmente alla mail prima di inviare.') + '%0D%0A';
        }
        const mailto = `mailto:candidature@saiservice.it?subject=${subject}&body=${body}`;
        window.location.href = mailto;
        showMsg('success','Aperto client email. Controlla la mail, allega il CV se necessario e invia.');
        form.reset();
      } catch (err) {
        console.error(err);
        showMsg('error','Impossibile aprire il client email. Invia manualmente a candidature@saiservice.it');
      }
    });
  })();

