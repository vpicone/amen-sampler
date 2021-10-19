// Fetch sound metadata from backend
const req = await fetch("//0.0.0.0:8000/data");
const sounds = await req.json();

const soundList = document.querySelector(".sound-list");

/**
 * Creat a list item for each sound using its path as audio src
 * and its assigned key for keypress events
 */
sounds.forEach((sound) => {
  const li = document.createElement("li");
  li.className = "sound";
  li.innerHTML = `<div class="sound__info"><div>${
    sound.name
  }</div><div class="key">${sound.key.toUpperCase()}</div></div>`;
  soundList.appendChild(li);

  const audio = document.createElement("audio");
  audio.controls = true;
  audio.src = sound.path;
  li.appendChild(audio);

  document.addEventListener("keypress", (e) => {
    e.preventDefault();
    if (e.key === sound.key) {
      audio.currentTime = 0;
      audio.play();
    }
  });
});

const infoContainer = document.querySelector(".info-panel__container");
const infoPanel = document.querySelector(".info-panel__panel");
const infoButton = document.querySelector(".info-panel__button");

// Used to swap out button contents between "info" and "close"
const closeSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="enable-background:new 0 0 32 32" xml:space="preserve"><path d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14 14-6.2 14-14S23.8 2 16 2zm0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12-5.4 12-12 12z"/><path style="fill:none" d="M0 0h32v32H0z"/><path d="M21.4 23 16 17.6 10.6 23 9 21.4l5.4-5.4L9 10.6 10.6 9l5.4 5.4L21.4 9l1.6 1.6-5.4 5.4 5.4 5.4z"/></svg>`;
const infoSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8Z"/><path d="M16 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"/><path data-name="&lt;Transparent Rectangle&gt;" style="fill:none" d="M0 0h32v32H0z"/></svg>`;

const expandInfoPanel = () => {
  infoPanel.removeAttribute("hidden");
  setTimeout(() => {
    infoButton.innerHTML = closeSVG;
    infoContainer.classList.toggle("info-panel__container--expanded");
  }, 0);
};

const closeInfoPanel = () => {
  infoContainer.classList.remove("info-panel__container--expanded");
  infoButton.innerHTML = infoSVG;
  setTimeout(() => {
    infoPanel.setAttribute("hidden", true);
  }, 300);
};

// Handles info button click events for toggling panel expansion
infoButton.addEventListener("click", () => {
  if (infoContainer.classList.contains("info-panel__container--expanded")) {
    closeInfoPanel();
  } else {
    expandInfoPanel();
  }
});

// Handles Escape and 'i' key press as triggers for toggling expansion
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    infoContainer.classList.contains("info-panel__container--expanded")
  ) {
    closeInfoPanel();
  }
  if (
    e.key === "i" &&
    !infoContainer.classList.contains("info-panel__container--expanded")
  ) {
    expandInfoPanel();
  }
});

// Handles click outside of panel as close trigger
document.addEventListener("click", (e) => {
  const isExpanded = infoContainer.classList.contains(
    "info-panel__container--expanded"
  );
  if (
    infoButton !== e.target &&
    infoPanel !== e.target &&
    !infoPanel.contains(e.target) &&
    isExpanded
  ) {
    closeInfoPanel();
  }
});
