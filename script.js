
"use strict";

/* ==========================================
   WORDPLAY ULTRA MAX
   Dados e categorias
========================================== */

const categories = [
  {
    id: "mentalista",
    name: "O Mentalista",
    icon: "🕵️",
    group: "series",
    description: "Personagens, investigações e universo da série.",
    words: ["PATRICK", "JANE", "LISBON", "TERESA", "CHO", "RIOS", "VANPELT", "REDFLAG", "CBI", "CALIFORNIA", "INVESTIGACAO", "PISTA", "MENTALISTA", "REDJOHN", "BERTRAM", "HIGHTOWER", "JANEIRO", "OBSERVACAO"]
  },
  {
    id: "smallville",
    name: "Smallville",
    icon: "🦸",
    group: "series",
    description: "As aventuras do Superboy e seus personagens.",
    words: ["CLARK", "KENT", "SUPERMAN", "LEX", "LUTHOR", "LANA", "LANG", "CHLOE", "OLIVER", "QUEEN", "KRYPTON", "METEORO", "FORTALEZA", "JONATHAN", "MARTHA", "LOIS", "JUSTICA", "PLANETA"]
  },
  {
    id: "ferramentas",
    name: "Ferramentas",
    icon: "🔧",
    group: "daily",
    description: "Ferramentas manuais, elétricas e profissionais.",
    words: ["MARTELO", "ALICATE", "CHAVE", "FURADEIRA", "SERRA", "TRENA", "BROCA", "PARAFUSO", "CHAVEIRO", "TORQUES", "ESQUADRO", "LIXADEIRA", "FORMÃO", "ESTILETE", "SOLDADOR"]
  },
  {
    id: "tecnologia",
    name: "Tecnologia",
    icon: "💻",
    group: "knowledge",
    description: "Computadores, programação e inovação.",
    words: ["COMPUTADOR", "INTERNET", "TECLADO", "MOUSE", "PROCESSADOR", "MEMORIA", "ROTEADOR", "SERVIDOR", "SOFTWARE", "HARDWARE", "JAVASCRIPT", "PYTHON", "CODIGO", "MONITOR", "PLACA"]
  },
  {
    id: "redes",
    name: "Redes de Computadores",
    icon: "🌐",
    group: "knowledge",
    description: "Protocolos, conexões e infraestrutura.",
    words: ["ROTEADOR", "SWITCH", "PACOTE", "TCP", "IP", "DNS", "DHCP", "SERVIDOR", "CLIENTE", "ETHERNET", "FIBRA", "REDE", "MASCARA", "GATEWAY", "PING"]
  },
  {
    id: "animais",
    name: "Animais",
    icon: "🦁",
    group: "nature",
    description: "Espécies do mundo animal.",
    words: ["LEAO", "TIGRE", "ELEFANTE", "GIRAFA", "CAVALO", "CACHORRO", "GATO", "MACACO", "BALEIA", "GOLFINHO", "COBRA", "TARTARUGA", "AGUIA", "PANTERA"]
  },
  {
    id: "frutas",
    name: "Frutas",
    icon: "🍎",
    group: "nature",
    description: "Frutas e sabores variados.",
    words: ["BANANA", "MACA", "LARANJA", "MORANGO", "ABACAXI", "MELANCIA", "MANGA", "UVA", "PERA", "GOIABA", "MAMAO", "CAJU", "ACEROLA"]
  },
  {
    id: "profissoes",
    name: "Profissões",
    icon: "👨‍🔧",
    group: "daily",
    description: "Carreiras e ocupações profissionais.",
    words: ["MEDICO", "PROFESSOR", "ENGENHEIRO", "ADVOGADO", "PROGRAMADOR", "DESIGNER", "MOTORISTA", "COZINHEIRO", "GARCOM", "DENTISTA", "ARQUITETO", "ELETRICISTA"]
  },
  {
    id: "esportes",
    name: "Esportes",
    icon: "⚽",
    group: "entertainment",
    description: "Modalidades esportivas e competições.",
    words: ["FUTEBOL", "BASQUETE", "VOLEI", "NATACAO", "CORRIDA", "TENIS", "BOXE", "CICLISMO", "SURFE", "GINASTICA", "GOL", "CAMPEONATO"]
  },
  {
    id: "cinema",
    name: "Cinema",
    icon: "🎬",
    group: "entertainment",
    description: "Filmes, gêneros e elementos cinematográficos.",
    words: ["DIRETOR", "ATOR", "ROTEIRO", "CINEMA", "CAMERA", "CENA", "FILME", "DRAMA", "COMEDIA", "AVENTURA", "FICCAO", "ANIMACAO"]
  },
  {
    id: "games",
    name: "Games",
    icon: "🎮",
    group: "entertainment",
    description: "Jogos, personagens e cultura gamer.",
    words: ["SONIC", "MARIO", "ZELDA", "CONTROLE", "CONSOLE", "GAMER", "FASE", "JOGADOR", "PIXEL", "ARCADE", "AVENTURA", "BOSS"]
  },
  {
    id: "natureza",
    name: "Natureza",
    icon: "🌳",
    group: "nature",
    description: "Paisagens, meio ambiente e ecossistemas.",
    words: ["FLORESTA", "ARVORE", "RIO", "MONTANHA", "OCEANO", "CACHOEIRA", "DESERTO", "PLANETA", "ECOSSISTEMA", "AMBIENTE", "NATUREZA"]
  },
  {
    id: "espaco",
    name: "Espaço",
    icon: "🚀",
    group: "knowledge",
    description: "Planetas, estrelas e universo.",
    words: ["PLANETA", "SATURNO", "MARTE", "JUPITER", "VENUS", "GALAXIA", "ESTRELA", "COMETA", "ASTEROIDE", "ORBITA", "LUA", "SOL"]
  },
  {
    id: "historia",
    name: "História",
    icon: "🏛️",
    group: "knowledge",
    description: "Civilizações, acontecimentos e épocas.",
    words: ["EGITO", "ROMA", "GRECIA", "IMPERIO", "GUERRA", "REVOLUCAO", "HISTORIA", "CIVILIZACAO", "CASTELO", "IDADEMEDIA"]
  },
  {
    id: "musica",
    name: "Música",
    icon: "🎵",
    group: "entertainment",
    description: "Instrumentos, estilos e elementos musicais.",
    words: ["VIOLAO", "PIANO", "BATERIA", "GUITARRA", "MUSICA", "MELODIA", "RITMO", "CANTOR", "BANDA", "ACORDE", "TECLADO"]
  },
  {
    id: "culinaria",
    name: "Culinária",
    icon: "🍕",
    group: "daily",
    description: "Ingredientes, receitas e gastronomia.",
    words: ["PIZZA", "LASANHA", "ARROZ", "FEIJAO", "CARNE", "SALADA", "BOLO", "SOPA", "TEMPERO", "RECEITA", "COZINHA"]
  },
  {
    id: "transportes",
    name: "Transportes",
    icon: "🚗",
    group: "daily",
    description: "Meios de transporte e mobilidade.",
    words: ["CARRO", "AVIAO", "NAVIO", "TREM", "ONIBUS", "BICICLETA", "MOTO", "HELICOPTERO", "BARCO", "METRO"]
  },
  {
    id: "matematica",
    name: "Matemática",
    icon: "📐",
    group: "knowledge",
    description: "Números, operações e conceitos matemáticos.",
    words: ["SOMA", "DIVISAO", "MULTIPLICACAO", "FRACAO", "EQUACAO", "GEOMETRIA", "ANGULO", "TRIANGULO", "POTENCIA", "RAIZ"]
  },
  {
    id: "desenhos",
    name: "Desenhos",
    icon: "🎨",
    group: "entertainment",
    description: "Animações e personagens famosos.",
    words: ["BOBESPONJA", "PATRICK", "PICA PAU", "SIMPSONS", "ANIMACAO", "DESENHO", "PERSONAGEM", "AVENTURA"]
  },
  {
    id: "objetos",
    name: "Objetos do dia a dia",
    icon: "📦",
    group: "daily",
    description: "Itens presentes em casa e no trabalho.",
    words: ["CADEIRA", "MESA", "LAMPADA", "GARRAFA", "CANETA", "CADERNO", "RELOGIO", "TELEFONE", "MOCHILA", "ESPELHO"]
  }
];

/* ==========================================
   ESTADO
========================================== */

const $ = id => document.getElementById(id);

const STORAGE_KEY = "wordplay_ultra_max_v1";

const defaultData = {
  xp: 0,
  games: 0,
  words: 0,
  favorites: [],
  history: [],
  achievements: [],
  settings: {
    contrast: false,
    large: false,
    motion: false
  }
};

let data;

try {
  data = {
    ...defaultData,
    ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")
  };
} catch {
  data = { ...defaultData };
}

data.settings = { ...defaultData.settings, ...(data.settings || {}) };
data.favorites = Array.isArray(data.favorites) ? data.favorites : [];
data.history = Array.isArray(data.history) ? data.history : [];
data.achievements = Array.isArray(data.achievements) ? data.achievements : [];

let activeFilter = "all";
let currentCategory = null;
let board = [];
let placedWords = [];
let selectedCells = [];
let foundWords = [];
let pointerDown = false;
let startTime = 0;
let timerInterval = null;
let seconds = 0;
let score = 0;
let hintCount = 0;
let gameFinished = false;

/* ==========================================
   FUNÇÕES BÁSICAS
========================================== */

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  updateDashboard();
}

function notify(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(notify.timeout);
  notify.timeout = setTimeout(() => toast.classList.remove("show"), 2500);
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - .5);
}

function normalizeWord(word) {
  return word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Z]/gi, "")
    .toUpperCase();
}

function getLevel() {
  return Math.floor(data.xp / 100) + 1;
}

function getLevelProgress() {
  return data.xp % 100;
}

function formatTime(value) {
  const minutes = Math.floor(value / 60).toString().padStart(2, "0");
  const secs = (value % 60).toString().padStart(2, "0");
  return `${minutes}:${secs}`;
}

/* ==========================================
   NAVEGAÇÃO
========================================== */

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.toggle("active", page.id === pageId);
  });

  document.querySelectorAll(".nav-item").forEach(button => {
    button.classList.toggle("active", button.dataset.page === pageId);
  });

  const names = {
    home: "Início",
    categories: "Categorias",
    favorites: "Favoritos",
    game: "Jogar",
    achievements: "Conquistas",
    history: "Histórico",
    settings: "Configurações"
  };

  $("pageTitle").textContent = names[pageId] || "WordPlay";
  $("sidebar").classList.remove("open");

  if (pageId === "favorites") renderFavorites();
  if (pageId === "history") renderHistory();
  if (pageId === "achievements") renderAchievements();
}

document.querySelectorAll("[data-page]").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});

document.querySelectorAll("[data-goto]").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.goto));
});

$("menuButton").addEventListener("click", () => {
  $("sidebar").classList.toggle("open");
});

/* ==========================================
   CATEGORIAS
========================================== */

function categoryCard(category) {
  const favorite = data.favorites.includes(category.id);

  return `
    <article class="category-card">
      <div class="category-icon">${category.icon}</div>
      <h3>${category.name}</h3>
      <p>${category.description}</p>
      <span class="category-meta">${category.words.length} PALAVRAS NO BANCO</span>
      <div class="category-actions">
        <button class="play-category" data-play="${category.id}">JOGAR AGORA →</button>
        <button class="favorite-button ${favorite ? "selected" : ""}"
          data-favorite="${category.id}"
          aria-label="Adicionar ${category.name} aos favoritos">
          ${favorite ? "♥" : "♡"}
        </button>
      </div>
    </article>
  `;
}

function renderCategories() {
  const search = $("categorySearch").value.trim().toLowerCase();

  const filtered = categories.filter(category => {
    const matchesSearch =
      category.name.toLowerCase().includes(search) ||
      category.description.toLowerCase().includes(search) ||
      category.words.some(word => word.toLowerCase().includes(search));

    const matchesFilter =
      activeFilter === "all" || category.group === activeFilter;

    return matchesSearch && matchesFilter;
  });

  $("allCategories").innerHTML = filtered.map(categoryCard).join("");
  $("emptyCategories").hidden = filtered.length > 0;
  attachCategoryEvents();
}

function renderFeatured() {
  const featured = ["mentalista", "smallville", "ferramentas", "tecnologia", "animais", "games"];
  $("featuredCategories").innerHTML = featured
    .map(id => categories.find(category => category.id === id))
    .filter(Boolean)
    .map(categoryCard)
    .join("");

  attachCategoryEvents();
}

function renderFavorites() {
  const favorites = categories.filter(category => data.favorites.includes(category.id));
  $("favoriteCategories").innerHTML = favorites.map(categoryCard).join("");
  $("emptyFavorites").hidden = favorites.length > 0;
  attachCategoryEvents();
}

function attachCategoryEvents() {
  document.querySelectorAll("[data-play]").forEach(button => {
    button.onclick = () => {
      $("gameCategory").value = button.dataset.play;
      showPage("game");
      startNewGame();
    };
  });

  document.querySelectorAll("[data-favorite]").forEach(button => {
    button.onclick = () => {
      const id = button.dataset.favorite;

      if (data.favorites.includes(id)) {
        data.favorites = data.favorites.filter(item => item !== id);
        notify("Categoria removida dos favoritos.");
      } else {
        data.favorites.push(id);
        notify("Categoria adicionada aos favoritos!");
      }

      saveData();
      renderCategories();
      renderFeatured();
      renderFavorites();
    };
  });
}

function renderCategoryOptions() {
  $("gameCategory").innerHTML = categories.map(category =>
    `<option value="${category.id}">${category.icon} ${category.name}</option>`
  ).join("");
}

$("categorySearch").addEventListener("input", renderCategories);

$("clearSearch").addEventListener("click", () => {
  $("categorySearch").value = "";
  renderCategories();
});

document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    document.querySelectorAll("[data-filter]").forEach(item => {
      item.classList.toggle("active", item === button);
    });

    renderCategories();
  });
});

/* ==========================================
   MOTOR DO CAÇA-PALAVRAS
========================================== */

const difficultyConfig = {
  easy: { size: 8, count: 5 },
  medium: { size: 10, count: 7 },
  hard: { size: 12, count: 9 },
  expert: { size: 15, count: 12 }
};

const directions = [
  [0, 1],
  [1, 0],
  [1, 1],
  [-1, 1],
  [0, -1],
  [-1, 0],
  [-1, -1],
  [1, -1]
];

function createEmptyBoard(size) {
  return Array.from({ length: size }, () =>
    Array(size).fill("")
  );
}

function canPlace(word, row, col, dr, dc, size) {
  for (let i = 0; i < word.length; i++) {
    const r = row + dr * i;
    const c = col + dc * i;

    if (r < 0 || c < 0 || r >= size || c >= size) return false;

    const existing = board[r][c];
    if (existing && existing !== word[i]) return false;
  }

  return true;
}

function placeWord(word, size) {
  const positions = shuffle(
    Array.from({ length: size * size }, (_, i) => [
      Math.floor(i / size),
      i % size
    ])
  );

  for (const [row, col] of positions) {
    for (const [dr, dc] of shuffle(directions)) {
      if (!canPlace(word, row, col, dr, dc, size)) continue;

      const cells = [];

      for (let i = 0; i < word.length; i++) {
        const r = row + dr * i;
        const c = col + dc * i;
        board[r][c] = word[i];
        cells.push({ r, c });
      }

      placedWords.push({ word, cells });
      return true;
    }
  }

  return false;
}

function generateBoard(category, difficulty) {
  const config = difficultyConfig[difficulty];

  for (let attempt = 0; attempt < 20; attempt++) {
    board = createEmptyBoard(config.size);
    placedWords = [];

    const available = shuffle(
      category.words
        .map(normalizeWord)
        .filter(word => word.length >= 2 && word.length <= config.size)
    );

    const selected = available.slice(0, config.count);

    for (const word of selected) {
      placeWord(word, config.size);
    }

    if (placedWords.length >= Math.min(3, config.count)) {
      break;
    }
  }

  for (let r = 0; r < config.size; r++) {
    for (let c = 0; c < config.size; c++) {
      if (!board[r][c]) {
        board[r][c] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      }
    }
  }
}

function renderBoard() {
  const boardElement = $("gameBoard");
  const size = board.length;

  boardElement.innerHTML = "";
  boardElement.style.setProperty("--size", size);

  board.forEach((row, r) => {
    row.forEach((letter, c) => {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "letter-cell";
      cell.textContent = letter;
      cell.dataset.row = r;
      cell.dataset.col = c;
      cell.setAttribute("aria-label", `Linha ${r + 1}, coluna ${c + 1}, letra ${letter}`);
      boardElement.appendChild(cell);
    });
  });
}

function renderWordList() {
  $("wordList").innerHTML = placedWords.map(item => {
    const found = foundWords.includes(item.word);
    return `<span class="word-chip ${found ? "found" : ""}">${item.word}</span>`;
  }).join("");
}

/* ==========================================
   SELEÇÃO DE LETRAS
========================================== */

function getCellFromPoint(x, y) {
  const element = document.elementFromPoint(x, y);
  return element?.closest(".letter-cell") || null;
}

function selectCell(cell) {
  if (!cell || gameFinished) return;

  const r = Number(cell.dataset.row);
  const c = Number(cell.dataset.col);

  const last = selectedCells[selectedCells.length - 1];

  if (last && last.r === r && last.c === c) return;

  selectedCells.push({ r, c });
  cell.classList.add("selected");
}

function clearSelection() {
  $("gameBoard").querySelectorAll(".letter-cell.selected").forEach(cell => {
    cell.classList.remove("selected");
  });
  selectedCells = [];
}

function selectionToWord() {
  if (selectedCells.length < 2) return "";

  return selectedCells.map(position =>
    board[position.r][position.c]
  ).join("");
}

function checkSelection() {
  const word = selectionToWord();
  const reversed = word.split("").reverse().join("");

  const match = placedWords.find(item =>
    !foundWords.includes(item.word) &&
    (item.word === word || item.word === reversed)
  );

  if (match) {
    foundWords.push(match.word);
    data.words++;
    score += 100;
    $("score").textContent = score;

    match.cells.forEach(position => {
      const cell = $("gameBoard").querySelector(
        `[data-row="${position.r}"][data-col="${position.c}"]`
      );
      if (cell) {
        cell.classList.remove("selected");
        cell.classList.add("found");
      }
    });

    renderWordList();
    updateGameStats();
    notify(`Você encontrou: ${match.word}!`);

    if (foundWords.length === placedWords.length) {
      finishGame();
    }
  } else {
    clearSelection();
  }

  selectedCells = [];
}

const boardElement = $("gameBoard");

boardElement.addEventListener("pointerdown", event => {
  const cell = event.target.closest(".letter-cell");
  if (!cell || gameFinished) return;

  event.preventDefault();
  pointerDown = true;
  clearSelection();
  selectCell(cell);
});

boardElement.addEventListener("pointermove", event => {
  if (!pointerDown || gameFinished) return;
  const cell = getCellFromPoint(event.clientX, event.clientY);
  if (cell) selectCell(cell);
});

function releaseSelection() {
  if (!pointerDown) return;
  pointerDown = false;
  checkSelection();
}

document.addEventListener("pointerup", releaseSelection);
document.addEventListener("pointercancel", releaseSelection);

/* ==========================================
   PARTIDA
========================================== */

function startNewGame() {
  const category = categories.find(item => item.id === $("gameCategory").value);
  const difficulty = $("difficulty").value;

  if (!category) {
    notify("Escolha uma categoria.");
    return;
  }

  currentCategory = category;
  foundWords = [];
  score = 0;
  hintCount = 0;
  seconds = 0;
  gameFinished = false;
  pointerDown = false;

  clearInterval(timerInterval);

  generateBoard(category, difficulty);
  renderBoard();
  renderWordList();

  $("currentCategory").textContent = category.name;
  $("timer").textContent = "00:00";
  $("score").textContent = "0";
  $("gameArea").hidden = false;
  $("resultCard").hidden = true;

  updateGameStats();
  showPage("game");

  startTime = Date.now();

  timerInterval = setInterval(() => {
    seconds = Math.floor((Date.now() - startTime) / 1000);
    $("timer").textContent = formatTime(seconds);
  }, 1000);
}

function updateGameStats() {
  $("foundCount").textContent = `${foundWords.length}/${placedWords.length}`;
}

function finishGame() {
  gameFinished = true;
  clearInterval(timerInterval);

  const earnedXP = Math.max(20, 50 + score / 10 - hintCount * 5);

  data.xp += Math.round(earnedXP);
  data.games++;

  data.history.unshift({
    category: currentCategory.name,
    score,
    time: seconds,
    date: new Date().toLocaleDateString("pt-BR"),
    words: foundWords.length
  });

  data.history = data.history.slice(0, 30);

  $("resultScore").textContent = score;
  $("resultXP").textContent = Math.round(earnedXP);
  $("resultTime").textContent = formatTime(seconds);
  $("resultCard").hidden = false;

  checkAchievements();
  saveData();

  notify("Parabéns! Desafio concluído.");
}

$("startGame").addEventListener("click", startNewGame);

$("restartButton").addEventListener("click", startNewGame);

$("quitButton").addEventListener("click", () => {
  clearInterval(timerInterval);
  gameFinished = true;
  $("gameArea").hidden = true;
  $("resultCard").hidden = true;
  notify("Partida encerrada.");
});

$("newGameButton").addEventListener("click", () => {
  $("resultCard").hidden = true;
  $("gameArea").hidden = true;
  showPage("categories");
});

/* ==========================================
   DICAS
========================================== */

$("hintButton").addEventListener("click", () => {
  if (!currentCategory || gameFinished) return;

  const remaining = placedWords.filter(item => !foundWords.includes(item.word));

  if (!remaining.length) return;

  const target = remaining[0];
  const first = target.cells[0];

  const cell = $("gameBoard").querySelector(
    `[data-row="${first.r}"][data-col="${first.c}"]`
  );

  if (cell) {
    cell.classList.add("selected");
    setTimeout(() => cell.classList.remove("selected"), 1000);
  }

  hintCount++;
  notify(`Dica: a palavra começa com ${target.word[0]}.`);
});

/* ==========================================
   CONQUISTAS
========================================== */

const achievements = [
  { id: "first", icon: "🎯", name: "Primeiro desafio", description: "Conclua sua primeira partida.", test: () => data.games >= 1 },
  { id: "five", icon: "🔥", name: "Persistência", description: "Conclua cinco partidas.", test: () => data.games >= 5 },
  { id: "ten", icon: "🏆", name: "Veterano", description: "Conclua dez partidas.", test: () => data.games >= 10 },
  { id: "words", icon: "🔎", name: "Observador", description: "Encontre 50 palavras.", test: () => data.words >= 50 },
  { id: "xp", icon: "⭐", name: "Experiente", description: "Acumule 500 XP.", test: () => data.xp >= 500 },
  { id: "favorites", icon: "💜", name: "Colecionador", description: "Favorite cinco categorias.", test: () => data.favorites.length >= 5 }
];

function checkAchievements() {
  achievements.forEach(item => {
    if (item.test() && !data.achievements.includes(item.id)) {
      data.achievements.push(item.id);
      notify(`Conquista desbloqueada: ${item.name}`);
    }
  });
}

function renderAchievements() {
  $("achievementList").innerHTML = achievements.map(item => {
    const unlocked = data.achievements.includes(item.id);

    return `
      <div class="achievement ${unlocked ? "" : "locked"}">
        <span>${item.icon}</span>
        <strong>${item.name}</strong>
        <p>${item.description}</p>
        <small>${unlocked ? "✓ DESBLOQUEADA" : "🔒 BLOQUEADA"}</small>
      </div>
    `;
  }).join("");
}

/* ==========================================
   HISTÓRICO
========================================== */

function renderHistory() {
  if (!data.history.length) {
    $("historyList").innerHTML =
      '<p class="empty-message">Você ainda não concluiu partidas.</p>';
    return;
  }

  $("historyList").innerHTML = data.history.map(item => `
    <div class="history-item">
      <div>
        <strong>${item.category}</strong>
        <small>${item.date} · ${formatTime(item.time)} · ${item.words} palavras</small>
      </div>
      <b>${item.score} PTS</b>
    </div>
  `).join("");
}

/* ==========================================
   PAINEL DE PROGRESSO
========================================== */

function updateDashboard() {
  const level = getLevel();
  const progress = getLevelProgress();

  $("statGames").textContent = data.games;
  $("statWords").textContent = data.words;
  $("statXP").textContent = `${data.xp} XP`;
  $("statAchievements").textContent = data.achievements.length;

  $("profileLevel").textContent = `Nível ${level}`;
  $("topLevel").textContent = `NÍVEL ${level}`;
  $("sidebarXP").textContent = `${data.xp} XP`;
  $("homeLevel").textContent = `Nível ${level}`;
  $("homeXP").textContent = `${progress} de 100 XP`;

  $("sidebarProgress").style.width = `${progress}%`;
  $("homeProgress").style.width = `${progress}%`;
}

/* ==========================================
   CONFIGURAÇÕES
========================================== */

function loadSettings() {
  $("contrastSetting").checked = data.settings.contrast;
  $("largeSetting").checked = data.settings.large;
  $("motionSetting").checked = data.settings.motion;

  document.body.classList.toggle("high-contrast", data.settings.contrast);
  document.body.classList.toggle("large-letters", data.settings.large);
  document.body.classList.toggle("reduce-motion", data.settings.motion);
}

$("contrastSetting").addEventListener("change", event => {
  data.settings.contrast = event.target.checked;
  loadSettings();
  saveData();
});

$("largeSetting").addEventListener("change", event => {
  data.settings.large = event.target.checked;
  loadSettings();
  saveData();
});

$("motionSetting").addEventListener("change", event => {
  data.settings.motion = event.target.checked;
  loadSettings();
  saveData();
});

$("resetData").addEventListener("click", () => {
  const confirmed = confirm(
    "Tem certeza? Todo o progresso salvo neste navegador será apagado."
  );

  if (!confirmed) return;

  clearInterval(timerInterval);
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
});

/* ==========================================
   INICIALIZAÇÃO
========================================== */

function init() {
  renderCategoryOptions();
  renderCategories();
  renderFeatured();
  updateDashboard();
  loadSettings();
}

init();
