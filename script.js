(() => {
  // ===== DATA =====
  const SERVICES = [
    { icon: 'i-home',   title: 'Ремонт квартир под ключ',           img: 'images/s1.jpg', desc: 'Полный цикл — от демонтажа до чистовой отделки и мебели.' },
    { icon: 'i-build',  title: 'Строительство загородных домов',    img: 'images/s2.jpg', desc: 'Каркасные, кирпичные и каменные дома по индивидуальному проекту.' },
    { icon: 'i-palette',title: 'Дизайн-проект интерьера',           img: 'images/s3.jpg', desc: 'Авторский дизайн с 3D-визуализацией и подбором материалов.' },
    { icon: 'i-hammer', title: 'Ремонт офисов',                     img: 'images/s4.jpg', desc: 'Открытые пространства, переговорные, ресепшен — в сроки и бюджет.' },
    { icon: 'i-store',  title: 'Отделка коммерческих помещений',    img: 'images/s5.jpg', desc: 'Магазины, шоурумы, кафе, салоны — с учётом требований аренды.' },
    { icon: 'i-wrench', title: 'Электрика, сантехника, инженерия',  img: 'images/s6.jpg', desc: 'Полный комплекс инженерных работ с актами и гарантией.' },
  ];

  const ADV = [
    { icon: 'i-clock',  title: 'Более 10 лет опыта',          desc: 'Сотни сданных объектов в Москве и Подмосковье.' },
    { icon: 'i-users',  title: 'Собственная команда мастеров',desc: 'Никаких подрядных бригад с улицы — только наши специалисты.' },
    { icon: 'i-file',   title: 'Прозрачная смета',            desc: 'Фиксированная цена в договоре, без скрытых расходов.' },
    { icon: 'i-camera', title: 'Фото- и видеоотчёты',         desc: 'Каждый этап документируем — вы в курсе всех работ.' },
    { icon: 'i-cal',    title: 'Соблюдение сроков',           desc: 'Прописываем сроки в договоре с финансовой ответственностью.' },
    { icon: 'i-shield', title: 'Гарантия до 5 лет',           desc: 'Официальная гарантия на все виды работ.' },
  ];

  const PROJECTS = [
    { img: 'images/p1.jpg', title: 'Ремонт квартиры в ЖК «Сердце Столицы»', meta: '82 м² · 4 месяца',  desc: 'Современный ремонт с открытой планировкой кухни-гостиной, спальней и кабинетом. Применены итальянская плитка, инженерная доска и встроенная мебель.' },
    { img: 'images/p2.jpg', title: 'Квартира в современном стиле',          meta: '64 м² · 3 месяца',  desc: 'Лаконичный интерьер в тёплой палитре с акцентом на свет и фактуру натуральных материалов. Полный цикл от демонтажа до меблировки.' },
    { img: 'images/p3.jpg', title: 'Загородный дом в Подмосковье',          meta: '185 м² · 8 месяцев',desc: 'Дом из газобетона с облицовкой натуральным камнем и деревом. Полный комплекс: фундамент, коробка, кровля, инженерия, отделка.' },
    { img: 'images/p4.jpg', title: 'Офис для IT-компании',                  meta: '230 м² · 2 месяца', desc: 'Open-space на 40 рабочих мест с переговорными и зоной отдыха. Стеклянные перегородки, акустические панели, дизайнерское освещение.' },
    { img: 'images/p5.jpg', title: 'Ремонт квартиры для семьи',             meta: '96 м² · 5 месяцев', desc: 'Тёплый семейный интерьер с детской, кабинетом и просторной кухней. Особое внимание уделено эргономике и безопасности материалов.' },
    { img: 'images/p6.jpg', title: 'Коммерческое помещение',                meta: '140 м² · 2,5 месяца',desc:'Шоурум одежды с авторским светом, бесшовным наливным полом и индивидуальным торговым оборудованием.' },
  ];

  const STEPS = [
    { n: '01', t: 'Оставляете заявку',           d: 'Заполняете форму или звоните — фиксируем ваш запрос.' },
    { n: '02', t: 'Специалист связывается с вами',d: 'Уточняем задачу, согласуем удобное время выезда.' },
    { n: '03', t: 'Замер и подготовка сметы',    d: 'Бесплатный замер на объекте и детальная смета за 3 дня.' },
    { n: '04', t: 'Договор и начало работ',      d: 'Подписываем договор с фиксированной ценой и сроками.' },
    { n: '05', t: 'Сдача объекта и гарантия',    d: 'Принимаете готовый объект, получаете гарантию до 5 лет.' },
  ];

  const REVIEWS = [
    { n: 'Анна К.',    a: 'Пресненский район', t: 'Делали ремонт двушки 70 м² за 4 месяца — уложились ровно в срок и в смету. Команда аккуратная, каждую неделю присылали отчёт. Рекомендую!' },
    { n: 'Дмитрий М.', a: 'Хамовники',         t: 'Строили дом в Подмосковье. Понравился системный подход и прозрачность — все материалы согласовывали заранее, никаких сюрпризов по бюджету.' },
    { n: 'Елена С.',   a: 'Раменки',           t: 'Ремонт офиса 180 м² за 7 недель. Работали по ночам, чтобы не мешать сотрудникам. Качество отделки на высоте, особенно столярка.' },
    { n: 'Игорь В.',   a: 'Замоскворечье',     t: 'Полный ремонт квартиры с дизайн-проектом. Прораб всегда на связи, любые вопросы решали оперативно. Через год — ни одного нарекания.' },
  ];

  const FAQ = [
    { q: 'Сколько стоит ремонт квартиры?',         a: 'Стоимость зависит от площади, вида работ и материалов. Косметический ремонт — от 6 500 ₽/м², капитальный — от 12 000 ₽/м², премиум-ремонт под ключ — от 25 000 ₽/м². Точную цену скажем после бесплатного замера.' },
    { q: 'Можно ли начать ремонт без дизайн-проекта?', a: 'Да, можем работать по эскизам и техническому заданию. Но для сложных интерьеров мы рекомендуем дизайн-проект — он исключает переделки и помогает точно посчитать смету.' },
    { q: 'Как фиксируется стоимость работ?',       a: 'Цена прописывается в договоре и не меняется в процессе — даже если выросли цены на материалы. Дополнительные работы согласуются отдельным актом и только с вашего согласия.' },
    { q: 'Кто закупает материалы?',                a: 'На ваш выбор. Можем закупать сами — со скидкой от поставщиков и доставкой на объект. Либо вы покупаете материалы самостоятельно по нашему списку.' },
    { q: 'Есть ли гарантия?',                      a: 'Да. На черновые работы — 5 лет, на чистовую отделку — 3 года, на инженерные системы — 2 года. Все обязательства прописаны в договоре.' },
    { q: 'Работаете ли вы по договору?',           a: 'Только по официальному договору с фиксированной сметой, сроками и гарантией. Принимаем оплату на расчётный счёт, выдаём все закрывающие документы.' },
  ];

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  // ===== RENDER =====
  $('#services-grid').innerHTML = SERVICES.map((s) => `
    <article class="card svc reveal">
      <div class="img"><img src="${s.img}" alt="${esc(s.title)}" loading="lazy" width="1000" height="750"/></div>
      <div class="pad">
        <div class="hd"><span class="ic-box"><svg class="ic"><use href="#${s.icon}"/></svg></span><h3>${esc(s.title)}</h3></div>
        <p class="desc">${esc(s.desc)}</p>
        <button class="more" data-scroll="#calculator">Подробнее <svg class="ic-sm"><use href="#i-arrow"/></svg></button>
      </div>
    </article>`).join('');

  $('#adv-grid').innerHTML = ADV.map((a) => `
    <div class="card adv reveal">
      <span class="ic-box accent"><svg class="ic"><use href="#${a.icon}"/></svg></span>
      <h3>${esc(a.title)}</h3>
      <p>${esc(a.desc)}</p>
    </div>`).join('');

  $('#port-grid').innerHTML = PROJECTS.map((p, i) => `
    <button class="card proj reveal" data-proj="${i}">
      <div class="img">
        <img src="${p.img}" alt="${esc(p.title)}" loading="lazy" width="1200" height="900"/>
        <div class="ov"><span><svg class="ic-sm"><use href="#i-eye"/></svg>Подробнее</span></div>
      </div>
      <div class="pad">
        <div class="eyebrow">${esc(p.meta)}</div>
        <h3>${esc(p.title)}</h3>
      </div>
    </button>`).join('');

  $('#steps-grid').innerHTML = STEPS.map((s, i) => `
    <div class="card step reveal">
      <div class="ln"><span class="n">${s.n}</span>${i < STEPS.length - 1 ? '<span class="ln-bar"></span>' : ''}</div>
      <h3>${esc(s.t)}</h3>
      <p>${esc(s.d)}</p>
    </div>`).join('');

  $('#rev-grid').innerHTML = REVIEWS.map((r) => `
    <div class="card rev reveal">
      <div class="stars">${'<svg class="ic-sm"><use href="#i-star"/></svg>'.repeat(5)}</div>
      <p>«${esc(r.t)}»</p>
      <div class="rev-foot">
        <div class="avatar">${esc(r.n[0])}</div>
        <div><div class="rev-name">${esc(r.n)}</div><div class="rev-area">${esc(r.a)}</div></div>
      </div>
    </div>`).join('');

  $('#faq-list').innerHTML = FAQ.map((f, i) => `
    <div class="faq reveal${i === 0 ? ' open' : ''}">
      <button class="faq-q" data-faq>${esc(f.q)}<svg class="ic chev"><use href="#i-chev"/></svg></button>
      <div class="faq-a">${esc(f.a)}</div>
    </div>`).join('');

  $('#year').textContent = new Date().getFullYear();

  // ===== HEADER SCROLL =====
  const hdr = $('#header');
  const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 16);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ===== REVEAL =====
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('is-visible'), io.unobserve(e.target))),
    { threshold: 0.12 }
  );
  $$('.reveal').forEach((el) => io.observe(el));

  // ===== SCROLL TO ANCHOR =====
  const scrollTo = (sel) => {
    const el = $(sel);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-scroll]');
    if (t) { e.preventDefault(); scrollTo(t.dataset.scroll); }
    const a = e.target.closest('a[href^="#"]');
    if (a && !t) {
      const href = a.getAttribute('href');
      if (href.length > 1) { e.preventDefault(); scrollTo(href); closeNav(); }
    }
  });

  // ===== MOBILE NAV =====
  const mnav = $('#mnav');
  const openNav = () => { mnav.hidden = false; document.body.style.overflow = 'hidden'; };
  const closeNav = () => { mnav.hidden = true; document.body.style.overflow = ''; };
  $$('[data-open-nav]').forEach((b) => b.addEventListener('click', openNav));
  $$('[data-close-nav]').forEach((b) => b.addEventListener('click', closeNav));
  mnav.addEventListener('click', (e) => { if (e.target.closest('[data-mnav]')) closeNav(); });

  // ===== FAQ =====
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-faq]');
    if (t) t.parentElement.classList.toggle('open');
  });

  // ===== PROJECT MODAL =====
  const projModal = $('#proj-modal');
  const openProj = (i) => {
    const p = PROJECTS[i];
    $('#proj-img').src = p.img;
    $('#proj-img').alt = p.title;
    $('#proj-meta').textContent = p.meta;
    $('#proj-title').textContent = p.title;
    $('#proj-desc').textContent = p.desc;
    projModal.hidden = false;
    document.body.style.overflow = 'hidden';
  };
  const closeProj = () => { projModal.hidden = true; document.body.style.overflow = ''; };
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-proj]');
    if (t) openProj(+t.dataset.proj);
    if (e.target.closest('[data-close-proj]')) closeProj();
    if (e.target.closest('[data-open-lead-from-proj]')) { closeProj(); openLead(); }
  });

  // ===== LEAD MODAL =====
  const leadModal = $('#lead-modal');
  const openLead = () => { leadModal.hidden = false; document.body.style.overflow = 'hidden'; };
  const closeLead = () => { leadModal.hidden = true; document.body.style.overflow = ''; };
  $$('[data-open-lead]').forEach((b) => b.addEventListener('click', openLead));
  $$('[data-close-lead]').forEach((b) => b.addEventListener('click', closeLead));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeProj(); closeLead(); closeNav(); }
  });

  // ===== FORMS =====
  document.querySelectorAll('[data-leadform]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.reset();
      const ok = document.createElement('div');
      ok.className = 'calc-thanks';
      ok.style.padding = '1.75rem';
      ok.innerHTML = `<div class="check-circle"><svg class="ic"><use href="#i-check"/></svg></div><h3>Спасибо! Заявка принята</h3><p class="muted" style="margin-top:.5rem">Специалист свяжется с вами в ближайшее время.</p>`;
      form.replaceWith(ok);
      setTimeout(() => { if (!leadModal.hidden) closeLead(); }, 2500);
    });
  });

  $('#calc-form').addEventListener('submit', (e) => {
    e.preventDefault();
    $('#calc-form').hidden = true;
    $('#calc-thanks').hidden = false;
  });
})();
