      const evetBtn = document.getElementById("evet");
      const hayirBtn = document.getElementById("hayir");
      const cevapDiv = document.getElementById("cevap");
      const mesajDiv = document.getElementById("mesaj");
      const soru = document.getElementById("soru");
      const icerik = document.getElementById("icerik");
      const uyari = document.getElementById("uyari");
      const arka = document.getElementById("arka");
      const videoButon = document.getElementById("videoButon");
  
      function konumuKontrolEt() {
        if (window.innerWidth > window.innerHeight) {
          uyari.style.display = "block";
          icerik.style.display = "none";
          cevapDiv.style.display = "none";
          mesajDiv.style.display = "none";
          arka.style.display = "none";
          
          
        } else {
          uyari.style.display = "none";
          if (!cevapDiv.style.display || cevapDiv.style.display === "none") {
            icerik.style.display = "flex";
          } else {
            cevapDiv.style.display = "block";
            mesajDiv.style.display = "block";
            arka.style.display = "block";
            
          }
        }
      }
  
      window.onload = konumuKontrolEt;
      window.addEventListener("resize", konumuKontrolEt);
      window.addEventListener("orientationchange", konumuKontrolEt);
  
      evetBtn.addEventListener("click", () => {
        icerik.style.display = "none";
        cevapDiv.style.display = "block";
        mesajDiv.style.display = "block";
        arka.style.display = "block";
      });

  const sarki = document.getElementById("sarki");
  const sesKapatBtn = document.getElementById("sesKapat");
  const sarkiDegistirBtn = document.getElementById("sarkiDegistir");
  const sesKontrolKapsayici = document.getElementById("sesKontrolKapsayici");
  const sarkiBaslik = document.getElementById("sarkiBaslik");
  sarkiBaslik.style.whiteSpace = "nowrap";
  
  let sesCaliyor = false;

  const sarkiListesi = [
    { src: "img/yalın.mp3", baslik: "🎧 Tatlıyla Balla - Yalın 🎧" },
    { src: "img/muslumgurses.mp3", baslik: "🎧 Seni Yazdım - Müslüm Gürses 🎧" },
    { src: "img/barismanco.mp3", baslik: "🎧 Aynalı Kemer - Barış Manço 🎧" }
  ];

  let aktifSarkiIndex = 0;

  evetBtn.addEventListener("click", () => {
    aktifSarkiIndex = 0;
    sarki.src = sarkiListesi[aktifSarkiIndex].src;
    sarkiBaslik.textContent = sarkiListesi[aktifSarkiIndex].baslik;
    sarki.play().then(() => {
      sesCaliyor = true;
      sesKontrolKapsayici.style.display = "block";
      sesKapatBtn.textContent = "Şarkıyı Kapat";
    }).catch(e => console.error(e));
  });

  sesKapatBtn.addEventListener("click", () => {
    if (sesCaliyor) {
      sarki.pause();
      sesCaliyor = false;
      sesKapatBtn.textContent = "Şarkıyı Aç";
    } else {
      sarki.play().then(() => {
        sesCaliyor = true;
        sesKapatBtn.textContent = "Şarkıyı Kapat";
      }).catch(e => console.error(e));
    }
  });

  sarkiDegistirBtn.addEventListener("click", () => {
    aktifSarkiIndex = (aktifSarkiIndex + 1) % sarkiListesi.length;
    sarki.src = sarkiListesi[aktifSarkiIndex].src;
    sarkiBaslik.textContent = sarkiListesi[aktifSarkiIndex].baslik;
    if (sesCaliyor) {
      sarki.play();
    }
  });
 
  let hayirTiklamaSayisi = 0;

  hayirBtn.addEventListener("click", () => {
    hayirTiklamaSayisi++;

    const yeniYazilar = [
      "Bence seviyorsundur... Lütfen biraz daha düşünür müsün...",
      "Şaka yapıyorsun değil mi? Bence yapıyorsun...",
      "Son kez soruyorum, beni gerçekten sevmiyor musun??",
      "Pekii, seni kendi iradene bırakıyorum..."
    ];

    if (hayirTiklamaSayisi <= 4) {
      soru.textContent = yeniYazilar[hayirTiklamaSayisi - 1];
    }

    if (hayirTiklamaSayisi === 4) {
      hayirBtn.style.display = "none";
    }
  });