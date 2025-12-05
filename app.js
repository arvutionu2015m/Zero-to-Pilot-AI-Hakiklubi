/* Zero to Pilot AI Häkiklubi - front-end demo logic
   This is intentionally deterministic and offline-friendly.
*/

const EXAMPLES = [
  {
    id: "ex01",
    title: "Klienditoe e-kirjade triage (telekom)",
    domain: "klienditugi / telekom",
    problem: "Klienditoe inboxis on suur maht eestikeelseid ja venekeelseid e-kirju. Vastamisajad venivad, teemapõhine suunamine on käsitsi ning SLA rikkumised kasvavad.",
    constraints: "GDPR, tundlikud isikuandmed",
    dataState: "palju teksti ja dokumente"
  },
  {
    id: "ex02",
    title: "Hooldusgraafiku ennustus (tootmine)",
    domain: "tootmine",
    problem: "Seadmete rikkeid avastatakse hilja. Hooldus tehakse kalendri järgi, mitte tegeliku kulumise järgi. Tulemuseks on seisakud ja varuosade ülekulu.",
    constraints: "legacy MES, piiratud sensori kvaliteet",
    dataState: "reaalajas sensor-/logiandmed"
  },
  {
    id: "ex03",
    title: "Ostutellimuste automaatkontroll (jaekaubandus)",
    domain: "jaekaubandus",
    problem: "Ostutellimuste sisestamisel tekib palju vigu: valed kogused, hinnad, tarneajad. Kontroll on killustunud ja sõltub ühe-kahe inimese kogemusest.",
    constraints: "ERP integratsioon",
    dataState: "olemas keskne andmeladu"
  },
  {
    id: "ex04",
    title: "Arvete andmekaevandus (finants)",
    domain: "finants / back-office",
    problem: "Sissetulevad arved on erinevates vormingutes. Andmete käsitsi väljavõtmine võtab palju aega ja vigade parandamine on kallis.",
    constraints: "raamatupidamisstandardid, auditjälg",
    dataState: "palju teksti ja dokumente"
  },
  {
    id: "ex05",
    title: "Tarneahela riskide varajane hoiatus (logistika)",
    domain: "logistika",
    problem: "Hilinemised ja tarnija probleemid jõuavad juhtideni hilja. Puudub süsteemne vaade riskisignaalidele (ilm, geopoliitika, tarnija finantsid).",
    constraints: "välisandmete litsentsid",
    dataState: "killustunud excelid ja e-kirjad"
  },
  {
    id: "ex06",
    title: "Personaliosakonna teadmusekeskus (HR)",
    domain: "HR",
    problem: "HR saab pidevalt korduvaid küsimusi puhkuste, hüvitiste ja sisereeglite kohta. Vastused on eri dokumentides ja uued töötajad ei leia infot.",
    constraints: "rollipõhine ligipääs",
    dataState: "palju teksti ja dokumente"
  },
  {
    id: "ex07",
    title: "Kvaliteedivigade juurpõhjuse abi (tootmine)",
    domain: "tootmine",
    problem: "Kvaliteedivigu logitakse käsitsi, kuid mustreid ei analüüsita. Juurpõhjuse leidmine võtab nädalaid ja korduvad vead jäävad püsima.",
    constraints: "madal andmete standardiseeritus",
    dataState: "olemas keskne andmeladu"
  },
  {
    id: "ex08",
    title: "Haigla vastuvõtu koormuse prognoos (tervis)",
    domain: "tervis",
    problem: "Erakorralise meditsiini koormus on kõikuva mustriga. Ressursijaotus on reaktiivne ja ootajad pahased.",
    constraints: "andmekaitse, kriitiline töökindlus",
    dataState: "olemas keskne andmeladu"
  },
  {
    id: "ex09",
    title: "Müügikõnede kokkuvõtted ja next-best-action (B2B)",
    domain: "B2B müük",
    problem: "Müügiesindajad ei jõua CRM-i sisestada kõnede sisu ja järgmisi samme. Pipeline’i kvaliteet kannatab.",
    constraints: "CRM reeglid",
    dataState: "palju teksti ja dokumente"
  },
  {
    id: "ex10",
    title: "Nõuete vastavuse dokumentide kontroll (avalik sektor)",
    domain: "avalik sektor",
    problem: "Hanked nõuavad mahukat dokumentatsiooni. Vastavuse kontroll on ajamahukas ja vigadest tulenevad vaidlused on kallid.",
    constraints: "juriidiline tõendatavus",
    dataState: "palju teksti ja dokumente"
  },
  {
    id: "ex11",
    title: "E-poe tagastuste põhjuse analüüs (e-commerce)",
    domain: "e-commerce",
    problem: "Tagastuste osakaal on kõrge. Põhjused on kirjas vabatekstina ja neid ei seostata tooteandmete ning kampaaniatega.",
    constraints: "mitu müügikanalit",
    dataState: "olemas keskne andmeladu"
  },
  {
    id: "ex12",
    title: "Energiakulu optimeerimine hoonetes",
    domain: "energia / kinnisvara",
    problem: "Hoonete energiakulu on ebaühtlane. Puudub selge seos kasutusmustrite, ilmastiku ja seadistuste vahel.",
    constraints: "BMS tootjapõhised lukud",
    dataState: "reaalajas sensor-/logiandmed"
  },
  {
    id: "ex13",
    title: "Õigustekstide sisemine otsing (legal)",
    domain: "legal",
    problem: "Juristid kulutavad liiga palju aega varasemate lepingute ja kohtupraktika leidmisele organisatsiooni siseselt.",
    constraints: "konfidentsiaalsus",
    dataState: "palju teksti ja dokumente"
  },
  {
    id: "ex14",
    title: "Pettuse riskiskoor (fintech)",
    domain: "fintech",
    problem: "Maksete pettusemustrid muutuvad kiiresti. Reeglipõhine süsteem ei püüa uusi skeeme piisavalt varakult kinni.",
    constraints: "madal vale-positiivsete taluvus",
    dataState: "olemas keskne andmeladu"
  },
  {
    id: "ex15",
    title: "Sotsiaalmeedia maine jälgimine (bränd)",
    domain: "turundus",
    problem: "Brändi mainedžungel on killustunud: kommentaarid, arvustused, foorumid. Reageerimine on hiline.",
    constraints: "keelte mitmekesisus",
    dataState: "killustunud excelid ja e-kirjad"
  },
  {
    id: "ex16",
    title: "Tööohutuse rikkumiste varajane tuvastus",
    domain: "tööohutus",
    problem: "Tööohutuse vaatlused tehakse paberil ja fotodega. Riskid jäävad analüüsimata ning auditid leiavad korduvaid mustreid.",
    constraints: "muutuste vastuseis",
    dataState: "palju teksti ja dokumente"
  },
  {
    id: "ex17",
    title: "Koolituste personaliseeritud soovitused",
    domain: "L&D",
    problem: "Töötajatele pakutakse sama koolituskataloogi. Oskuste lõhed ei vähene piisavalt kiiresti.",
    constraints: "oskuste raamistik puudulik",
    dataState: "killustunud excelid ja e-kirjad"
  },
  {
    id: "ex18",
    title: "Laoseisu täiendamise soovitaja",
    domain: "jaekaubandus",
    problem: "Laoseisu täiendamine on osaliselt käsitsi ja sõltub kogemusest. Tulemuseks on ülevarumine ja out-of-stock.",
    constraints: "hooajalisus",
    dataState: "olemas keskne andmeladu"
  },
  {
    id: "ex19",
    title: "IT tugipiletite automaatsed lahendused",
    domain: "ITSM",
    problem: "IT piletite lahendamine võtab liiga kaua. Suur osa on korduvad standardprobleemid, kuid teadmusebaas on raskesti leitav.",
    constraints: "ligipääs sisemistele süsteemidele",
    dataState: "palju teksti ja dokumente"
  },
  {
    id: "ex20",
    title: "Krediidiriski portfelli selgitused",
    domain: "pangandus",
    problem: "Krediidiriski mudel annab skoori, kuid äripoolel on raske mõista, mis tegurid otsust mõjutasid ja mida kliendiga teha.",
    constraints: "regulatiivne läbipaistvus",
    dataState: "olemas keskne andmeladu"
  },
  {
    id: "ex21",
    title: "Tooteinfo automaatne rikastamine (PIM)",
    domain: "e-commerce",
    problem: "Tootekirjeldused on ebaühtlased ja mitmes keeles puudulikud. Käsitsi rikastamine ei skaleeru.",
    constraints: "brändi toon, kvaliteedikontroll",
    dataState: "palju teksti ja dokumente"
  },
  {
    id: "ex22",
    title: "Õpilaste varajane väljalangemise risk",
    domain: "haridus",
    problem: "Õppeasutusel puudub varajane signaal, millised õppijad vajavad tuge. Abimeetmed tulevad liiga hilja.",
    constraints: "andmete tundlikkus",
    dataState: "olemas keskne andmeladu"
  },
  {
    id: "ex23",
    title: "Kampaaniate creative-brief generaator",
    domain: "turundus",
    problem: "Kampaania briefid on ebastandardsed. Loovtiim saab liiga vähe konteksti ning iteratsioonide arv kasvab.",
    constraints: "mitu brändi korraga",
    dataState: "killustunud excelid ja e-kirjad"
  },
  {
    id: "ex24",
    title: "Klienditeekonna anomaaliad (SaaS)",
    domain: "SaaS",
    problem: "Kasutajate onboarding’u drop-off on kõrge, kuid põhjus ei ole selge. Analüütika on olemas, kuid tõlgendamine on aeglane.",
    constraints: "mitu tooteversiooni",
    dataState: "olemas keskne andmeladu"
  },
  {
    id: "ex25",
    title: "Dokumendipõhine hanke-eelhindamine",
    domain: "ehitus / hanked",
    problem: "Pakkumiste eelhindamine nõuab sadu lehekülgi dokumente. Esmane sobivuse sõelumine on käsitsi ja võtab nädalaid.",
    constraints: "juriidiline vastutus",
    dataState: "palju teksti ja dokumente"
  }
];

const DEFAULT_PILOT_TEMPLATES = [
  {
    key: "assist",
    name: "LLM-põhine tööjuhendaja/assistent",
    when: ["palju teksti", "dokument"],
    flow: [
      "Kasutaja kirjeldab küsimuse või juhtumi",
      "Assistent otsib/viitab sisemistele allikatele",
      "Annab vastuse + viited + soovitatud järgmised sammud",
      "Logib kasutuse ja tagasiside"
    ],
    inputs: [
      "Sisemised poliitikad/KB/dokumendid",
      "Kasutuslogid ja tagasiside",
      "Rollipõhine ligipääs"
    ]
  },
  {
    key: "extract",
    name: "Dokumentide struktureerimine ja väljavõte",
    when: ["arve", "leping", "vorm", "PDF", "dokument"],
    flow: [
      "Dokument laetakse üles või sünkroniseeritakse",
      "Mudel tuvastab tüübi ja väljad",
      "Ekstraktib andmed + valideerib reeglitega",
      "Edastab ERP/CRM/raamatupidamisse"
    ],
    inputs: [
      "Näidisdokumendid",
      "Väljade skeem ja kontrollreeglid",
      "Sihtsüsteemi API"
    ]
  },
  {
    key: "predict",
    name: "Ennustus + otsustustugi",
    when: ["seisak", "risk", "prognoos", "tarneahel", "krediit", "pettus"],
    flow: [
      "Koondab ajaloolised ja reaalaja andmed",
      "Ehitab/kalibreerib riskimudeli",
      "Kuvab skoori + selgitused",
      "Käivitab varajased hoiatused"
    ],
    inputs: [
      "Ajaloolised sündmused",
      "Reaalaja signaalid",
      "Ärireeglid eskaleerimiseks"
    ]
  },
  {
    key: "auto",
    name: "Poolautomaatne töövoo automatiseerimine",
    when: ["käsitsi", "pilet", "tellimus", "kontroll", "sisest"],
    flow: [
      "Töö siseneb ühtsesse järjekorda",
      "Mudel teeb klassifitseerimise ja soovituse",
      "Inimene kinnitab (human-in-the-loop)",
      "Süsteem teeb muudatuse ja logib"
    ],
    inputs: [
      "Töövoo kirjeldus",
      "Otsuseõigused ja auditlogi nõuded",
      "Integratsioonid (ERP/ITSM/CRM)"
    ]
  },
  {
    key: "insight",
    name: "Juurpõhjuse ja mustrite analüütika",
    when: ["kvaliteet", "tagastus", "põhjus", "muster"],
    flow: [
      "Koondab sündmused + vabatekstid",
      "Normaliseerib kategooriad",
      "Leiustab korduvad mustrid",
      "Soovitab parandust ja eksperimenti"
    ],
    inputs: [
      "Sündmuste logid",
      "Vabateksti väljad",
      "Toote/protsessi metaandmed"
    ]
  }
];

function $(id){ return document.getElementById(id); }

function getSelectedMetrics(){
  return Array.from(document.querySelectorAll(".metric:checked")).map(x => x.value);
}

function normalizeText(t){
  return (t || "").toLowerCase();
}

function pickTemplates(problemText){
  const text = normalizeText(problemText);
  const scored = DEFAULT_PILOT_TEMPLATES.map(tpl => {
    let score = 0;
    tpl.when.forEach(w => { if(text.includes(normalizeText(w))) score += 2; });
    if(tpl.key === "assist" && (text.includes("klienditugi") || text.includes("hr") || text.includes("it"))) score += 1;
    if(tpl.key === "predict" && (text.includes("risk") || text.includes("ennust") || text.includes("seisak"))) score += 1;
    if(tpl.key === "auto" && (text.includes("käsitsi") || text.includes("kontroll") || text.includes("sisest"))) score += 1;
    return { tpl, score };
  }).sort((a,b) => b.score - a.score);

  // Ensure variety and 3–5 items
  const chosen = [];
  for(const s of scored){
    if(chosen.length >= 5) break;
    if(s.score > 0 || chosen.length < 3){
      if(!chosen.find(c => c.key === s.tpl.key)) chosen.push(s.tpl);
    }
  }
  return chosen.slice(0, Math.max(3, Math.min(5, chosen.length)));
}

function buildPilotCard(tpl, ctx){
  const { domain, horizon, dataState, constraints, metrics, problemText } = ctx;

  const title = tpl.name;
  const subtitleBits = [
    domain ? domain : "valdkond täpsustamata",
    horizon,
    dataState
  ].filter(Boolean);

  const metricLine = metrics.length ? metrics.join(", ") : "mõõdikud täpsustamata";

  const riskNote = constraints
    ? `Peamised riskid/piirangud: ${constraints}.`
    : "Peamised riskid/piirangud: defineerimata (piloodi planeerimisel täpsustada).";

  const valueHypothesis = buildValueHypothesis(tpl.key, metricLine);

  const flowItems = tpl.flow.map(s => `<li>${escapeHtml(s)}</li>`).join("");

  const inputsItems = tpl.inputs.map(s => `<li>${escapeHtml(s)}</li>`).join("");

  const problemHook = problemText ? `Sihib konkreetset valu: ${problemText.trim()}` : "Sihib protsessi või teenuse tuumikvalu.";

  const id = `pilot-${tpl.key}-${Math.random().toString(36).slice(2,8)}`;

  return `
    <div class="card pilot-card shadow-sm">
      <div class="card-body p-4">
        <div class="d-flex flex-wrap align-items-center gap-2 mb-2">
          <span class="badge badge-soft">Pilot</span>
          <span class="small text-secondary">${escapeHtml(subtitleBits.join(" · "))}</span>
        </div>
        <h4 class="h5 fw-semibold">${escapeHtml(title)}</h4>
        <p class="small text-secondary mb-3">${escapeHtml(problemHook)}</p>

        <div class="row g-3">
          <div class="col-md-6">
            <div class="small text-secondary">Esmane kasutusvoog</div>
            <ul class="mb-0">${flowItems}</ul>
          </div>
          <div class="col-md-6">
            <div class="small text-secondary">Vajalik sisend</div>
            <ul class="mb-0">${inputsItems}</ul>
          </div>
        </div>

        <hr class="border-light opacity-10 my-3">

        <div class="row g-2">
          <div class="col-lg-6">
            <div class="small text-secondary">Väärtuse hüpotees</div>
            <div>${escapeHtml(valueHypothesis)}</div>
          </div>
          <div class="col-lg-6">
            <div class="small text-secondary">Mõõdikud</div>
            <div>${escapeHtml(metricLine)}</div>
          </div>
        </div>

        <div class="small text-secondary mt-3">${escapeHtml(riskNote)}</div>

        <div class="d-flex flex-wrap gap-2 mt-3">
          <button class="btn btn-sm btn-outline-info" data-action="copy-pilot" data-target="${id}">
            Kopeeri kokkuvõte
          </button>
          <button class="btn btn-sm btn-outline-light" data-action="toggle-details" data-target="${id}">
            Näita/peida detail
          </button>
        </div>

        <div id="${id}" class="pilot-hidden mt-3">
          <div class="small text-secondary">Piloodi eesmärk (MVP)</div>
          <ul class="small mb-0">
            <li>Teostatavus: kas suudame selle valu 8–12 nädalaga mõõdetavalt vähendada?</li>
            <li>Andmed: milline minimaalne andmekomplekt on vajalik?</li>
            <li>Inimene ahelas: kus on kinnituskohad, et risk püsiks kontrolli all?</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

function buildValueHypothesis(key, metricLine){
  switch(key){
    case "assist":
      return `Kiirendab otsingut ja otsustamist; eeldatav mõju: ${metricLine}.`;
    case "extract":
      return `Vähendab käsitööd ja vigu dokumendiflow’s; eeldatav mõju: ${metricLine}.`;
    case "predict":
      return `Annab varajase hoiatuse ja parema ressursiplaneerimise; eeldatav mõju: ${metricLine}.`;
    case "auto":
      return `Standardiseerib otsused ja lühendab tsükliaega; eeldatav mõju: ${metricLine}.`;
    case "insight":
      return `Tuvastab korduvad mustrid ja suunab protsessi parandusi; eeldatav mõju: ${metricLine}.`;
    default:
      return `Eeldatav mõju: ${metricLine}.`;
  }
}

function escapeHtml(str){
  return String(str ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function renderPilots(){
  const problemText = $("problemText").value.trim();
  const domain = $("domain").value.trim();
  const horizon = $("horizon").value;
  const dataState = $("dataState").value;
  const constraints = $("constraints").value.trim();
  const metrics = getSelectedMetrics();

  const templates = pickTemplates(problemText || domain || dataState);

  const ctx = { problemText, domain, horizon, dataState, constraints, metrics };

  const html = templates.map(tpl => buildPilotCard(tpl, ctx)).join("");
  $("pilotsContainer").innerHTML = html;
  $("pilotCountBadge").textContent = String(templates.length);

  attachPilotCardHandlers();
}

function attachPilotCardHandlers(){
  const container = $("pilotsContainer");
  container.querySelectorAll("button[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action;
      const targetId = btn.dataset.target;
      const targetEl = document.getElementById(targetId);

      if(action === "toggle-details" && targetEl){
        targetEl.classList.toggle("pilot-hidden");
      }

      if(action === "copy-pilot"){
        const card = btn.closest(".card");
        if(!card) return;
        const title = card.querySelector("h4")?.innerText ?? "Pilot";
        const textParts = [];
        textParts.push(title);
        textParts.push("");
        const lists = card.querySelectorAll("ul");
        lists.forEach(ul => {
          const label = ul.previousElementSibling?.innerText;
          if(label) textParts.push(label + ":");
          ul.querySelectorAll("li").forEach(li => textParts.push("• " + li.innerText));
          textParts.push("");
        });
        copyToClipboard(textParts.join("\n").trim());
        toast("Pilot kokkuvõte kopeeritud.");
      }
    });
  });
}

function buildHackathonPrompts(){
  const problemText = $("problemText").value.trim() || "[kirjelda äriprobleem siia]";
  const domain = $("domain").value.trim() || "[valdkond]";
  const horizon = $("horizon").value;
  const dataState = $("dataState").value;
  const constraints = $("constraints").value.trim() || "[piirangud]";
  const metrics = getSelectedMetrics();
  const metricsText = metrics.length ? metrics.join(", ") : "[mõõdikud]";

  // Prompts are designed to be copy-paste-ready for internal hackathons
  return [
`PROMPT 1 — Pilot-ideede generaator
Sa oled ettevõtte sisemise AI hackathon’i mentor.
Äriprobleem: ${problemText}
Valdkond: ${domain}
Ajavaade: ${horizon}
Andmete seis: ${dataState}
Piirangud/riskid: ${constraints}

Genereeri 5 piloodi ideed, mis on teostatavad antud ajakavas.
Iga idee puhul kirjelda:
1) väärtuse hüpotees
2) sihtkasutaja
3) minimal viable data
4) human-in-the-loop punktid
5) peamised riskid ja leevendused
6) hinnanguline mõju: ${metricsText}.`,
`PROMPT 2 — Kasutusvoo disainer
Äriprobleem: ${problemText}
Valdkond: ${domain}

Vali parim piloodi idee ja kirjuta esimene kasutusvoog 8–12 sammuna.
Lisa, millises etapis on automaatne otsus ja millises on inimese kinnitus.
Lõpus anna 3 UX riski ja kuidas neid vähendada.`,
`PROMPT 3 — Andmete ja integratsioonide kaart
Äriprobleem: ${problemText}
Andmete seis: ${dataState}
Piirangud: ${constraints}

Kirjelda:
- millised sisemised andmeallikad on vajalikud
- millised välisandmed võiksid anda lisaväärtust
- minimaalne skeem (väljad)
- integratsioonid (ERP/CRM/ITSM/BMS vms)
- andmekvaliteedi kontrollid piloodi jaoks.`,
`PROMPT 4 — Mõõdikud ja eksperimendi disain
Äriprobleem: ${problemText}
Eelistatud mõõdikud: ${metricsText}
Ajavaade: ${horizon}

Koosta piloodi eksperimendiplaan:
- baseline mõõtmine
- A/B või before/after disain
- edu kriteeriumid
- riskid (sh vale-positiivsed/vale-negatiivsed)
- minimaalne statistiline loogika, mida tiim peab jälgima.`,
`PROMPT 5 — Risk, turve ja compliance
Äriprobleem: ${problemText}
Valdkond: ${domain}
Piirangud: ${constraints}

Tee riskianalüüs piloodi tasemel:
- andmekaitse (GDPR)
- mudeli eksimused ja hallutsinatsioon
- ligipääsuhaldus
- auditlogi
- vendor lock-in
- fallback protsessid.
Anna konkreetne kontrollnimekiri, mida tiim peab piloodi käigus tõestama.`
  ].join("\n\n");
}

function renderPrompts(){
  const prompts = buildHackathonPrompts();
  $("promptsBlock").innerHTML = `<code>${escapeHtml(prompts)}</code>`;
}

function saveDraft(){
  const draft = {
    problemText: $("problemText").value,
    domain: $("domain").value,
    horizon: $("horizon").value,
    dataState: $("dataState").value,
    constraints: $("constraints").value,
    metrics: getSelectedMetrics(),
    exampleId: $("exampleSelect").value || ""
  };
  localStorage.setItem("ztp_draft_v1", JSON.stringify(draft));
}

function loadDraft(){
  try{
    const raw = localStorage.getItem("ztp_draft_v1");
    if(!raw) return;
    const d = JSON.parse(raw);
    if(d.problemText) $("problemText").value = d.problemText;
    if(d.domain) $("domain").value = d.domain;
    if(d.horizon) $("horizon").value = d.horizon;
    if(d.dataState) $("dataState").value = d.dataState;
    if(d.constraints) $("constraints").value = d.constraints;

    // metrics
    if(Array.isArray(d.metrics)){
      document.querySelectorAll(".metric").forEach(cb => {
        cb.checked = d.metrics.includes(cb.value);
      });
    }

    if(d.exampleId){
      $("exampleSelect").value = d.exampleId;
      const sec = $("exampleSelectSecondary");
      if(sec) sec.value = d.exampleId;
    }
  }catch(e){
    // ignore
  }
}

function resetForm(){
  $("problemText").value = "";
  $("domain").value = "";
  $("horizon").value = "8-12 nädalat";
  $("dataState").value = "palju teksti ja dokumente";
  $("constraints").value = "";
  document.querySelectorAll(".metric").forEach((cb, idx) => {
    cb.checked = idx < 2; // first two checked
  });
  $("exampleSelect").value = "";
  const sec = $("exampleSelectSecondary");
  if(sec) sec.value = "";
  $("pilotsContainer").innerHTML = "";
  $("pilotCountBadge").textContent = "0";
  $("promptsBlock").innerHTML = "<code>Vali näidis või täida vorm ning vajuta “Genereeri”.</code>";
  localStorage.removeItem("ztp_draft_v1");
}

function fillFromExample(exampleId){
  const ex = EXAMPLES.find(e => e.id === exampleId);
  if(!ex) return false;

  $("problemText").value = ex.problem;
  $("domain").value = ex.domain;
  $("constraints").value = ex.constraints || "";
  $("dataState").value = ex.dataState || $("dataState").value;

  // auto metrics best guess
  document.querySelectorAll(".metric").forEach(cb => {
    cb.checked = ["aja kokkuhoid", "kulu vähenemine", "kvaliteedi paranemine"].includes(cb.value);
  });

  return true;
}

function populateExampleSelects(){
  const main = $("exampleSelect");
  const secondary = $("exampleSelectSecondary");

  const optionsHtml = [
    `<option value="" selected disabled>Vali näidis…</option>`,
    ...EXAMPLES.map(ex => `<option value="${ex.id}">${ex.title}</option>`)
  ].join("");

  main.innerHTML = optionsHtml;
  if(secondary) secondary.innerHTML = optionsHtml;

  // Also render cards grid with 25 small cards
  const grid = $("examplesGrid");
  if(grid){
    grid.innerHTML = EXAMPLES.map(ex => `
      <div class="col-md-6 col-xl-4">
        <div class="card pilot-card h-100">
          <div class="card-body">
            <span class="badge badge-soft mb-2">${escapeHtml(ex.domain)}</span>
            <h4 class="h6 fw-semibold">${escapeHtml(ex.title)}</h4>
            <p class="small text-secondary">${escapeHtml(ex.problem)}</p>
            <button class="btn btn-sm btn-outline-info" data-example-card="${ex.id}">Lae tööriista</button>
          </div>
        </div>
      </div>
    `).join("");

    grid.querySelectorAll("button[data-example-card]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.exampleCard;
        $("exampleSelect").value = id;
        if(secondary) secondary.value = id;
        if(fillFromExample(id)){
          renderPilots();
          renderPrompts();
          saveDraft();
          smoothScrollTo("tool");
          toast("Näidis laaditud.");
        }
      });
    });
  }
}

function exportJSON(){
  const payload = {
    meta: {
      tool: "Zero to Pilot AI Häkiklubi (front-end demo)",
      exportedAt: new Date().toISOString()
    },
    input: {
      problemText: $("problemText").value.trim(),
      domain: $("domain").value.trim(),
      horizon: $("horizon").value,
      dataState: $("dataState").value,
      constraints: $("constraints").value.trim(),
      metrics: getSelectedMetrics()
    },
    pilots: collectRenderedPilots(),
    hackathonPrompts: buildHackathonPrompts()
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "zero-to-pilot-export.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);

  toast("JSON eksporditud.");
}

function collectRenderedPilots(){
  const cards = Array.from(document.querySelectorAll("#pilotsContainer .card"));
  return cards.map(card => {
    const title = card.querySelector("h4")?.innerText ?? "";
    const bullets = Array.from(card.querySelectorAll("ul li")).map(li => li.innerText);
    const metaLine = card.querySelector(".small.text-secondary")?.innerText ?? "";
    return { title, bullets, metaLine };
  });
}

function copyToClipboard(text){
  if(navigator.clipboard && window.isSecureContext){
    return navigator.clipboard.writeText(text);
  }
  // fallback
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try{ document.execCommand("copy"); }catch(e){}
  ta.remove();
  return Promise.resolve();
}

function toast(message){
  const host = $("toastHost");
  if(!host) return;

  const el = document.createElement("div");
  el.className = "toast align-items-center text-bg-dark border-0";
  el.setAttribute("role", "status");
  el.setAttribute("aria-live", "polite");
  el.setAttribute("aria-atomic", "true");

  el.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${escapeHtml(message)}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Sulge"></button>
    </div>
  `;

  host.appendChild(el);
  const t = new bootstrap.Toast(el, { delay: 2200 });
  t.show();
  el.addEventListener("hidden.bs.toast", () => el.remove());
}

function smoothScrollTo(id){
  const el = document.getElementById(id);
  if(!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function wireEvents(){
  // Year
  const yearSpan = $("yearSpan");
  if(yearSpan) yearSpan.textContent = String(new Date().getFullYear());

  // Form submit
  $("problemForm").addEventListener("submit", (e) => {
    e.preventDefault();
    renderPilots();
    renderPrompts();
    saveDraft();
    toast("Pilotid genereeritud.");
  });

  // Copy prompts buttons
  const doCopyPrompts = () => {
    const txt = buildHackathonPrompts();
    copyToClipboard(txt);
    toast("Hackathon promptid kopeeritud.");
  };

  $("copyPromptsBtn")?.addEventListener("click", doCopyPrompts);
  $("copyPromptsInlineBtn")?.addEventListener("click", doCopyPrompts);

  // Export
  $("exportBtn")?.addEventListener("click", exportJSON);

  // Reset
  $("resetBtn")?.addEventListener("click", () => {
    resetForm();
    toast("Vorm nullitud.");
  });

  // Example load buttons
  const loadSelectedExample = () => {
    const id = $("exampleSelect").value;
    if(!id) return;
    if(fillFromExample(id)){
      renderPilots();
      renderPrompts();
      saveDraft();
      toast("Näidis laaditud.");
      smoothScrollTo("tool");
    }
  };

  $("loadExampleBtn")?.addEventListener("click", loadSelectedExample);

  $("loadExampleBtnSecondary")?.addEventListener("click", () => {
    const sec = $("exampleSelectSecondary");
    const id = sec?.value;
    if(!id) return;
    $("exampleSelect").value = id;
    if(fillFromExample(id)){
      renderPilots();
      renderPrompts();
      saveDraft();
      toast("Näidis laaditud.");
      smoothScrollTo("tool");
    }
  });

  // Auto render on select change (main + secondary)
  $("exampleSelect")?.addEventListener("change", () => {
    const id = $("exampleSelect").value;
    const sec = $("exampleSelectSecondary");
    if(sec) sec.value = id;
  });

  $("exampleSelectSecondary")?.addEventListener("change", () => {
    const id = $("exampleSelectSecondary").value;
    $("exampleSelect").value = id;
  });

  // Live-save simplistic
  ["problemText","domain","horizon","dataState","constraints"].forEach(id => {
    const el = $(id);
    if(!el) return;
    el.addEventListener("input", saveDraft);
    el.addEventListener("change", saveDraft);
  });

  document.querySelectorAll(".metric").forEach(cb => {
    cb.addEventListener("change", saveDraft);
  });
}

// Add tiny CSS class toggled in JS
const style = document.createElement("style");
style.textContent = `.pilot-hidden{ display:none; }`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", () => {
  populateExampleSelects();
  loadDraft();

  if($("exampleSelect").value){
    fillFromExample($("exampleSelect").value);
    renderPilots();
    renderPrompts();
  }

  wireEvents();
});
