const PARTICIPANTS = [
  { number: 1, name: "畢語芊" },
  { number: 2, name: "葉冠廷" },
  { number: 3, name: "詹力衡" },
  { number: 4, name: "詹力璇" },
  { number: 5, name: "林虹秀" },
  { number: 6, name: "謝鳳如" },
  { number: 7, name: "謝曉玲" },
  { number: 8, name: "洪麗慧" },
  { number: 9, name: "黃瑞眞" },
  { number: 10, name: "李炳玉" },
  { number: 11, name: "陳庭宇" },
  { number: 12, name: "陳宜鄉" },
  { number: 13, name: "李玟潔" },
  { number: 14, name: "陳詩涵" },
  { number: 15, name: "王俊昇" },
  { number: 16, name: "劉源燦" },
  { number: 17, name: "劉源耀" },
  { number: 18, name: "李金華" },
  { number: 19, name: "陳芬芬" },
  { number: 20, name: "馬榮發" },
  { number: 21, name: "劉瓊慧" },
  { number: 22, name: "徐沛洋" },
  { number: 23, name: "鄭育昇" },
  { number: 24, name: "楊昭雯" },
  { number: 25, name: "鄭懿" },
  { number: 26, name: "畢譯文" },
  { number: 27, name: "許雅華" },
  { number: 28, name: "魏德輔" },
  { number: 29, name: "鄭再添" },
  { number: 30, name: "杜菁艾" },
  { number: 31, name: "宋瑞峰" },
  { number: 32, name: "莊佳璋" },
  { number: 33, name: "黃嘉慶" },
  { number: 34, name: "葉秀靜" },
  { number: 35, name: "王仁甫" },
  { number: 36, name: "王耀堂" },
  { number: 37, name: "廖家成" },
  { number: 38, name: "劉世彰" },
  { number: 39, name: "陳智文" },
  { number: 40, name: "徐育宏" },
  { number: 41, name: "陳宇聖" },
  { number: 42, name: "莊詠任" },
  { number: 43, name: "李健瑋" },
  { number: 44, name: "王瑞琦" },
  { number: 45, name: "溫臻勛" },
  { number: 46, name: "周美芬" },
  { number: 47, name: "施琳" },
  { number: 48, name: "林虹妙" },
  { number: 49, name: "陳幸毅" },
  { number: 50, name: "許佳政" },
  { number: 51, name: "楊昕澄" },
  { number: 52, name: "詹亞澄" },
  { number: 53, name: "林宇辰" },
  { number: 54, name: "王薇雯" },
  { number: 55, name: "章皓" },
  { number: 56, name: "柯正邦" },
  { number: 57, name: "張家維" },
  { number: 58, name: "許世平" },
  { number: 59, name: "顏銘淇" },
  { number: 60, name: "賴享結" },
  { number: 61, name: "張惟雯" },
  { number: 62, name: "溫連忠" },
  { number: 63, name: "張益銘" },
  { number: 64, name: "林文柱" },
  { number: 65, name: "黃均繡" },
  { number: 66, name: "周金孝" },
  { number: 67, name: "程鈞" },
  { number: 68, name: "林裕閔" },
  { number: 69, name: "張真禎" },
  { number: 70, name: "林恩如" },
  { number: 71, name: "林于晴" },
  { number: 72, name: "黃琇萱" },
  { number: 73, name: "黃宇萱" },
  { number: 74, name: "劉靜宜" },
  { number: 75, name: "温志華" },
  { number: 76, name: "孫紫芝" },
  { number: 77, name: "温琢莉" },
  { number: 78, name: "温孫毓" },
  { number: 79, name: "胡碧蓮" },
  { number: 80, name: "李家瑋" },
  { number: 81, name: "黃聖智" },
  { number: 82, name: "廖敏玲" },
  { number: 83, name: "陳宜如" },
  { number: 84, name: "蔡義聰" },
  { number: 85, name: "黃怡萱" },
  { number: 86, name: "李文修" },
  { number: 87, name: "董琇力" },
  { number: 88, name: "盧杰志" },
  { number: 89, name: "陳淑華" },
  { number: 90, name: "盧祈睿" },
  { number: 91, name: "盧禹彤" },
  { number: 92, name: "傅麗滿" },
  { number: 93, name: "傅耀秋" },
  { number: 94, name: "蘇健宗" },
  { number: 95, name: "蘇穗杰" },
  { number: 96, name: "蘇以澄" },
  { number: 97, name: "蘇以恩" },
  { number: 98, name: "傅瑆凱" },
  { number: 99, name: "黃怡華" },
  { number: 100, name: "王采薇" },
  { number: 101, name: "黃睿萱" },
  { number: 102, name: "黃睿亨" },
  { number: 103, name: "黃睿妍" },
  { number: 104, name: "王冠綸" },
  { number: 105, name: "蔡秀珠" },
  { number: 106, name: "張佩玲" },
  { number: 107, name: "王詩元" },
  { number: 108, name: "王詩茗" },
  { number: 109, name: "王詩瑜" },
  { number: 110, name: "潘韻如" },
  { number: 111, name: "賴惠祺" },
  { number: 112, name: "陳立豐" },
  { number: 113, name: "陳立雄" }
];

const TOTAL_PRIZES = 5;
const STORAGE_KEY = "jibeng-marathon-name-lottery-winners";

const currentNumber = document.querySelector("#currentNumber");
const currentName = document.querySelector("#currentName");
const drawCount = document.querySelector("#drawCount");
const remainingCount = document.querySelector("#remainingCount");
const drawOne = document.querySelector("#drawOne");
const drawAll = document.querySelector("#drawAll");
const resetDraw = document.querySelector("#resetDraw");
const winnerList = document.querySelector("#winnerList");
const emptyState = document.querySelector("#emptyState");
const toast = document.querySelector("#toast");

let winners = loadWinners();
let spinTimer = null;
let toastTimer = null;

function loadWinners() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved)
      ? saved
          .map((number) => PARTICIPANTS.find((person) => person.number === number))
          .filter(Boolean)
          .slice(0, TOTAL_PRIZES)
      : [];
  } catch {
    return [];
  }
}

function saveWinners() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(winners.map((person) => person.number)));
}

function getAvailablePeople() {
  const used = new Set(winners.map((person) => person.number));
  return PARTICIPANTS.filter((person) => !used.has(person.number));
}

function pickPerson() {
  const available = getAvailablePeople();
  if (winners.length >= TOTAL_PRIZES || available.length === 0) {
    return null;
  }
  const index = Math.floor(Math.random() * available.length);
  return available[index];
}

function render() {
  drawCount.textContent = String(winners.length);
  remainingCount.textContent = `剩餘 ${PARTICIPANTS.length - winners.length} 位`;
  winnerList.innerHTML = winners
    .map(
      (person, index) => `
        <li>
          <small>第 ${index + 1} 名</small>
          <strong>${person.number}</strong>
          <b>${person.name}</b>
        </li>
      `
    )
    .join("");

  emptyState.classList.toggle("is-hidden", winners.length > 0);
  drawOne.disabled = winners.length >= TOTAL_PRIZES;
  drawAll.disabled = winners.length >= TOTAL_PRIZES;

  const latest = winners[winners.length - 1];
  currentNumber.textContent = latest ? String(latest.number) : "--";
  currentName.textContent = latest ? latest.name : "等待抽籤";
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function startSpin() {
  clearInterval(spinTimer);
  currentNumber.classList.add("is-spinning");
  currentName.classList.add("is-spinning");
  spinTimer = setInterval(() => {
    const person = PARTICIPANTS[Math.floor(Math.random() * PARTICIPANTS.length)];
    currentNumber.textContent = String(person.number);
    currentName.textContent = person.name;
  }, 70);
}

function stopSpin(person) {
  clearInterval(spinTimer);
  spinTimer = null;
  currentNumber.classList.remove("is-spinning");
  currentName.classList.remove("is-spinning");
  currentNumber.textContent = String(person.number);
  currentName.textContent = person.name;
}

function lockControls(isLocked) {
  drawOne.disabled = isLocked || winners.length >= TOTAL_PRIZES;
  drawAll.disabled = isLocked || winners.length >= TOTAL_PRIZES;
  resetDraw.disabled = isLocked;
}

async function drawNext() {
  const person = pickPerson();
  if (person === null) {
    showToast("5 名已抽完，恭喜所有得獎者！");
    return false;
  }

  lockControls(true);
  startSpin();
  await new Promise((resolve) => setTimeout(resolve, 900));
  winners.push(person);
  saveWinners();
  stopSpin(person);
  render();
  lockControls(false);
  showToast(`恭喜 ${person.number} 號 ${person.name} 中獎！`);
  return true;
}

async function drawRemaining() {
  if (winners.length >= TOTAL_PRIZES) {
    showToast("5 名已抽完，恭喜所有得獎者！");
    return;
  }

  while (winners.length < TOTAL_PRIZES) {
    const didDraw = await drawNext();
    if (!didDraw) {
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, 260));
  }
}

function resetLottery() {
  clearInterval(spinTimer);
  winners = [];
  saveWinners();
  currentNumber.classList.remove("is-spinning");
  currentName.classList.remove("is-spinning");
  render();
  showToast("已重新開始抽籤。");
}

drawOne.addEventListener("click", drawNext);
drawAll.addEventListener("click", drawRemaining);
resetDraw.addEventListener("click", resetLottery);

render();
