// ========== Random Space Background ==========
const backgrounds = [
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1600&q=80"
];
document.body.style.backgroundImage = `url(${backgrounds[Math.floor(Math.random() * backgrounds.length)]})`;

// ========== Planet Data ==========
const planets = [
  { name: "Mercury", fact: "The smallest planet, closest to the Sun.", img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg" },
  { name: "Venus", fact: "Hottest planet with thick clouds of acid.", img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg" },
  { name: "Earth", fact: "Our home planet with life and oceans.", img: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg" },
  { name: "Mars", fact: "Known as the Red Planet, may have water ice.", img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg" },
  { name: "Jupiter", fact: "The largest planet with a giant red storm.", img: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg" },
  { name: "Saturn", fact: "Famous for its rings made of ice and rock.", img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg" },
  { name: "Uranus", fact: "A blue-green planet that rotates on its side.", img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg" },
  { name: "Neptune", fact: "Farthest planet, with strong winds and storms.", img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg" }
];

const container = document.getElementById("planets-container");

planets.forEach(p => {
  const div = document.createElement("div");
  div.className = "planet";
  div.innerHTML = `
    <img src="${p.img}" alt="${p.name}" />
    <h3>${p.name}</h3>
    <p>${p.fact}</p>
  `;
  div.onclick = () => {
    window.location.href = `planet.html?name=${encodeURIComponent(p.name)}`;
  };
  container.appendChild(div);
});
