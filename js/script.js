/* ============================================================
   Arnab Adhikari Portfolio — Main Script
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Preloader ---------- */
  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    setTimeout(() => preloader.classList.add("done"), 400);
    setTimeout(() => preloader.remove(), 1000);
  });
  setTimeout(() => {
    if (preloader) {
      preloader.classList.add("done");
      setTimeout(() => preloader.remove(), 600);
    }
  }, 2200);

  /* ---------- Scroll Progress + Back to Top ---------- */
  const progressBar = document.getElementById("scroll-progress");
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = h > 0 ? window.scrollY / h : 0;
    if (progressBar) progressBar.style.transform = `scaleX(${scrolled})`;
    if (backToTop) backToTop.classList.toggle("show", window.scrollY > 500);
  }, { passive: true });
  if (backToTop) {
    backToTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  /* ---------- Mobile Nav ---------- */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      hamburger.classList.toggle("open");
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navLinks.classList.remove("open");
      });
    });
    document.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  }

  /* ---------- Active Nav Link ---------- */
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll('#nav-links a[href^="#"]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        navAnchors.forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id)
        );
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );
  sections.forEach((s) => observer.observe(s));

  /* ---------- Render Projects ---------- */
  const teamGrid = document.getElementById("team-grid");
  const soloGrid = document.getElementById("solo-grid");

  function cardHTML(p) {
    const badgeClass = p.type === "team" ? "team" : p.type === "ui" ? "ui" : "solo";
    const badgeText = p.type === "team" ? "TEAM" : p.type === "ui" ? "UI POLISH" : "SOLO";
    const creators = p.creators
      ? `<div class="creators"><i class="fas fa-users"></i> ${p.creators}</div>`
      : "";
    const demoBtn = p.demo
      ? `<a href="${p.demo}" target="_blank" rel="noopener" class="lnk-demo"><i class="fas fa-external-link-alt"></i> Live Demo</a>`
      : "";
    const codeBtn = p.code
      ? `<a href="${p.code}" target="_blank" rel="noopener" class="lnk-code"><i class="fab fa-github"></i> Code</a>`
      : "";

    return `
      <article class="project-card">
        <div class="project-img" data-full="${p.image}" data-title="${p.title}">
          <img src="${p.image}" alt="${p.title}" loading="lazy"
               onerror="this.src='https://placehold.co/600x400/141c2e/8b9bb4?text=${encodeURIComponent(p.title)}'" />
          <span class="badge-tag ${badgeClass}">${badgeText}</span>
        </div>
        <div class="project-body">
          <h3>${p.title}</h3>
          ${creators}
          <p class="desc">${p.desc}</p>
          <div class="project-tags">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
          <div class="project-links">${demoBtn}${codeBtn}</div>
        </div>
      </article>`;
  }

  if (typeof PROJECTS !== "undefined") {
    const team = PROJECTS.filter(p => p.type === "team");
    const solo = PROJECTS.filter(p => p.type !== "team");
    if (teamGrid) teamGrid.innerHTML = team.map(cardHTML).join("");
    if (soloGrid) soloGrid.innerHTML = solo.map(cardHTML).join("");

    // Stats
    document.getElementById("stat-projects").textContent = PROJECTS.length;
    document.getElementById("stat-team").textContent = team.length;
    document.getElementById("stat-live").textContent = PROJECTS.filter(p => p.demo).length;
  }

  /* ---------- Lightbox ---------- */
  const lightbox = document.getElementById("lightbox");
  const lbImg = lightbox.querySelector("img");
  const lbCap = lightbox.querySelector(".lb-cap");
  const lbClose = lightbox.querySelector(".lb-close");

  document.addEventListener("click", (e) => {
    const imgBox = e.target.closest(".project-img");
    if (imgBox) {
      lbImg.src = imgBox.dataset.full;
      lbCap.textContent = imgBox.dataset.title;
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  });
  function closeLb() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }
  lbClose.addEventListener("click", closeLb);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLb();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLb();
  });
});
