# Zero to Pilot AI Häkiklubi

**Lühikirjeldus:**  
“Zero to Pilot” AI Häkiklubi on front-end demo/landing, mis aitab innovatsioonijuhil võtta ebamäärane äriprobleem ja muuta see kohe struktureeritud piloodipakiks. Tööriist genereerib 3–5 piloodikontseptsiooni koos esmase kasutusvoo, vajaliku sisendi ja mõõdikute raamiga ning pakub copy-paste valmis promptid sisemiste hackathon’ide jaoks.

See versioon on **offline-sõbralik MVP**: reeglitel põhinev loogika, 25 sisseehitatud näidet ja null sõltuvust serverist.

![ScreenShot](https://github.com/arvutionu2015m/Zero-to-Pilot-AI-Hakiklubi/blob/main/Zero%20to%20Pilot.png)

## Miks see eksisteerib

Enamik innovatsiooniprojekte sureb mitte sellepärast, et idee on halb, vaid sest:
- probleem on udune,
- edu ei ole mõõdetud,
- piloodi scope paisub,
- tiim ei jõua päriselt starti.

See tööriist surub fookuse **probleemi teravusele** ja **mõõdikutele** enne kui raha ja energia ära põlevad.

---

## Sihtkasutaja

- Innovatsioonijuht
- Digitransformatsiooni juht
- Äriüksuse protsessiomanik
- Sisemise hackathon’i korraldaja

---

## Põhifunktsioonid (MVP)

1. **25 töötavat näidist rippmenüüna**  
   - Valdkondadeülene demo, mis täidab vormi automaatselt.

2. **Äriprobleemi sisestus**  
   - Valdkond, ajavaade, andmete seis, piirangud, eelistatud mõõdikud.

3. **3–5 piloodikontseptsiooni generaator**  
   - Reeglitel põhinev malliloogika tagab kohese, ennustatava tulemuse.

4. **Sisemise hackathon’i promptid**  
   - 5 prompti: ideed, kasutusvoog, andmed/integratsioonid, mõõdikud/eksperiment, risk/compliance.

5. **JSON eksport**  
   - Lihtne viis võtta demo väljund ja viia see edasi töötoas või backlog’i.

6. **LocalStorage draft**  
   - Kasutaja sisendid säilivad browseris.

---

## Tehniline stack

- **Bootstrap 5 + Bootswatch Superhero**
- Vanilla JS (ilma buildita)
- Puhtad staatilised failid

---

## Failistruktuur

- `index.html` – landing + tööriista UI  
- `style.css` – väike custom visuaalne kiht  
- `app.js` – näidised, generaatori loogika, promptid, eksport  
- `README.md` – projekti resümee

---

## Kuidas käivitada

1. Lae failid alla.
2. Ava `index.html` brauseris.

Soovi korral hosti ükskõik millises staatilise hostingu teenuses.

---

## Järgmised sammud (production roadmap)

Kui tahad selle muuta päris tööriistaks, siis loogiline järgmine tase on:

### 1) LLM integratsioon
- Promptid ja mallid säilitada versioonitult.
- “1-click” parendused ja alternatiivsed pilotivariandid.

### 2) Organisatsiooni kontekst
- SSO + rollipõhine ligipääs.
- Siseandmete RAG: poliitikad, protsessikirjeldused, KPI definitsioonid.

### 3) Audit ja risk
- Prompt/response logid.
- PII redaktsioon ja turvafiltrid.

### 4) Piloodi töölaud
- Kanban pilootide staatus, vastutajad, eelarved.
- Automaatne mõõdikute jälgimine.

### 5) Integratsioonid
- ERP/CRM/ITSM/BMS sõltuvalt valdkonnast.

---

## Kontakt

**Arvutionu.ee**  
tel: +37253359094  
email: info@arvutionu.ee  
veeb: https://arvutionu.ee
