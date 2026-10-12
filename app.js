const rooms = [
  { name: "A", seats: 4, equipment: "дошка" },
  { name: "B", seats: 10, equipment: "проєктор, дошка" },
  { name: "C", seats: 6, equipment: "телевізор" },
  { name: "D", seats: 2, equipment: "—" },
];

const list = document.querySelector("#rooms");
const empty = document.querySelector("#empty");
const select = document.querySelector("#min-seats");
const applyBtn = document.querySelector("#apply");

function render(items) {
  list.textContent = "";
  for (const room of items) {
    const li = document.createElement("li");
    li.className = "room";
    li.textContent = `Кімната ${room.name} — ${room.seats} місць (${room.equipment})`;
    list.append(li);
  }
  empty.hidden = items.length > 0;
}

function applyFilter() {
  const min = Number(select.value);
  const filtered = rooms.filter((room) => room.seats >= min || min === 0);
  render(filtered);
}

applyBtn.addEventListener("click", applyFilter);
render(rooms);
