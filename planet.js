const planets = {
  Mercury: {
    desc: "The smallest planet and the closest to the Sun. Mercury has almost no atmosphere to trap heat, causing its surface temperature to swing between burning hot days and freezing nights. Its surface is covered with craters, much like our Moon, revealing a history of intense bombardment from space debris.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg"
  },
  Venus: {
    desc: "Venus shines as the brightest planet in the night sky. Beneath its thick clouds of sulfuric acid lies a surface hot enough to melt lead. Its runaway greenhouse effect makes it the hottest planet, a reminder of how fragile atmospheres can be.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg"
  },
  Earth: {
    desc: "Our home planet — the only known world with liquid water and life. Earth’s perfect balance of distance from the Sun and rich atmosphere makes it a cradle for ecosystems, oceans, and human civilization. Seen from space, it glows with vibrant blues and greens — a living world unlike any other.",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
  },
  Mars: {
    desc: "The Red Planet, named after the Roman god of war. Its iron-rich dust paints the world in shades of red and orange. Once flowing with rivers and lakes, Mars now holds traces of water ice and mysteries that continue to drive humanity’s dream of interplanetary life.",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg"
  },
  Jupiter: {
    desc: "The giant of our Solar System, Jupiter is a swirling world of storms and gas. Its Great Red Spot — a colossal storm larger than Earth — has raged for centuries. With its powerful gravity, Jupiter acts as a cosmic shield, deflecting comets and asteroids from the inner planets.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg"
  },
  Saturn: {
    desc: "Famous for its magnificent rings made of ice and dust, Saturn is both elegant and mysterious. Though light enough to float in water, its storms can be more powerful than any on Earth. Its moons, like Titan and Enceladus, may even hide oceans beneath their icy shells.",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg"
  },
  Uranus: {
    desc: "A pale blue-green world that rolls around the Sun on its side. Uranus’s tilted axis makes its seasons last over 20 years each. Its methane-rich atmosphere gives it a serene, icy color — a quiet beauty at the edge of our Solar System.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg"
  },
  Neptune: {
    desc: "The farthest planet from the Sun, Neptune is a deep blue world of wind and storms. Its fierce winds blow faster than the speed of sound, and its mysterious dark spots appear and vanish over time — an elegant yet violent planet at the frontier of our Solar System.",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg"
  }
};

const params = new URLSearchParams(window.location.search);
const planetName = params.get("name");

const planet = planets[planetName];
const container = document.getElementById("planet-container");

if (planet) {
  container.innerHTML = `
    <h1>${planetName}</h1>
    <img src="${planet.img}" alt="${planetName}">
    <p id="desc">${planet.desc}</p>
  `;
} else {
  container.innerHTML = `<h1>Planet Not Found 🌌</h1>`;
}

function goBack() {
  window.location.href = "index.html";
}
