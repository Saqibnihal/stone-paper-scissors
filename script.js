// accessing elements-----------------------------------------------------------------------
let left = document.getElementById("left");
let right = document.getElementById("right");
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");


// inserting images-------------------------------------------------------------------------
let image1 = document.createElement("img");
image1.src = "stone.jpg";
first.appendChild(image1);

let image2 = document.createElement("img");
image2.src = "paper.jpg";
second.appendChild(image2);

let image3 = document.createElement("img");
image3.src = "scissors.png";
image3.style.padding = "8px";
third.appendChild(image3);

// Player Results accessing---------------------------------------------------------------------------
let resultPlayer = document.getElementById("resultPlayer");
let player = 0;

// CPU Results accessing------------------------------------------------------------------------------
let resultCpu = document.getElementById("resultCpu");
let cpu = 0;

// Results accessing------------------------------------------------------------------------------
let finalResult = document.getElementById("finalResult");

// Left side image creation------------------------------------------------------------------------------
let leftImg = document.createElement("img");

// // adding image to the container-------------------------------------------------------------
// Event delegation for handling clicks on images
document.getElementById("super").addEventListener("click", (event) => {
  if (!event.target.matches("img")) return;

  pointCounter();
  if (remainingCount > 0) {
    loop();
    let selectedSrc = event.target.getAttribute("src");
    leftImg.setAttribute("src", selectedSrc);
    left.appendChild(leftImg);
    remainingmoves.textContent = `Number Of Counts Remain: ${--remainingCount}`;

    // Winning conditions
    if (leftImg.getAttribute("src") === rightimg.getAttribute("src")) {
      viewResult.textContent = `It's a Tie 😑`;
    } else if (
      (selectedSrc === "stone.jpg" &&
        rightimg.getAttribute("src") === "scissors.png") ||
      (selectedSrc === "paper.jpg" &&
        rightimg.getAttribute("src") === "stone.jpg") ||
      (selectedSrc === "scissors.png" &&
        rightimg.getAttribute("src") === "paper.jpg")
    ) {
      viewResult.textContent = `You Win 🥳`;
      player++;
      resultPlayer.textContent = `PLAYER: ${player}`;
    } else {
      viewResult.textContent = `CPU Wins 😢`;
      cpu++;
      resultCpu.textContent = `CPU: ${cpu}`;
    }
    displayingNonefor0();
  }
});

// random image generation-------------------------------------------------------------------
let rightimg = document.createElement("img");
right.appendChild(rightimg);

function loop() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    rightimg.setAttribute("src", image1.getAttribute("src"));
  } else if (random == 1) {
    rightimg.setAttribute("src", image2.getAttribute("src"));
  } else {
    rightimg.setAttribute("src", image3.getAttribute("src"));
  }
}

// Remaining Moves---------------------------------------------------------------------------
let remainingmoves = document.getElementById("h3");
let remainingCount = 10;
remainingmoves.textContent = `Number Of Counts Remain: ${remainingCount}`;

// Viewing Results accessing---------------------------------------------------------------------------
let viewResult = document.getElementById("viewResult");

// point counter function---------------------------------------------------------------------------
function pointCounter() {
  if (remainingCount == 1) {
    if (player == cpu) {
      finalResult.textContent = `Its A Tie 😑`;
    } else if (player > cpu) {
      finalResult.textContent = `🎉 Player Wins with ${player} points 🎉`;
    } else {
      finalResult.textContent = `CPU Wins with ${cpu} points 😕`;
    }
  }
}

// displaying none function---------------------------------------------------------------------------
function displayingNonefor0() {
  if (remainingCount == 0) {
    viewResult.style.display = "none";
    resultCpu.style.display = "none";
    resultPlayer.style.display = "none";
  }
}

// resets the whole page----------------------------------------------------------------------------
let reset = document.getElementById("Reset");
reset.addEventListener("click", () => {
  window.location.reload();
});
