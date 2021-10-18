const req = await fetch("//localhost:3000/meta");
const sounds = await req.json();
console.log(sounds);

const main = document.querySelector(".sound-list");
sounds.forEach((sound) => {
  const el = document.createElement("li");
  el.innerHTML = `<span>${sound.name}</span><audio controls src="${sound.path}"></audio>`;
  main.appendChild(el);
});
