const EMBEDDED_QUESTIONS = [
  {
    "id": 1,
    "type": "mc",
    "topic": "Предложение",
    "q": "Когда сотрудник должен предложить клиенту программу лояльности «У Михалыча»?",
    "options": [
      "A) Только если клиент сам спросил про скидку",
      "B) Только постоянным покупателям с чеком от 5 000 ₽",
      "C) На кассе каждому клиенту: «У вас уже есть наша бонусная карта?»",
      "D) Только по указанию СПК в конце смены"
    ],
    "answer": "c",
    "explain": "По скрипту кассира вопрос «У вас уже есть наша бонусная карта?» задаётся каждому на кассе — и тем, у кого карты нет, и тем, у кого она уже есть."
  },
  {
    "id": 2,
    "type": "mc",
    "topic": "Предложение",
    "q": "Клиент ответил «нет, карты нет». Какая формулировка верная?",
    "options": [
      "A) «Регистрироваться долго, лучше в следующий раз»",
      "B) «Зарегистрируемся? 1% от суммы покупок начисляется на карту, бонусами можно оплатить до 99%. Регистрация быстрая по QR. Бонусы действуют 180 дней»",
      "C) «Пластиковую карту выдадим через неделю в офисе»",
      "D) «Бонусы сразу выдадим наличными с кассы»"
    ],
    "answer": "b",
    "explain": "Скрипт кассира: 1% начисления, оплата до 99%, быстрая регистрация по QR, срок бонусов 180 дней. Если клиент покупает регулярно, бонусы продолжают копиться."
  },
  {
    "id": 3,
    "type": "mc",
    "topic": "Регистрация",
    "q": "По актуальным Правилам программы лояльности регистрация Участника — это привязка номера телефона:",
    "options": [
      "A) Только через IT-отдел с выдачей пластиковой карты",
      "B) В официальном боте MAX и/или в личном кабинете на gvozditut.ru",
      "C) Только по письменному заявлению бухгалтеру",
      "D) Автоматически при любой покупке, без согласия клиента"
    ],
    "answer": "b",
    "explain": "Правила: регистрация в боте MAX (https://max.ru/id723005106671_bot) или в ЛК на gvozditut.ru. На кассе помогаем через QR с POS-материалов. Регистрация = согласие с Правилами."
  },
  {
    "id": 4,
    "type": "mc",
    "topic": "Регистрация",
    "q": "Какой номер телефона можно привязать к бонусному счёту?",
    "options": [
      "A) Любой зарубежный номер",
      "B) Городской без кода страны",
      "C) Номер, зарегистрированный в РФ и начинающийся с +7",
      "D) Номер кассы магазина"
    ],
    "answer": "c",
    "explain": "Правила п. 3.1: номер должен быть зарегистрирован на территории РФ и начинаться с +7. К одному номеру — только один бонусный счёт."
  },
  {
    "id": 5,
    "type": "mc",
    "topic": "Правила",
    "q": "Кто может стать Участником программы?",
    "options": [
      "A) Любой посетитель, в том числе ребёнок без ограничений",
      "B) Дееспособное физическое лицо, достигшее 18 лет",
      "C) Только ИП и юридические лица",
      "D) Только жители Тюмени"
    ],
    "answer": "b",
    "explain": "Правила п. 2.3: дееспособное физлицо от 18 лет. Программа действует на всей территории сети «У Михалыча», не только в одном городе."
  },
  {
    "id": 6,
    "type": "mc",
    "topic": "Регистрация",
    "q": "Как зарегистрировать клиента на кассе, если он согласился?",
    "options": [
      "A) Записать номер в тетрадь и «завести потом»",
      "B) Предложить отсканировать QR с кассовой зоны (бот): Старт → Регистрация/авторизация → номер через +7 → код из СМС",
      "C) Попросить паспорт и завести карту без СМС",
      "D) Отправить клиента в офис за пластиковым носителем"
    ],
    "answer": "b",
    "explain": "QR с POS на кассе → бот (Старт, регистрация, +7, СМС). Без кода из СМС карта не регистрируется. После регистрации сканируем QR клиента и применяем карту к этой покупке."
  },
  {
    "id": 7,
    "type": "mc",
    "topic": "Начисление",
    "q": "Сколько бонусов начисляется за покупку?",
    "options": [
      "A) 5% от суммы чека",
      "B) 10% только по акциям",
      "C) 1% от суммы каждой покупки",
      "D) Фиксированно 50 баллов независимо от суммы"
    ],
    "answer": "c",
    "explain": "Правила п. 4.2: 1% от суммы каждой покупки. 1 балл = 1 ₽ как скидка, наличными баллы не выдаются."
  },
  {
    "id": 8,
    "type": "mc",
    "topic": "Начисление",
    "q": "Через какое время после покупки начисляются бонусы? Что сказать клиенту?",
    "options": [
      "A) Мгновенно в момент оплаты — так и говорим",
      "B) В течение 72 часов (трёх дней); баланс потом смотреть в боте / личном кабинете",
      "C) Через 30 дней, только если клиент позвонит в офис",
      "D) В конце месяца одной суммой"
    ],
    "answer": "b",
    "explain": "Правила п. 4.3: начисление в течение 72 часов. Скрипт кассира: «бонусы будут начислены в течение 3-х дней, количество — в боте в разделе «Мои привилегии»»."
  },
  {
    "id": 9,
    "type": "mc",
    "topic": "Начисление",
    "q": "На что бонусы не начисляются?",
    "options": [
      "A) На все товары без исключений",
      "B) Только на инструмент",
      "C) На стоимость доставки и на товары в акциях распродажи / со спецскидкой, которая прямо исключает начисление баллов",
      "D) Только при оплате картой"
    ],
    "answer": "c",
    "explain": "Правила п. 4.4: не начисляются на доставку и на товары в распродаже или со спецскидкой, которая прямо исключает начисление."
  },
  {
    "id": 10,
    "type": "mc",
    "topic": "Списание",
    "q": "Какую долю покупки клиент может оплатить бонусами?",
    "options": [
      "A) До 25%",
      "B) До 50%",
      "C) 100% без ограничений",
      "D) До 99%; минимум 1 ₽ нужно оплатить деньгами"
    ],
    "answer": "d",
    "explain": "Правила п. 5.2: в одной покупке — до 99% бонусами, минимум 1 рубль живыми деньгами. Баллы нельзя обменять на наличные."
  },
  {
    "id": 11,
    "type": "mc",
    "topic": "Списание",
    "q": "Как списать бонусы в розничном магазине?",
    "options": [
      "A) По устной просьбе и номеру телефона — без QR",
      "B) Клиент говорит, что хочет списать бонусы, называет номер; списание подтверждается сканированием динамического QR из бота MAX / Telegram, ЛК на сайте или приложения",
      "C) Кассир списывает по своему усмотрению «для своих»",
      "D) Только через IT-отдел на следующий день"
    ],
    "answer": "b",
    "explain": "Правила п. 5.3: в магазине — номер + обязательное подтверждение QR в боте MAX или на сайте. На практике тот же динамический QR из Telegram / МАХ / ЛК / приложения. Без QR списывать нельзя."
  },
  {
    "id": 12,
    "type": "mc",
    "topic": "Правила",
    "q": "Срок действия начисленных бонусов:",
    "options": [
      "A) 30 дней",
      "B) 90 дней",
      "C) 180 календарных дней с момента начисления, затем неиспользованные аннулируются",
      "D) Бессрочно"
    ],
    "answer": "c",
    "explain": "Правила п. 5.6 и скрипт кассира: 180 календарных дней. Если клиент покупает регулярно, бонусы продолжают копиться. При возврате товара бонусы возвращаются на счёт, только если срок ещё не истёк."
  },
  {
    "id": 13,
    "type": "mc",
    "topic": "Регистрация",
    "q": "Где клиент может узнать баланс бонусов?",
    "options": [
      "A) Только письменным запросом в IT-отдел",
      "B) В официальном боте MAX (и в Telegram — «Мои привилегии») и в личном кабинете на сайте; на кассе можно уточнить",
      "C) Только у генерального директора",
      "D) Баланс нигде не показывается"
    ],
    "answer": "b",
    "explain": "Правила п. 4.5: бот MAX и ЛК на сайте. Скрипт кассира: раздел «Мои привилегии» в боте или уточнить на кассе."
  },
  {
    "id": 14,
    "type": "mc",
    "topic": "Перенос",
    "q": "Клиент сменил номер телефона и просит перенести бонусы. Что нужно?",
    "options": [
      "A) Кассир сам переносит баланс в 1С без документов",
      "B) Письменное заявление + обязательное СМС-подтверждение со СТАРОГО номера, который был в системе изначально",
      "C) Достаточно звонка на горячую линию",
      "D) Перенос бонусов в программе не предусмотрен"
    ],
    "answer": "b",
    "explain": "Правила п. 5.7 и инструкция: перенос только по письменному заявлению и при СМС со старого номера. Без СМС-кода со старого номера операция не выполняется."
  },
  {
    "id": 15,
    "type": "mc",
    "topic": "Перенос",
    "q": "В каком случае перенос бонусов на новый номер невозможен?",
    "options": [
      "A) Баланс меньше 100 баллов",
      "B) Нет чека от последней покупки",
      "C) Клиент сменил модель телефона или оператора",
      "D) Нет СМС-кода со старого номера — система не подтвердит операцию"
    ],
    "answer": "d",
    "explain": "Тест SkillCup и инструкция: без SMS-кода на старый номер перенос невозможен. Смена модели телефона, оператора или сумма баланса сами по себе не блокируют перенос."
  },
  {
    "id": 16,
    "type": "mc",
    "topic": "Перенос",
    "q": "Что обязательно проверить в заявлении на перенос бонусов?",
    "options": [
      "A) Достаточно фамилии — остальное можно дописать потом",
      "B) Все графы: ФИО, оба номера, причина, сумма бонусов, дата и подпись, галочка согласия на SMS; неполные заявления не принимаются",
      "C) Только новый номер телефона",
      "D) Только сумму бонусов — без подписи можно"
    ],
    "answer": "b",
    "explain": "Инструкция: заполнить нужно ВСЕ графы. Неполные заявления к рассмотрению не принимаются. Клиент заполняет сам или сотрудник со слов — тогда клиент обязан проверить данные и расписаться."
  },
  {
    "id": 17,
    "type": "mc",
    "topic": "Перенос",
    "q": "После приёма заявления сотрудник:",
    "options": [
      "A) Кладёт бланк в ящик кассы и ждёт, пока клиент напомнит",
      "B) Сразу сам переносит бонусы на кассе",
      "C) Делает фото/скан, создаёт задачу в Битрикс24 по шаблону в течение суток, оригинал в офис с пометкой «Дизайнеру обратной связи»; срок рассмотрения — 3 рабочих дня",
      "D) Отправляет клиента в налоговую"
    ],
    "answer": "c",
    "explain": "Инструкция: задача в Б24 по шаблону не позднее суток с даты заявления, к задаче — фото/скан. Срок рассмотрения 3 рабочих дня. Оригинал в офис с пометкой «Дизайнеру обратной связи»."
  },
  {
    "id": 18,
    "type": "open",
    "topic": "Предложение",
    "q": "Клиент на кассе, карты лояльности нет. Напишите, что вы скажете (предложение регистрации) и какие цифры/условия обязательно озвучить.",
    "keywords": [
      "зарегистрир",
      "1%",
      "99",
      "180",
      "qr"
    ],
    "minKeywords": 4,
    "sample": "У вас уже есть наша бонусная карта? Зарегистрируемся? 1% от суммы покупок начисляется на карту, бонусами можно оплатить до 99%. Регистрация быстрая — сканируйте QR. Бонусы действуют 180 дней; если покупаете регулярно, они продолжают копиться. Баланс — в боте / личном кабинете."
  },
  {
    "id": 19,
    "type": "open",
    "topic": "Регистрация",
    "q": "Клиент согласился зарегистрироваться. Опишите, как вы его регистрируете на кассе (каналы и шаги до применения карты к этой покупке).",
    "keywords": [
      "qr",
      "смс",
      "+7",
      "бот",
      "зарегистрир"
    ],
    "minKeywords": 4,
    "sample": "Предложить QR с POS на кассе → бот MAX (или Telegram / ЛК на gvozditut.ru): Старт → Регистрация/авторизация → номер через +7 → код из СМС. Либо кнопка «Регистрация клиента в СУЛ» на кассе и код из СМС. После регистрации клиент открывает QR, кассир сканирует его — карта применяется к текущей покупке, бонусы начислятся в течение 3 дней."
  },
  {
    "id": 20,
    "type": "open",
    "topic": "Перенос",
    "q": "Клиент сменил номер и просит перенести бонусы. Ваши действия по шагам (от бланка до офиса).",
    "keywords": [
      "заявлен",
      "бланк",
      "старый",
      "смс",
      "битрикс",
      "сутки",
      "подпис"
    ],
    "minKeywords": 4,
    "sample": "Выдать бланк заявления. Клиент заполняет все графы: ФИО, старый и новый номера, причина, сумма бонусов, дата, подпись, согласие на SMS. Без СМС-кода со старого номера перенос невозможен. Сделать фото/скан, создать задачу в Битрикс24 по шаблону в течение суток. Оригинал в офис с пометкой «Дизайнеру обратной связи». Срок рассмотрения — 3 рабочих дня."
  }
];

const LETTERS = ["a", "b", "c", "d"];
const MAIL_ENDPOINT = "https://formsubmit.co/ajax/arimberg@gmail.com";

let questions = [];
let answers = [];
let current = 0;
let profile = { firstName: "", lastName: "", name: "", store: "", role: "" };

const el = {
  start: document.getElementById("screen-start"),
  quiz: document.getElementById("screen-quiz"),
  result: document.getElementById("screen-result"),
  form: document.getElementById("start-form"),
  formError: document.getElementById("form-error"),
  firstName: document.getElementById("user-first-name"),
  lastName: document.getElementById("user-last-name"),
  store: document.getElementById("user-store"),
  role: document.getElementById("user-role"),
  startBtn: document.getElementById("btn-start"),
  prev: document.getElementById("btn-prev"),
  next: document.getElementById("btn-next"),
  restart: document.getElementById("btn-restart"),
  counter: document.getElementById("q-counter"),
  topic: document.getElementById("q-topic"),
  type: document.getElementById("q-type"),
  text: document.getElementById("q-text"),
  options: document.getElementById("options"),
  openWrap: document.getElementById("open-wrap"),
  openAnswer: document.getElementById("open-answer"),
  bar: document.getElementById("progress-bar"),
  scoreNum: document.getElementById("score-num"),
  scoreTotal: document.getElementById("score-total"),
  scorePercent: document.getElementById("score-percent"),
  scoreTitle: document.getElementById("score-title"),
  verdict: document.getElementById("score-verdict"),
  mailStatus: document.getElementById("mail-status"),
  summaryCards: document.getElementById("summary-cards"),
  topicStats: document.getElementById("topic-stats"),
  weakBlock: document.getElementById("weak-block"),
  weakList: document.getElementById("weak-list"),
  review: document.getElementById("review"),
};

const TOPIC_TIPS = {
  Предложение:
    "Каждому на кассе: «У вас уже есть наша бонусная карта?» Нет карты — 1%, до 99%, QR, 180 дней.",
  Регистрация:
    "Бот MAX / ЛК gvozditut.ru / QR на кассе: номер +7, код из СМС. Затем сканируем QR клиента.",
  Начисление: "1% от покупки за 72 часа. Не начисляются на доставку и распродажу со спецскидкой.",
  Списание: "До 99%, минимум 1 ₽ деньгами. Только по динамическому QR, не по номеру «на слово».",
  Правила: "18+, 1 балл = 1 ₽, срок 180 дней, баланс в боте MAX и ЛК.",
  Перенос:
    "Письменное заявление (все графы) + SMS со старого номера. Задача в Б24 за сутки, рассмотрение 3 рабочих дня.",
};

function show(screen) {
  el.start.classList.toggle("hidden", screen !== "start");
  el.quiz.classList.toggle("hidden", screen !== "quiz");
  el.result.classList.toggle("hidden", screen !== "result");
}

function letterOf(optionText) {
  const m = String(optionText).trim().match(/^([A-Da-d])\)/);
  return m ? m[1].toLowerCase() : null;
}

function optionByLetter(q, letter) {
  if (!q.options || !letter) return "";
  const found = q.options.find((opt) => letterOf(opt) === String(letter).toLowerCase());
  return found || `${letter})`;
}

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreOpen(q, text) {
  const n = normalize(text);
  const keys = q.keywords || [];
  const matched = [];
  const missed = [];
  keys.forEach((k) => {
    if (n.includes(normalize(k))) matched.push(k);
    else missed.push(k);
  });
  const hits = matched.length;
  const need = q.minKeywords || 3;
  if (!n || n.length < 12) {
    return { ok: false, partial: false, hits: 0, need, matched, missed: keys.slice() };
  }
  if (hits >= need) return { ok: true, partial: false, hits, need, matched, missed };
  if (hits >= Math.max(2, Math.ceil(need * 0.5))) {
    return { ok: false, partial: true, hits, need, matched, missed };
  }
  return { ok: false, partial: false, hits, need, matched, missed };
}

function hasAnswer() {
  const q = questions[current];
  if (!q) return false;
  if (q.type === "open") return normalize(answers[current]).length >= 12;
  return Boolean(answers[current]);
}

function syncNextState() {
  el.prev.disabled = current === 0;
  el.next.disabled = !hasAnswer();
  el.next.textContent = current === questions.length - 1 ? "Завершить" : "Далее";
}

function renderQuestion() {
  const q = questions[current];
  el.counter.textContent = `${current + 1} / ${questions.length}`;
  el.topic.textContent = q.topic;
  el.text.textContent = q.q;
  el.bar.style.width = `${((current + 1) / questions.length) * 100}%`;

  const isOpen = q.type === "open";
  el.type.textContent = isOpen ? "Открытый" : "Варианты";
  el.type.className = `q-type ${isOpen ? "open" : "mc"}`;

  el.options.classList.toggle("hidden", isOpen);
  el.openWrap.classList.toggle("hidden", !isOpen);

  if (isOpen) {
    el.options.innerHTML = "";
    el.openAnswer.value = answers[current] || "";
    el.openAnswer.oninput = () => {
      answers[current] = el.openAnswer.value;
      syncNextState();
    };
  } else {
    el.options.innerHTML = "";
    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.textContent = opt;
      const key = letterOf(opt) || LETTERS[idx];
      if (answers[current] === key) btn.classList.add("selected");
      btn.addEventListener("click", () => {
        answers[current] = key;
        [...el.options.children].forEach((c) => c.classList.remove("selected"));
        btn.classList.add("selected");
        syncNextState();
      });
      el.options.appendChild(btn);
    });
  }

  syncNextState();
}

function sortRows(rows) {
  const rank = (row) => {
    if (row.open) {
      if (row.s.ok) return 2;
      if (row.s.partial) return 1;
      return 0;
    }
    return row.ok ? 2 : 0;
  };
  return [...rows].sort((a, b) => rank(a) - rank(b) || a.i - b.i);
}

function renderKeywordChips(s) {
  const hits = (s.matched || [])
    .map((k) => `<span class="kw hit">+ ${escapeHtml(k)}</span>`)
    .join("");
  const miss = (s.missed || [])
    .slice(0, 8)
    .map((k) => `<span class="kw miss">− ${escapeHtml(k)}</span>`)
    .join("");
  return `<div class="kw-row">${hits}${miss}</div>
    <div class="muted">Ключевые слова: ${s.hits}/${s.need} минимум для зачёта</div>`;
}

function buildMailPayload(rows, correct, partial, total, pct, byTopic) {
  const wrongLines = rows
    .filter((r) => (r.open ? !r.s.ok : !r.ok))
    .map((r) => {
      if (r.open) {
        const status = r.s.partial ? "частично" : "не зачтено";
        return `#${r.i + 1} [${r.q.topic}] ${status}\nQ: ${r.q.q}\nA: ${answers[r.i] || "—"}\n`;
      }
      return `#${r.i + 1} [${r.q.topic}] ошибка\nQ: ${r.q.q}\nВыбрано: ${optionByLetter(r.q, answers[r.i]) || "—"}\nВерно: ${optionByLetter(r.q, r.q.answer)}\n`;
    })
    .join("\n");

  const topicLines = Object.entries(byTopic)
    .map(([t, s]) => `${t}: ${s.ok}/${s.total}${s.partial ? ` (частичн. ${s.partial})` : ""}`)
    .join("\n");

  const allAnswers = rows
    .map((r) => {
      if (r.open) {
        const status = r.s.ok ? "OK" : r.s.partial ? "частично" : "нет";
        return `#${r.i + 1} [${r.q.topic}] ${status}\n${r.q.q}\n→ ${answers[r.i] || "—"}`;
      }
      const status = r.ok ? "OK" : "ошибка";
      return `#${r.i + 1} [${r.q.topic}] ${status}\n${r.q.q}\n→ ${optionByLetter(r.q, answers[r.i]) || "—"}`;
    })
    .join("\n\n");

  const clip = (text, max = 9000) =>
    text.length <= max ? text : `${text.slice(0, max)}\n…(обрезано)`;

  return {
    _subject: `Тест лояльности: ${profile.name} · ${profile.store} · ${profile.role} · ${correct}/${total}`,
    _template: "table",
    _captcha: "false",
    _honey: "",
    name: profile.name,
    email: "arimberg@gmail.com",
    first_name: profile.firstName,
    last_name: profile.lastName,
    store: profile.store,
    position: profile.role,
    score: `${correct}/${total}`,
    percent: `${pct}%`,
    partial: String(partial),
    topics: clip(topicLines, 3000),
    mistakes: clip(wrongLines || "Ошибок нет", 6000),
    answers: clip(allAnswers, 9000),
    message: `Результат теста лояльности «У Михалыча»\nИмя: ${profile.firstName}\nФамилия: ${profile.lastName}\nДолжность: ${profile.role}\nМагазин: ${profile.store}\nБалл: ${correct}/${total} (${pct}%)\nЧастично: ${partial}`,
  };
}

function payloadToFormData(payload) {
  const fd = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    fd.append(key, value == null ? "" : String(value));
  });
  return fd;
}

function sendViaHiddenForm(payload) {
  return new Promise((resolve) => {
    const frameName = `mail_frame_${Date.now()}`;
    const iframe = document.createElement("iframe");
    iframe.name = frameName;
    iframe.title = "mail";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://formsubmit.co/arimberg@gmail.com";
    form.target = frameName;
    form.style.display = "none";

    Object.entries(payload).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value == null ? "" : String(value);
      form.appendChild(input);
    });

    const next = document.createElement("input");
    next.type = "hidden";
    next.name = "_next";
    next.value = "https://formsubmit.co/thanks.html";
    form.appendChild(next);

    document.body.appendChild(form);
    form.submit();

    window.setTimeout(() => {
      form.remove();
      iframe.remove();
      resolve(true);
    }, 2500);
  });
}

async function sendResultEmail(payload) {
  if (!el.mailStatus) return;
  el.mailStatus.className = "mail-status";
  el.mailStatus.textContent = "Отправляем результат на arimberg@gmail.com…";

  let ajaxOk = false;
  let activationNeeded = false;

  try {
    const res = await fetch(MAIL_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: payloadToFormData(payload),
    });
    const data = await res.json().catch(() => ({}));
    const success = data.success === true || data.success === "true";
    if (success) {
      ajaxOk = true;
    } else {
      const msg = String(data.message || "");
      if (/confirm|activation|activate|подтверд/i.test(msg)) {
        activationNeeded = true;
      }
      throw new Error(msg || `HTTP ${res.status}`);
    }
  } catch (err) {
    console.warn("FormSubmit AJAX:", err);
    try {
      await sendViaHiddenForm(payload);
      ajaxOk = true;
    } catch (err2) {
      console.error(err2);
    }
  }

  if (ajaxOk && !activationNeeded) {
    el.mailStatus.className = "mail-status ok";
    el.mailStatus.textContent = "Результат отправлен на arimberg@gmail.com.";
    return;
  }

  if (activationNeeded) {
    el.mailStatus.className = "mail-status bad";
    el.mailStatus.textContent =
      "FormSubmit ждёт подтверждения: откройте письмо на arimberg@gmail.com и подтвердите адрес — после этого ответы будут приходить.";
    return;
  }

  el.mailStatus.className = "mail-status bad";
  el.mailStatus.innerHTML =
    'Не удалось подтвердить отправку. Проверьте почту arimberg@gmail.com (в т.ч. «Спам») и подтвердите FormSubmit при первом письме. <a href="mailto:arimberg@gmail.com?subject=' +
    encodeURIComponent(payload._subject) +
    "&body=" +
    encodeURIComponent(payload.message + "\n\n" + (payload.mistakes || "").slice(0, 1200)) +
    '">Открыть письмо вручную</a>';
}

function grade() {
  let correct = 0;
  let partial = 0;
  let mcTotal = 0;
  let mcOk = 0;
  let openTotal = 0;
  let openOk = 0;
  const byTopic = {};

  const rows = questions.map((q, i) => {
    if (!byTopic[q.topic]) byTopic[q.topic] = { ok: 0, total: 0, partial: 0, wrong: [] };
    byTopic[q.topic].total += 1;

    if (q.type === "open") {
      openTotal += 1;
      const s = scoreOpen(q, answers[i]);
      if (s.ok) {
        correct += 1;
        openOk += 1;
        byTopic[q.topic].ok += 1;
      } else if (s.partial) {
        partial += 1;
        byTopic[q.topic].partial += 1;
        byTopic[q.topic].wrong.push(i + 1);
      } else {
        byTopic[q.topic].wrong.push(i + 1);
      }
      return { q, i, s, open: true };
    }

    mcTotal += 1;
    const ok = answers[i] === q.answer;
    if (ok) {
      correct += 1;
      mcOk += 1;
      byTopic[q.topic].ok += 1;
    } else {
      byTopic[q.topic].wrong.push(i + 1);
    }
    return { q, i, ok, open: false };
  });

  const total = questions.length;
  const pct = total ? Math.round((correct / total) * 100) : 0;
  el.scoreNum.textContent = String(correct);
  if (el.scoreTotal) el.scoreTotal.textContent = String(total);
  if (el.scorePercent) {
    el.scorePercent.textContent = `${pct}% верных · ошибок: ${total - correct - partial}${
      partial ? ` · частично: ${partial}` : ""
    }`;
  }
  el.scoreTitle.textContent = `${profile.name}, ваш результат`;

  let verdict;
  if (correct >= Math.ceil(total * 0.86)) {
    verdict = "Отлично — можете уверенно предлагать регистрацию, оформлять карту и принимать заявления на перенос.";
  } else if (correct >= Math.ceil(total * 0.69)) {
    verdict = "Хорошо — база есть, разберите ошибки ниже: скрипт, QR/СМС и перенос по заявлению.";
  } else if (correct >= Math.ceil(total * 0.51)) {
    verdict = "Средне — повторите Правила на gvozditut.ru и инструкцию по переносу бонусов.";
  } else {
    verdict = "Нужно повторно изучить правила лояльности, скрипт кассира и бланк переноса до самостоятельной работы с клиентами.";
  }
  el.verdict.textContent = verdict;

  if (el.summaryCards) {
    el.summaryCards.innerHTML = `
      <div class="summary-card ok"><span class="label">Верно</span><span class="value">${correct}</span></div>
      <div class="summary-card bad"><span class="label">Ошибки</span><span class="value">${total - correct - partial}</span></div>
      <div class="summary-card partial"><span class="label">Частично</span><span class="value">${partial}</span></div>
      <div class="summary-card"><span class="label">С вариантами</span><span class="value">${mcOk}/${mcTotal}</span></div>
      <div class="summary-card"><span class="label">Открытые</span><span class="value">${openOk}/${openTotal}</span></div>
      <div class="summary-card"><span class="label">${escapeHtml(profile.role)} · ${escapeHtml(profile.store)}</span><span class="value">${pct}%</span></div>
    `;
  }

  el.topicStats.innerHTML = Object.entries(byTopic)
    .sort((a, b) => a[1].ok / a[1].total - b[1].ok / b[1].total || a[0].localeCompare(b[0], "ru"))
    .map(([topic, s]) => {
      const pctTopic = Math.round((s.ok / s.total) * 100);
      const extra = s.partial ? ` · частичн. ${s.partial}` : "";
      const wrong = s.wrong.length ? ` · № ${s.wrong.join(", ")}` : "";
      return `<div class="topic-row"><span>${escapeHtml(topic)}<br><span class="muted" style="font-size:0.8rem">${pctTopic}%${wrong}</span></span><strong>${s.ok}/${s.total}${extra}</strong></div>`;
    })
    .join("");

  const weak = Object.entries(byTopic)
    .filter(([, s]) => s.ok < s.total)
    .sort((a, b) => a[1].ok / a[1].total - b[1].ok / b[1].total)
    .slice(0, 8);

  if (el.weakBlock && el.weakList) {
    if (!weak.length) {
      el.weakBlock.classList.add("hidden");
      el.weakList.innerHTML = "";
    } else {
      el.weakBlock.classList.remove("hidden");
      el.weakList.innerHTML = weak
        .map(([topic, s]) => {
          const tip = TOPIC_TIPS[topic] || "Перечитайте раздел базы знаний / регламента.";
          return `<li><strong>${escapeHtml(topic)}</strong> (${s.ok}/${s.total}): ${escapeHtml(tip)}</li>`;
        })
        .join("");
    }
  }

  el.review.innerHTML = sortRows(rows)
    .map((row) => {
      if (row.open) {
        const cls = row.s.ok ? "ok" : row.s.partial ? "partial" : "bad";
        const mark = row.s.ok ? "Зачтено" : row.s.partial ? "Частично" : "Недостаточно";
        const yours = answers[row.i] ? answers[row.i] : "—";
        return `
          <div class="review-item ${cls}">
            <div class="mark">${mark} · вопрос ${row.i + 1}<span class="q-topic">${escapeHtml(row.q.topic)}</span></div>
            <div>${escapeHtml(row.q.q)}</div>
            <div class="opt-line"><strong>Ваш ответ:</strong> ${escapeHtml(yours)}</div>
            ${renderKeywordChips(row.s)}
            <div class="sample"><strong>Эталон:</strong> ${escapeHtml(row.q.sample)}</div>
          </div>`;
      }

      const yoursLetter = answers[row.i];
      const yoursText = yoursLetter ? optionByLetter(row.q, yoursLetter) : "—";
      const rightText = optionByLetter(row.q, row.q.answer);
      return `
        <div class="review-item ${row.ok ? "ok" : "bad"}">
          <div class="mark">${row.ok ? "Верно" : "Ошибка"} · вопрос ${row.i + 1}<span class="q-topic">${escapeHtml(row.q.topic)}</span></div>
          <div>${escapeHtml(row.q.q)}</div>
          <div class="opt-line"><strong>Ваш ответ:</strong> ${escapeHtml(yoursText)}</div>
          <div class="opt-line"><strong>Верный ответ:</strong> ${escapeHtml(rightText)}</div>
          <div class="sample"><strong>Пояснение:</strong> ${escapeHtml(row.q.explain || "")}</div>
        </div>`;
    })
    .join("");

  show("result");
  window.scrollTo({ top: 0, behavior: "smooth" });
  sendResultEmail(buildMailPayload(rows, correct, partial, total, pct, byTopic));
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function readProfile() {
  const firstName = el.firstName.value.trim();
  const lastName = el.lastName.value.trim();
  return {
    firstName,
    lastName,
    name: `${lastName} ${firstName}`.trim(),
    store: el.store.value.trim(),
    role: el.role.value.trim(),
  };
}

function profileValid(p) {
  return Boolean(p.firstName && p.lastName && p.store && p.role);
}

el.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const p = readProfile();
  if (!profileValid(p)) {
    el.formError.textContent = "Заполните имя, фамилию, должность и магазин — поля обязательные.";
    el.formError.classList.remove("hidden");
    return;
  }
  el.formError.classList.add("hidden");
  if (!questions.length) {
    el.formError.textContent = "Вопросы ещё загружаются — подождите секунду.";
    el.formError.classList.remove("hidden");
    return;
  }
  profile = p;
  answers = Array(questions.length).fill(null);
  current = 0;
  show("quiz");
  renderQuestion();
});

el.prev.addEventListener("click", () => {
  if (current > 0) {
    current -= 1;
    renderQuestion();
  }
});

el.next.addEventListener("click", () => {
  if (!hasAnswer()) return;
  if (current === questions.length - 1) grade();
  else {
    current += 1;
    renderQuestion();
  }
});

el.restart.addEventListener("click", () => {
  answers = Array(questions.length).fill(null);
  current = 0;
  show("start");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function setQuestions(data) {
  questions = Array.isArray(data) ? data : [];
}

fetch("questions.json")
  .then((r) => {
    if (!r.ok) throw new Error(String(r.status));
    return r.json();
  })
  .then(setQuestions)
  .catch(() => {
    setQuestions(typeof EMBEDDED_QUESTIONS !== "undefined" ? EMBEDDED_QUESTIONS : []);
  });
