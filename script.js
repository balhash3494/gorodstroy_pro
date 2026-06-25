// === DATA ===
const FACTS = [
  { v: "С 2014 года", t: "на рынке Москвы и области" },
  { v: "180+", t: "завершённых квартир в новостройках" },
  { v: "до 5 лет", t: "гарантия на выполненные работы" },
  { v: "Каждый день", t: "прораб на связи с заказчиком" },
];

const SERVICES = [
  {
    icon: "i-sparkles", title: "Косметический ремонт", price: "от 7 500 ₽/м²", term: "Срок: 3–5 недель",
    includes: ["Подготовка и выравнивание стен", "Поклейка обоев, покраска", "Замена напольных покрытий", "Замена розеток и выключателей"],
  },
  {
    icon: "i-hammer", title: "Капитальный ремонт", price: "от 14 000 ₽/м²", term: "Срок: 2–3 месяца",
    includes: ["Демонтаж и черновые работы", "Электрика и сантехника под ключ", "Стяжка, штукатурка, выравнивание", "Чистовая отделка и установка дверей"],
  },
  {
    icon: "i-palette", title: "Ремонт под ключ с дизайн-проектом", price: "от 19 000 ₽/м²", term: "Срок: 3–5 месяцев",
    includes: ["Авторский дизайн-проект с 3D", "Подбор и закупка материалов", "Полный цикл строительных работ", "Расстановка мебели и декор"],
  },
];

const PROJECTS = [
  { img: "assets/p1.jpg", jk: "ЖК «Символ»", type: "Двухкомнатная квартира", area: "68 м²", term: "54 дня", budget: "1,46 млн ₽",
    task: "Семья с ребёнком въезжала в новостройку. Нужно было сделать капитальный ремонт с зонированием гостиной и детской, заменить инженерные коммуникации и подготовить квартиру к заезду с мебелью." },
  { img: "assets/p2.jpg", jk: "ЖК «Level Амурская»", type: "Квартира-студия", area: "42 м²", term: "39 дней", budget: "890 тыс. ₽",
    task: "Студия под сдачу в аренду. Заказчик попросил уложиться в бюджет до 1 млн ₽ и сделать нейтральный универсальный интерьер с практичными материалами и встроенным хранением." },
  { img: "assets/p3.jpg", jk: "ЖК «Скандинавия»", type: "Трёхкомнатная квартира", area: "83 м²", term: "67 дней", budget: "2,1 млн ₽",
    task: "Ремонт под ключ с дизайн-проектом. Перепланировка с объединением кухни-гостиной, отдельные спальня и детская, встроенные гардеробные и индивидуальная мебель на заказ." },
];

const PROCESS = [
  { icon: "i-phone", t: "Заявка и консультация", d: "Уточняем задачу, площадь, тип работ и обсуждаем подходящий формат сотрудничества." },
  { icon: "i-ruler", t: "Выезд замерщика", d: "Бесплатно выезжаем на объект, делаем обмеры и фиксируем технические особенности квартиры." },
  { icon: "i-clip", t: "Смета и договор", d: "Готовим детальную смету по этапам, согласуем с вами и подписываем договор с фиксированной ценой." },
  { icon: "i-truck", t: "Закупка материалов", d: "Подбираем материалы по смете, согласуем с вами и привозим на объект в нужный момент." },
  { icon: "i-hardhat", t: "Ремонт и контроль прораба", d: "Работы по графику, ежедневный контроль прораба, фотоотчёты и связь с вами на каждом этапе." },
  { icon: "i-key", t: "Приёмка и гарантия", d: "Сдаём объект, подписываем акт и выдаём гарантию на работы — до 5 лет в зависимости от вида." },
];

const TEAM = [
  { icon: "i-hardhat", role: "Прораб", desc: "Ведёт объект ежедневно, контролирует график, качество и порядок на площадке. Ваша основная точка связи." },
  { icon: "i-calc", role: "Инженер-сметчик", desc: "Составляет прозрачную смету по этапам, фиксирует объёмы и стоимость работ и материалов в договоре." },
  { icon: "i-palette", role: "Дизайнер", desc: "Готовит планировку и дизайн-проект с визуализациями, подбирает материалы и комплектацию." },
  { icon: "i-wrench", role: "Мастера по отделке", desc: "Постоянная штатная бригада: электрика, сантехника, штукатурные и малярные работы, плитка, чистовая отделка." },
];

const CONTRACT = [
  { icon: "i-badge", t: "Стоимость", d: "Фиксированная сумма по смете — не меняется в процессе ремонта." },
  { icon: "i-cal", t: "Сроки", d: "Дата начала и сдачи объекта прописаны в договоре." },
  { icon: "i-file", t: "Этапы оплаты", d: "Поэтапная оплата по факту выполненных работ, без авансов за весь объект." },
  { icon: "i-shield", t: "Гарантия", d: "До 5 лет на работы — обязательства зафиксированы письменно." },
  { icon: "i-user", t: "Ответственность сторон", d: "Чёткие обязательства подрядчика и заказчика — без размытых формулировок." },
];

const REVIEWS = [
  { name: "Анна К.", area: "ЖК «Символ», 2-комн.", text: "Делали капитальный ремонт двушки 68 м². Понравилось, что смету согласовали один раз и она не выросла. Каждый день получали фото с объекта." },
  { name: "Дмитрий М.", area: "ЖК «Level Амурская», студия", text: "Студия под аренду, бюджет был ограничен. Уложились в смету и сроки, всё закупили сами, я приехал только на приёмку." },
  { name: "Елена С.", area: "ЖК «Скандинавия», 3-комн.", text: "Ремонт под ключ с дизайн-проектом. Прораб всегда был на связи, материалы согласовывали в чате, ничего лишнего не навязывали." },
  { name: "Игорь В.", area: "ЖК в Новой Москве, 1-комн.", text: "Сделали однушку 38 м² в новостройке за 6 недель. Договор с фиксированной ценой, поэтапная оплата — для меня это было главное." },
];

const FAQ = [
  { q: "Работаете ли вы с квартирами в новостройках без отделки?", a: "Да, это наш основной профиль. Делаем ремонт в квартирах от застройщика — от чернового состояния и White Box до сдачи под ключ с мебелью." },
  { q: "Как фиксируется стоимость работ?", a: "Стоимость прописывается в договоре по утверждённой смете и не меняется в процессе. Любые дополнительные работы согласуются отдельным актом и только с вашего согласия." },
  { q: "Кто закупает материалы?", a: "На ваш выбор. Можем закупать сами по согласованной смете и привозить на объект, либо вы покупаете материалы самостоятельно по нашему списку." },
  { q: "Нужен ли дизайн-проект?", a: "Не обязательно. Для косметического и капитального ремонта достаточно технического задания. Для сложных интерьеров и перепланировок дизайн-проект экономит бюджет и исключает переделки." },
  { q: "Какая гарантия на работы?", a: "До 5 лет на черновые работы, 3 года на чистовую отделку, 2 года на инженерные системы. Все обязательства прописаны в договоре." },
  { q: "Можно ли посмотреть действующий объект?", a: "Да, по согласованию с заказчиком можем организовать просмотр одного из текущих объектов в Москве или области, чтобы вы увидели качество работ вживую." },
];

// === HELPERS ===
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const ic = (n) => `<svg class="icon"><use href="#${n}"/></svg>`;

// === RENDER ===
$("#facts").innerHTML = FACTS.map(f => `<div class="fact"><div class="fact__v">${esc(f.v)}</div><div class="fact__t">${esc(f.t)}</div></div>`).join("");

$("#services-grid").innerHTML = SERVICES.map(s => `
  <article class="svc reveal">
    <span class="svc__icon">${ic(s.icon)}</span>
    <h3 class="h3">${esc(s.title)}</h3>
    <div class="svc__price">${esc(s.price)}</div>
    <div class="svc__term">${esc(s.term)}</div>
    <ul class="svc__list">${s.includes.map(i => `<li>${ic("i-check")}${esc(i)}</li>`).join("")}</ul>
    <a href="#calculator" class="btn btn--dark svc__cta">Узнать стоимость ${ic("i-arrow")}</a>
  </article>`).join("");

$("#portfolio-grid").innerHTML = PROJECTS.map((p, i) => `
  <article class="proj reveal" data-proj="${i}">
    <div class="proj__img">
      <img src="${p.img}" alt="${esc(p.jk)}, ${esc(p.type)}" loading="lazy"/>
      <span class="proj__jk">${ic("i-pin")} ${esc(p.jk)}</span>
    </div>
    <div class="proj__body">
      <div class="proj__type">${esc(p.type)}</div>
      <div class="proj__stats">
        <div class="stat"><div class="stat__l">Площадь</div><div class="stat__v">${esc(p.area)}</div></div>
        <div class="stat"><div class="stat__l">Срок</div><div class="stat__v">${esc(p.term)}</div></div>
        <div class="stat"><div class="stat__l">Бюджет</div><div class="stat__v">${esc(p.budget)}</div></div>
      </div>
      <p class="proj__task">${esc(p.task)}</p>
      <button class="proj__cta">${ic("i-eye")} Смотреть проект</button>
    </div>
  </article>`).join("");

$("#process-grid").innerHTML = PROCESS.map((s, i) => `
  <div class="step reveal">
    <div class="step__head"><span class="step__icon">${ic(s.icon)}</span><span class="step__n">Шаг ${String(i + 1).padStart(2, "0")}</span></div>
    <h3 class="h3">${esc(s.t)}</h3>
    <p>${esc(s.d)}</p>
  </div>`).join("");

$("#team-grid").innerHTML = TEAM.map(t => `
  <div class="team reveal">
    <span class="team__icon">${ic(t.icon)}</span>
    <h3 class="h3">${esc(t.role)}</h3>
    <p>${esc(t.desc)}</p>
  </div>`).join("");

$("#contract-grid").innerHTML = CONTRACT.map(c => `
  <div class="contract-card reveal">
    <span class="contract-card__icon">${ic(c.icon)}</span>
    <div><h3 class="h3">${esc(c.t)}</h3><p>${esc(c.d)}</p></div>
  </div>`).join("");

$("#reviews-grid").innerHTML = REVIEWS.map(r => `
  <div class="review reveal">
    <p>«${esc(r.text)}»</p>
    <div class="review__foot">
      <div class="avatar">${esc(r.name[0])}</div>
      <div><div class="review__name">${esc(r.name)}</div><div class="review__area">${esc(r.area)}</div></div>
    </div>
  </div>`).join("");

$("#faq-list").innerHTML = FAQ.map((f, i) => `
  <div class="faq__item reveal ${i === 0 ? "is-open" : ""}">
    <button class="faq__q">${esc(f.q)} ${ic("i-chev")}</button>
    <div class="faq__a">${esc(f.a)}</div>
  </div>`).join("");

$("#copy").textContent = `© ${new Date().getFullYear()} ГородСтрой Pro. Все права защищены.`;

// === BEHAVIOR ===
// Header scroll
const header = $("#header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 16);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Reveal
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("is-visible")), { threshold: 0.12 });
$$(".reveal").forEach(el => io.observe(el));

// Mobile nav
const mnav = $("#mobileNav");
const openMnav = () => { mnav.hidden = false; document.body.style.overflow = "hidden"; };
const closeMnav = () => { mnav.hidden = true; document.body.style.overflow = ""; };
$("#burger").addEventListener("click", openMnav);
$("#burgerClose").addEventListener("click", closeMnav);
$$("#mobileNav a").forEach(a => a.addEventListener("click", closeMnav));

// Smooth scroll for hash links
$$('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
  const id = a.getAttribute("href");
  if (id.length > 1) {
    const el = $(id);
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
  }
}));

// FAQ
$$(".faq__q").forEach(q => q.addEventListener("click", () => q.closest(".faq__item").classList.toggle("is-open")));

// Lead modal
const leadModal = $("#leadModal");
const leadTitle = $("#leadTitle");
function openLead(title) {
  leadTitle.textContent = title || "Оставить заявку";
  const form = leadModal.querySelector(".lead-form");
  resetLeadForm(form);
  leadModal.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeModal(m) { m.hidden = true; document.body.style.overflow = ""; }
$$("[data-open-lead]").forEach(b => b.addEventListener("click", () => {
  if (mnav && !mnav.hidden) closeMnav();
  openLead(b.dataset.openLead);
}));
$$("[data-close]").forEach(el => el.addEventListener("click", e => {
  const m = e.target.closest(".modal"); if (m) closeModal(m);
}));
document.addEventListener("keydown", e => {
  if (e.key === "Escape") $$(".modal").forEach(m => { if (!m.hidden) closeModal(m); });
});

// Project modal
const pModal = $("#projectModal");
const pBody = $("#projectBody");
$$(".proj").forEach(card => card.addEventListener("click", e => {
  if (e.target.closest("a")) return;
  const p = PROJECTS[+card.dataset.proj];
  pBody.innerHTML = `
    <div class="pm__img">
      <img src="${p.img}" alt="${esc(p.jk)}"/>
      <span class="pm__jk">${ic("i-pin")} ${esc(p.jk)}</span>
    </div>
    <div class="pm__body">
      <div class="pm__type">${esc(p.type)}</div>
      <h3 class="pm__title">${esc(p.jk)} · ${esc(p.area)}</h3>
      <div class="pm__stats">
        <div class="pm__stat"><div class="pm__stat-l">Площадь</div><div class="pm__stat-v">${esc(p.area)}</div></div>
        <div class="pm__stat"><div class="pm__stat-l">Срок</div><div class="pm__stat-v">${esc(p.term)}</div></div>
        <div class="pm__stat"><div class="pm__stat-l">Бюджет</div><div class="pm__stat-v">${esc(p.budget)}</div></div>
      </div>
      <div class="pm__h">Задача клиента</div>
      <p class="pm__task">${esc(p.task)}</p>
      <button class="btn btn--accent" data-open-lead="Хочу такой же ремонт" style="margin-top:28px">Получить расчёт по моей квартире ${ic("i-arrow")}</button>
    </div>`;
  pBody.querySelector("[data-open-lead]").addEventListener("click", ev => {
    closeModal(pModal);
    openLead(ev.currentTarget.dataset.openLead);
  });
  pModal.hidden = false;
  document.body.style.overflow = "hidden";
}));

// Calculator
const calc = $("#calc");
const calcSent = $("#calcSent");
const calcEst = $("#calcEst");
const calcValue = $("#calcValue");
function updateEst() {
  const rate = +calc.format.value;
  const area = +calc.area.value || 0;
  if (area > 0) {
    calcEst.hidden = false;
    calcValue.textContent = (area * rate).toLocaleString("ru-RU") + " ₽";
  } else {
    calcEst.hidden = true;
  }
}
calc.format.addEventListener("change", updateEst);
calc.area.addEventListener("input", updateEst);
calc.addEventListener("submit", e => {
  e.preventDefault();
  calc.hidden = true;
  calcSent.hidden = false;
  calcSent.classList.add("is-visible");
});

// Lead forms
function resetLeadForm(form) {
  form.reset();
  const ok = form.querySelector(".form-ok");
  if (ok) ok.remove();
  $$("input,textarea,button,p", form).forEach(el => el.style.display = "");
}
$$("[data-lead-form]").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    $$("input,textarea,button,.hint", form).forEach(el => el.style.display = "none");
    const dark = form.classList.contains("lead-form--dark");
    const ok = document.createElement("div");
    ok.className = "form-ok";
    ok.style.cssText = `background:${dark ? "rgba(255,255,255,.08)" : "var(--muted)"};border-radius:18px;padding:28px;text-align:center;color:${dark ? "#fff" : "var(--graphite)"}`;
    ok.innerHTML = `<div style="margin:0 auto 16px;display:grid;place-items:center;width:56px;height:56px;border-radius:50%;background:var(--accent);color:#fff;font-size:24px">${ic("i-check")}</div>
      <div style="font-family:var(--font-display);font-size:18px;font-weight:700">Спасибо! Заявка принята</div>
      <div style="margin-top:8px;font-size:14px;color:${dark ? "rgba(255,255,255,.7)" : "var(--soft)"}">Инженер свяжется с вами в ближайшее время.</div>`;
    form.appendChild(ok);
    const m = form.closest(".modal");
    if (m) setTimeout(() => closeModal(m), 2500);
  });
});
