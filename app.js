const TOTAL_ENTRIES = 113;
const TOTAL_PRIZES = 5;
const STORAGE_KEY = "jibeng-marathon-lottery-winners";

const currentNumber = document.querySelector("#currentNumber");
const drawCount = document.querySelector("#drawCount");
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
      ? saved.filter((value) => Number.isInteger(value) && value >= 1 && value <= TOTAL_ENTRIES).slice(0, TOTAL_PRIZES)
      : [];
  } catch {
    return [];
  }
}

function saveWinners() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(winners));
}

function getAvailableNumbers() {
  const used = new Set(winners);
  return Array.from({ length: TOTAL_ENTRIES }, (_, index) => index + 1).filter((value) => !used.has(value));
}

function pickNumber() {
  const available = getAvailableNumbers();
  if (winners.length >= TOTAL_PRIZES || available.length === 0) {
    return null;
  }
  const index = Math.floor(Math.random() * available.length);
  return available[index];
}

function render() {
  drawCount.textContent = String(winners.length);
  winnerList.innerHTML = winners
    .map(
      (number, index) => `
        <li>
          <small>第 ${index + 1} 名</small>
          <strong>${number}</strong>
        </li>
      `
    )
    .join("");

  emptyState.classList.toggle("is-hidden", winners.length > 0);
  drawOne.disabled = winners.length >= TOTAL_PRIZES;
  drawAll.disabled = winners.length >= TOTAL_PRIZES;
  currentNumber.textContent = winners.length ? String(winners[winners.length - 1]) : "--";
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
  spinTimer = setInterval(() => {
    currentNumber.textContent = String(Math.floor(Math.random() * TOTAL_ENTRIES) + 1);
  }, 70);
}

function stopSpin(finalNumber) {
  clearInterval(spinTimer);
  spinTimer = null;
  currentNumber.classList.remove("is-spinning");
  currentNumber.textContent = String(finalNumber);
}

function lockControls(isLocked) {
  drawOne.disabled = isLocked || winners.length >= TOTAL_PRIZES;
  drawAll.disabled = isLocked || winners.length >= TOTAL_PRIZES;
  resetDraw.disabled = isLocked;
}

async function drawNext() {
  const number = pickNumber();
  if (number === null) {
    showToast("5 名已抽完，恭喜所有得獎者！");
    return false;
  }

  lockControls(true);
  startSpin();
  await new Promise((resolve) => setTimeout(resolve, 900));
  winners.push(number);
  saveWinners();
  stopSpin(number);
  render();
  lockControls(false);
  showToast(`恭喜 ${number} 號中獎！`);
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
  render();
  showToast("已重新開始抽籤。");
}

drawOne.addEventListener("click", drawNext);
drawAll.addEventListener("click", drawRemaining);
resetDraw.addEventListener("click", resetLottery);

render();
