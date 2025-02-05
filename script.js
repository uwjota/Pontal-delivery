

const slider = document.querySelector('#category-slider');
const scrollbar = document.querySelector('#scrollbar');
const items = document.querySelectorAll('.slide-item');
let isMouseDown = false;
let startX;
let scrollLeft;
let userInteracting = false;
let interactionTimeout;


// Função para atualizar a opacidade dos itens
function updateOpacity() {
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const containerRect = slider.getBoundingClientRect();
        if (rect.right > containerRect.right || rect.left < containerRect.left) {
            item.style.opacity = '0.4';
        } else {
            item.style.opacity = '1';
        }
    });
}

// Função para atualizar a barra de rolagem
function updateScrollbar() {
    const scrollLeft = slider.scrollLeft;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    const scrollPercentage = scrollLeft / maxScrollLeft;
    scrollbar.style.transform = `scaleX(${scrollPercentage})`;
}

// Resetar o timer para autoSlide
function resetAutoSlideTimer() {
    clearTimeout(interactionTimeout);
    userInteracting = true;
    interactionTimeout = setTimeout(() => {
        userInteracting = false;
    }, 4000); // 4 segundos sem interação
}

// Funcionalidade de arrasto com o mouse
slider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    resetAutoSlideTimer();
});

slider.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

slider.addEventListener('mouseup', () => {
    isMouseDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
    resetAutoSlideTimer();
});

// Evento de rolagem
slider.addEventListener('scroll', () => {
    updateOpacity();
    updateScrollbar();
    resetAutoSlideTimer();
});

// Ajuste no tamanho do slider quando a janela for redimensionada
window.addEventListener('resize', () => {
    updateOpacity();
    updateScrollbar();
});


// Função para rolar automaticamente a cada 6 segundos
function autoSlide() {
    setInterval(() => {
        if (!userInteracting) {
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
            }
        }
    }, 6000);
}

// Inicia o autoSlide
autoSlide();

// Chama as funções de opacidade e barra de rolagem
updateOpacity();
updateScrollbar();



const container = document.getElementById('banner-container');
let scrollAmount = 0;
let autoScrollTimeout;
let userInactiveTimeout;
const scrollInterval = 8000; // Scroll automático a cada 8 segundos
const inactivityDelay = 6000; // Tempo de inatividade antes de retomar o scroll

function scrollBanner() {
  scrollAmount += container.clientWidth;
  if (scrollAmount >= container.scrollWidth) {
    scrollAmount = 0;
  }
  container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}

function startAutoScroll() {
  autoScrollTimeout = setInterval(scrollBanner, scrollInterval);
}

function stopAutoScroll() {
  clearInterval(autoScrollTimeout);
}

function resetInactivityTimer() {
  stopAutoScroll();
  clearTimeout(userInactiveTimeout);
  userInactiveTimeout = setTimeout(() => {
    startAutoScroll();
  }, inactivityDelay);
}

// Detecta interações ativas no banner
['scroll', 'mousedown', 'mousemove', 'touchstart', 'touchmove'].forEach(event => {
  container.addEventListener(event, resetInactivityTimer);
});

// Inicia o scroll automático
startAutoScroll();
