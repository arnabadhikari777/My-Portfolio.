/* =====================================================
   Arnab Adhikari — Projects Data & Render Logic
   (Advanced Version crafted by Anubhab Dutta)
   ===================================================== */

const PEOPLE = {
    arnab: {
        name: "Arnab Adhikari",
        icon: "fa-server",
        color: "#22d3a7",
        github: "https://github.com/arnabadhikari777"
    },
    anubhab: {
        name: "Anubhab Dutta",
        icon: "fa-laptop-code",
        color: "#38bdf8",
        github: "https://github.com/duttaanubhab777-code"
    }
};

const PROJECTS = [
    /* ---------------- Collaboration Projects (Team) ---------------- */
    {
        title: "A.A. News",
        image: "images/news.jpg",
        shape: "phone",
        size: [716, 1316],
        team: [
            { who: "arnab", role: "Backend", type: "backend" },
            { who: "anubhab", role: "Frontend", type: "frontend" }
        ],
        desc: `A live news website that delivers verified headlines across every major category.<br><br>
<ul>
  <li><b>Verified Headlines:</b> Covers politics, technology, sports, business, entertainment and more in one place.</li>
  <li><b>Python & Flask Backend:</b> Built on Flask, handling the news content and serving every page.</li>
  <li><b>Clean Frontend:</b> A responsive interface crafted by Anubhab Dutta for comfortable reading.</li>
  <li><b>Live Deployment:</b> Fully deployed on PythonAnywhere and open for anyone to visit.</li>
</ul>`,
        tech: ["Python", "Flask", "News", "Live"],
        demo: "https://arnabadhikari125117y.pythonanywhere.com/",
        code: "https://github.com/arnabadhikari777/AA_News"
    },
    {
        title: "Friendly Flux / Math Class",
        image: "images/math.jpg",
        shape: "phone",
        size: [712, 1552],
        team: [
            { who: "arnab", role: "Backend", type: "backend" },
            { who: "anubhab", role: "Frontend", type: "frontend" }
        ],
        desc: `An educational platform for mastering Physics, Chemistry and Mathematics.<br><br>
<ul>
  <li><b>Interactive Formulas:</b> Subject-wise formulas that students can explore and use right on the page.</li>
  <li><b>Equation Solving:</b> Work through equations step by step instead of just memorising them.</li>
  <li><b>Visualizations:</b> Clear, good-looking visuals designed to make hard concepts easier to see.</li>
  <li><b>Team Build & Live Hosting:</b> Backend by Arnab, frontend by Anubhab, and live on PythonAnywhere.</li>
</ul>`,
        tech: ["JavaScript", "Education", "Math", "Live"],
        demo: "https://arnabmathclass.pythonanywhere.com/",
        code: "https://github.com/arnabadhikari777/Friendly-Flux"
    },
    {
        title: "Beyonder AI 2.0",
        image: "images/chat.jpg",
        shape: "wide",
        size: [1366, 768],
        team: [
            { who: "arnab", role: "Backend", type: "backend" },
            { who: "anubhab", role: "Frontend", type: "frontend" }
        ],
        desc: `A student-focused AI learning companion with a clean, distraction-free chat interface.<br><br>
<ul>
  <li><b>Multiple AI Modes:</b> Switch between Normal, Smart, Thinker and Speedy depending on the question.</li>
  <li><b>Markdown & Math Support:</b> Answers render neatly, including formatted text and mathematical expressions.</li>
  <li><b>Flask Backend:</b> A Python and Flask backend connects the chat interface to the AI.</li>
  <li><b>Installable PWA:</b> Built as a progressive web app so it feels like a real app on your phone.</li>
</ul>`,
        tech: ["JavaScript", "Flask", "AI", "PWA"],
        demo: "https://duttaanubhab777-code.github.io/Beyonder-Ai-2.0/",
        code: "https://github.com/arnabadhikari777/Beyonder-Ai-2.0"
    },

    /* ---------------- My Projects (Solo) ---------------- */
    {
        title: "My Money Manager",
        image: "images/money-manager-dashboard.png",
        shape: "square",
        size: [429, 444],
        desc: `A full personal-finance PWA that keeps every account, budget and reminder in one place.<br><br>
<ul>
  <li><b>Multi-Account Tracking:</b> Manage Bank, UPI and Cash together, with real note denominations for cash.</li>
  <li><b>Budgets & Statistics:</b> Set budgets and see where your money goes through built-in statistics.</li>
  <li><b>Encrypted Notes:</b> Keep private notes stored in encrypted form.</li>
  <li><b>Backup, Restore & Reminders:</b> Back up and restore your data, and get push reminders.</li>
  <li><b>Solid Backend:</b> Built with Flask, SQLAlchemy and SQLite, and installable as a PWA.</li>
</ul>`,
        tech: ["Python", "Flask", "SQLite", "PWA"],
        code: "https://github.com/arnabadhikari777/my_money_maneger"
    },
    {
        title: "Nebula Secret",
        image: "images/nebula.jpg",
        shape: "phone",
        size: [716, 1416],
        desc: `A secure steganography and image-forensics suite: hide secret messages inside images, or inspect any photo.<br><br>
<ul>
  <li><b>LSB Steganography:</b> Hide text inside a PNG or JPG image and decode it back whenever you need.</li>
  <li><b>EXIF Forensics:</b> Reveal camera details, GPS location (with a map link) and capture time.</li>
  <li><b>Privacy First:</b> Everything is processed in memory, so no files are ever saved on the server.</li>
  <li><b>Flask & Pillow:</b> Python backend with Pillow for image processing, served through Gunicorn.</li>
  <li><b>Live Deployment:</b> Hosted on Render and ready to use in the browser.</li>
</ul>`,
        tech: ["Python", "Flask", "Steganography", "Security", "Live"],
        demo: "https://nebula-secret.onrender.com",
        code: "https://github.com/arnabadhikari777/Nebula-Secret"
    },
    {
        title: "Nebula QR Re-generator",
        image: "images/nebula-qr.png",
        shape: "wide",
        size: [955, 597],
        desc: `A smart payment and brand QR re-engineering studio that turns any plain QR into a branded one.<br><br>
<ul>
  <li><b>Upload Any QR:</b> Start from an existing payment QR code instead of building one from scratch.</li>
  <li><b>Custom Colors:</b> Restyle the QR with your own colours so it matches your brand.</li>
  <li><b>Logo Embedding:</b> Place your logo inside the code for a professional look.</li>
  <li><b>Clean Regeneration:</b> Get a fresh, tidy, branded QR code ready to download and share.</li>
</ul>`,
        tech: ["Python", "QR Code", "Utility"],
        code: "https://github.com/arnabadhikari777/Nebula-QR-Re-generator"
    }
];

/* =====================================================
   Render Logic (Advanced Frontend Design by Anubhab)
   ===================================================== */

const ICON_RULES = [
    [/\bAI\b|modes/i, "fa-robot"],
    [/encrypt|privacy|secure/i, "fa-shield-halved"],
    [/forensic|exif/i, "fa-magnifying-glass"],
    [/stego|lsb/i, "fa-eye-slash"],
    [/backup/i, "fa-cloud-arrow-up"],
    [/budget|statistic/i, "fa-chart-pie"],
    [/account/i, "fa-wallet"],
    [/formula|equation|math/i, "fa-square-root-variable"],
    [/visual/i, "fa-chart-line"],
    [/headline|news/i, "fa-newspaper"],
    [/markdown/i, "fa-code"],
    [/pwa|install/i, "fa-mobile-screen"],
    [/logo|color|colour|upload/i, "fa-palette"],
    [/regenerat|qr/i, "fa-qrcode"],
    [/deploy|live|hosting/i, "fa-rocket"],
    [/frontend|interface/i, "fa-wand-magic-sparkles"],
    [/backend|python|flask|solid/i, "fa-server"]
];
const pickIcon = t => (ICON_RULES.find(([re]) => re.test(t)) || [0, "fa-circle-check"])[1];

/* Thumbnail generator */
const thumbOf = s => s;  // use original image (no thumb folder)

/* Parse HTML description */
function parseDesc(html) {
    const box = document.createElement("div");
    box.innerHTML = html;
    const lead = (box.childNodes[0].textContent || "").trim();
    const items = [...box.querySelectorAll("li")].map(li => {
        const b = li.querySelector("b");
        const title = b ? b.textContent.replace(/:\s*$/, "") : "";
        if (b) b.remove();
        return { title, text: li.textContent.trim() };
    });
    return { lead, items };
}

/* Card Component Generator */
function cardHTML(p, i) {
    const { lead, items } = parseDesc(p.desc);
    const isTeam = !!p.team;
    const ribbon = isTeam ? `<span class="featured-ribbon">TEAM PROJECT</span>` : "";
    const kind = isTeam ? "" : `<span class="kind"><i class="fa-solid fa-bolt"></i> SOLO BUILD</span>`;

    const creators = isTeam
        ? `<div class="creators-box">
            <p class="creators-title"><i class="fa-solid fa-laptop-code"></i> Creators</p>
            ${p.team.map(m => {
                const c = PEOPLE[m.who];
                return `<div class="creator-row">
                  <div class="creator-who">
                    <span class="creator-name"><i class="fa-solid ${c.icon}" style="color:${c.color}"></i> ${c.name}</span>
                    <span class="role-tag ${m.type}">${m.role}</span>
                  </div>
                  <a href="${c.github}" target="_blank" rel="noopener" class="github-link"><i class="fa-brands fa-github"></i> GitHub</a>
                </div>`;
            }).join("")}
          </div>`
        : "";

    const feats = items
        .map((it, n) => `<li style="--i:${n}">
            <span class="feat-ico"><i class="fa-solid ${pickIcon(it.title)}"></i></span>
            <div><b>${it.title}</b><span class="ft">${it.text}</span></div>
          </li>`)
        .join("");

    const links = [
        p.demo && `<a href="${p.demo}" target="_blank" rel="noopener" class="lnk-main"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>`,
        p.code && `<a href="${p.code}" target="_blank" rel="noopener" class="${p.demo ? "lnk-alt" : "lnk-main"}"><i class="fa-brands fa-github"></i> Code</a>`
    ].filter(Boolean).join("");

    const bar = p.shape === "wide" ? `<div class="win-bar"><i></i><i></i><i></i></div>` : "";
    const delay = (0.05 + i * 0.05).toFixed(2);
    const num = String(i + 1).padStart(2, "0");

    return `
      <article class="project-card reveal-up tilt-card ${isTeam ? "team" : "solo"}" style="--delay:${delay}s">
        ${ribbon}
        <div class="project-img">
          <div class="stage-bg"></div>
          <span class="idx">${num}</span>
          <div class="frame frame-${p.shape || "phone"}" data-full="${p.image}" data-title="${p.title}">
            ${bar}
            <img src="${thumbOf(p.image)}" alt="${p.title} screenshot" width="${p.size[0]}" height="${p.size[1]}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${p.image}'">
          </div>
          <button class="zoom-chip" type="button" aria-label="View ${p.title} screenshot full size"><i class="fa-solid fa-expand"></i> View full</button>
        </div>
        <div class="project-body">
          <div class="pi-head"><h3>${p.title}</h3>${kind}</div>
          <p class="lead">${lead}</p>
          ${creators}
          <div class="project-tags">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
          <button class="more-btn" type="button" aria-expanded="false"><span>Read more</span> <i class="fa-solid fa-chevron-down"></i></button>
          <div class="details"><div class="details-inner"><ul class="feat-list">${feats}</ul></div></div>
          <div class="project-links">${links}</div>
        </div>
      </article>`;
}

/* DOM Insertion */
const collabGrid = document.getElementById("collab-grid");
const projectsGrid = document.getElementById("projects-grid");
if (collabGrid) collabGrid.innerHTML = PROJECTS.filter(p => p.team).map(cardHTML).join("");
if (projectsGrid) projectsGrid.innerHTML = PROJECTS.filter(p => !p.team).map(cardHTML).join("");

/* ---------- Interactive Features (Lightbox & Read More) ---------- */
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = `<button class="lb-close" type="button" aria-label="Close"><i class="fa-solid fa-xmark"></i></button><img alt=""><p class="lb-cap"></p>`;
document.body.appendChild(lightbox);

function openLightbox(src, title) {
    lightbox.querySelector("img").src = src;
    lightbox.querySelector(".lb-cap").textContent = title;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
}
function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
}
lightbox.addEventListener("click", closeLightbox);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

document.addEventListener("click", e => {
    const more = e.target.closest(".more-btn");
    if (more) {
        const card = more.closest(".project-card");
        const open = card.classList.toggle("open");
        more.setAttribute("aria-expanded", open);
        more.querySelector("span").textContent = open ? "Show less" : "Read more";
        return;
    }
    const view = e.target.closest(".frame, .zoom-chip");
    if (view) {
        const frame = view.closest(".project-card").querySelector(".frame");
        openLightbox(frame.dataset.full, frame.dataset.title);
    }
});

/* Mouse Spotlight Effect (Desktop) */
if (matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".project-card").forEach(card => {
        let raf = 0, x = 0, y = 0;
        card.addEventListener("pointermove", e => {
            x = e.clientX;
            y = e.clientY;
            if (raf) return;
            raf = requestAnimationFrame(() => {
                const r = card.getBoundingClientRect();
                card.style.setProperty("--mx", x - r.left + "px");
                card.style.setProperty("--my", y - r.top + "px");
                raf = 0;
            });
        });
    });
}