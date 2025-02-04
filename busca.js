const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultList = document.getElementById("resultList");

const restaurants = [
  { name: "Acorsi", image: "https://projeto-cardapio-pearl.vercel.app/assets/fundo.webp", link: "https://projeto-cardapio-pearl.vercel.app/" },
  { name: "Conveniência do Mah", image: "https://projeto-cardapio-pearl.vercel.app/assets/fundo.webp", link: "https://projeto-cardapio-pearl.vercel.app/" },
  { name: "Elite Lounge", image: "https://projeto-cardapio-pearl.vercel.app/assets/fundo.webp", link: "https://projeto-cardapio-pearl.vercel.app/" }
];

// Exibe lista de resultados
searchButton.addEventListener("click", () => updateResultList());

searchInput.addEventListener("input", () => {
  if (searchInput.value.trim()) {
    updateResultList();
  } else {
    hideResultList();
  }
});

// Esconde lista ao clicar fora
document.addEventListener("click", (e) => {
  if (!e.target.closest("#searchInput") && !e.target.closest("#searchButton")) {
    hideResultList();
  }
});

// Atualiza lista de resultados
function updateResultList() {
  const query = searchInput.value.toLowerCase().trim();
  resultList.innerHTML = "";
  resultList.classList.remove("hidden");

  const filteredRestaurants = restaurants.filter(({ name }) =>
    name.toLowerCase().includes(query)
  );

  if (filteredRestaurants.length > 0) {
    filteredRestaurants.forEach(({ name, image, link }) => {
      const restaurantCard = `
        <a href="${link}" target="_blank" class="flex items-center p-2 border-b hover:bg-gray-100 transition">
          <img src="${image}" alt="${name}" class="w-12 h-12 object-cover rounded-md">
          <span class="ml-4 text-gray-700">${name}</span>
        </a>
      `;
      resultList.innerHTML += restaurantCard;
    });
  } else {
    resultList.innerHTML = `<p class="p-2 text-gray-500">Nenhum restaurante encontrado.</p>`;
  }
}

// Esconde lista de resultados
function hideResultList() {
  resultList.classList.add("hidden");
}