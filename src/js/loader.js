// grid size
const ROWS = 20;
const COLUMNS = 40;
const BOUNDS = { row: ROWS, column: COLUMNS };
const STATUS_HOLDER = document.querySelector("#game-status");
const INITIAL_SIZE = 3;

// init for mobile
const { clientWidth } = document.body;
const MOBILE = clientWidth <= 500;
if (MOBILE) {
  // create controllers
  const controllers = document.querySelector("#mobile-controller");
  const addBtn = (text, direction, block) => {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.addEventListener("click", () => changeDirectionTo(direction));
    btn.classList = `btn ${block === true ? "btn-block" : ""}`;

    controllers.appendChild(btn);
  };

  addBtn("Up", NORTH, true);
  addBtn("Left", WEST);
  addBtn("Right", EAST);
  addBtn("Down", SOUTH, true);
}

// calculate unit
const UNIT = MOBILE ? Math.floor(clientWidth / COLUMNS) : 20;

// load canvas
const CANVAS = document.querySelector("canvas");
CANVAS.width = UNIT * COLUMNS;
CANVAS.height = UNIT * ROWS;

const CONTEXT = CANVAS.getContext("2d");

registerKeyBinds();
document.querySelector("#start-btn").addEventListener("click", (e) => {
  e.target.innerText = "Restart";
  startGame();
});
