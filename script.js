/* script.js — Portfolio Samir El Taibe · v2.0 (étape 5)
   Aucune dépendance. Le HTML est complet sans ce script (FR, univers Comptabilité). */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var body = document.body;
  var FR = window.CONTENT_FR || {};
  var EN = window.CONTENT_EN || {};
  var MANIFEST = window.CV_MANIFEST || [];
  var RECO = window.CV_RECO || {};
  var lang = "fr";
  try { lang = localStorage.getItem("lang") === "en" ? "en" : "fr"; } catch (e) {}

  /* ---------- i18n : le FR statique vit dans le HTML ; on le mémorise pour y revenir ---------- */
  var frSnapshot = {};
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    frSnapshot[el.getAttribute("data-i18n")] = el.textContent;
  });
  function t(key) {
    if (lang === "en") return EN[key] !== undefined ? EN[key] : (frSnapshot[key] || FR[key] || "");
    return frSnapshot[key] !== undefined ? frSnapshot[key] : (FR[key] || "");
  }
  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      var v = (lang === "en") ? EN[k] : frSnapshot[k];
      if (v !== undefined) el.textContent = v;
    });
    document.title = t("meta.title") || document.title;
    var md = document.querySelector('meta[name="description"]');
    if (md && t("meta.desc")) md.setAttribute("content", t("meta.desc"));
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    renderCV();
  }

  /* ---------- CV : recommandations par univers et par langue ---------- */
  function cvById(id) {
    for (var i = 0; i < MANIFEST.length; i++) if (MANIFEST[i].id === id) return MANIFEST[i];
    return null;
  }
  function href(cv) { return cv && cv.actif && cv.fichier ? "assets/cv/" + cv.fichier : null; }
  function renderCV() {
    var angle = body.getAttribute("data-angle") || "cpt";
    var enCv = cvById("experienced-en");
    var conf = RECO[angle] || {};
    var reco = (lang === "en") ? enCv : cvById(conf.reco);
    var alt = (lang === "en") ? null : cvById(conf.alt);

    /* CTA secondaire du hero */
    var cta = document.getElementById("cta-cv");
    if (cta) {
      if (angle === "hum" && lang !== "en") {
        cta.textContent = t("cv.cibles");
        cta.setAttribute("href", "#tous-les-cv");
        cta.removeAttribute("download");
      } else {
        var target = reco || cvById((RECO.hum || {}).repli);
        cta.textContent = t("cv.reco") + " " + (target ? target.label : "");
        if (href(target)) { cta.setAttribute("href", href(target)); cta.setAttribute("download", ""); }
      }
    }
    /* Blocs d'univers cpt / fin */
    ["cpt", "fin"].forEach(function (u) {
      var box = document.getElementById("cv-" + u);
      if (!box) return;
      var c = RECO[u] || {};
      var r = (lang === "en") ? enCv : cvById(c.reco);
      var a = (lang === "en") ? null : cvById(c.alt);
      var html = "";
      if (r && href(r)) html += '<a class="btn primary" download href="' + href(r) + '"><span>' + t("cv.reco") + " " + r.label + "</span></a>";
      if (a && href(a)) html += '<a class="btn" download href="' + href(a) + '"><span>' + t("cv.alt") + " " + a.label + "</span></a>";
      html += '<a class="btn" href="#tous-les-cv"><span>' + t("cv.autres") + "</span></a>";
      if (lang === "en") html += '<p class="note-en" style="flex-basis:100%">' + t("cv.note_en") + "</p>";
      box.innerHTML = html;
    });
    /* Liste complète par famille */
    var all = document.getElementById("cv-familles");
    if (all) {
      var fams = [["accounting", t("fam.accounting") || "Comptabilité"], ["finance", t("fam.finance") || "Finance"],
                  ["process", t("fam.process") || "Processus et ERP"], ["english", t("fam.english") || "Anglais"]];
      var out = "";
      fams.forEach(function (f) {
        var items = MANIFEST.filter(function (c) { return c.actif && c.famille === f[0]; })
          .sort(function (a, b) { return a.priorite - b.priorite; });
        if (!items.length) return;
        out += '<div class="fam"><b>' + f[1] + "</b>";
        items.forEach(function (c) {
          out += '<a class="print-url" download href="' + href(c) + '">' + c.label + "</a>";
        });
        out += "</div>";
      });
      all.innerHTML = out;
    }
    /* Contact et 60 secondes : action principale */
    var target2 = (lang === "en") ? enCv : (cvById((RECO[angle] || {}).reco) || cvById((RECO.hum || {}).repli));
    var hc = document.getElementById("contact-cv");
    if (hc) {
      hc.textContent = t("cv.reco") + " " + (target2 ? target2.label : "");
      if (href(target2)) { hc.setAttribute("href", href(target2)); hc.setAttribute("download", ""); }
    }
    var hc2 = document.getElementById("contact-cv-2");
    if (hc2) {
      var s2 = hc2.querySelector("span");
      if (s2) s2.textContent = t("cv.reco") + " " + (target2 ? target2.label : "");
      if (href(target2)) { hc2.setAttribute("href", href(target2)); hc2.setAttribute("download", ""); }
    }
  }

  /* ---------- univers ---------- */
  var wipe = document.getElementById("wipe");
  var ALIAS = { comptabilite: "cpt", finance: "fin", samir: "hum", cpt: "cpt", fin: "fin", hum: "hum" };
  function setAngle(a, animate) {
    body.setAttribute("data-angle", a);
    document.querySelectorAll(".angle").forEach(function (x) { x.setAttribute("aria-selected", String(x.dataset.set === a)); });
    document.querySelectorAll(".panel").forEach(function (x) { x.setAttribute("aria-pressed", String(x.dataset.set === a)); });
    try { history.replaceState(null, "", "#" + a); } catch (e) {}
    if (animate && !reduce && wipe) { wipe.classList.remove("go"); void wipe.offsetWidth; wipe.classList.add("go"); }
    renderCV();
  }
  document.querySelectorAll(".angle,.panel").forEach(function (b) {
    b.addEventListener("click", function () { setAngle(b.dataset.set, true); });
  });

  /* ---------- grec : uniquement le H1, jamais bloquant ---------- */
  var GREEK = "ΑΠΟ ΤΗ ΛΟΓΙΣΤΙΚΗ ΣΤΗΝ ΑΠΟΦΑΣΗ";
  var GLYPHS = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩABCDEFHIKMNOPRSTUX";
  function h1Target() {
    return (lang === "en" && EN["hero.h1"]) ? EN["hero.h1"] : (frSnapshot["hero.h1"] || "DE LA COMPTABILITÉ À LA DÉCISION");
  }
  function morphH1(delay) {
    var h1 = document.getElementById("titre");
    if (!h1) return;
    var target = h1Target();
    if (reduce) { h1.textContent = target; return; }
    h1.textContent = GREEK;
    setTimeout(function () {
      var start = null, DUR = 560;
      function frame(ts) {
        if (!start) start = ts;
        var k = Math.min((ts - start) / DUR, 1);
        var done = Math.floor(target.length * k), out = target.slice(0, done);
        for (var i = done; i < target.length; i++) {
          var ch = target[i];
          out += (ch === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]);
        }
        h1.textContent = out;
        if (k < 1) requestAnimationFrame(frame); else h1.textContent = target;
      }
      requestAnimationFrame(frame);
    }, delay == null ? 800 : delay);
  }
  /* entrée en scène du hero, premier chargement de la session, jamais bloquante */
  function stageIn() {
    var order = [".hero__in .eyebrow", ".hero .mono", ".hero__in h1", ".hero__in .sub",
                 ".hero__in .pres", ".hero__in .reperes", ".hero__in .cta",
                 ".hero__in .manifesto", ".hero__in .hero__contact"];
    var delays = [0, 120, 260, 720, 870, 1020, 1170, 1320, 1320];
    order.forEach(function (sel, i) {
      var el = document.querySelector(sel);
      if (el) setTimeout(function () { el.classList.add("st-in"); }, delays[i]);
    });
    document.querySelectorAll(".dash").forEach(function (d) {
      setTimeout(function () { d.classList.add("st-in"); }, 1470);
    });
    setTimeout(function () { document.documentElement.classList.remove("intro"); }, 2400);
  }
  var greeted = false;
  try { greeted = !!sessionStorage.getItem("gr"); if (!greeted) sessionStorage.setItem("gr", "1"); } catch (e) {}

  /* ---------- langue ---------- */
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      if (b.dataset.lang === lang) return;
      lang = b.dataset.lang;
      try { localStorage.setItem("lang", lang); } catch (e) {}
      applyLang();
      morphH1(); /* rejouée après un changement volontaire de langue */
    });
  });

  /* ---------- révélation au défilement ---------- */
  var items = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- impression ---------- */
  var pr = document.getElementById("print");
  if (pr) pr.addEventListener("click", function () { window.print(); });

  /* ---------- initialisation ---------- */
  var h = ALIAS[(location.hash || "").replace("#", "").toLowerCase()];
  if (lang === "en") applyLang(); else renderCV();
  if (h) setAngle(h, false); else setAngle("cpt", false);
  if (!greeted) morphH1(document.documentElement.classList.contains("intro") ? 1060 : 800);
  if (document.documentElement.classList.contains("intro")) stageIn();
})();
