// Scroll suave para o topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar botão "voltar ao topo" apenas quando necessário
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Acessibilidade: permitir ENTER/ESPAÇO nos cards
document.querySelectorAll('.collaborator-card').forEach(card => {
  card.setAttribute('tabindex', '0');
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openPopup();
    }
  });
});

// Abrir um popup/modal com detalhes do colaborador
function openPopup() {
  // Estrutura simples do modal (caso não tenha framework)
  const modal = document.createElement('div');
  modal.className = 'popup-overlay';
  modal.innerHTML = `
    <div class="popup-content" role="dialog" aria-modal="true" aria-label="Detalhes do colaborador">
      <button class="close-popup" aria-label="Fechar popup">×</button>
      <img src="assets/img/user-photo.webp" alt="Foto do colaborador James Smith">
      <h3>James Smith</h3>
      <p>ID 12316</p>
      <p>Revendedor oficial autorizado Moncoc.</p>
    </div>
  `;

  document.body.appendChild(modal);

  // Fechar modal no clique ou tecla ESC
  modal.querySelector('.close-popup').addEventListener('click', () => {
    modal.remove();
  });

  document.addEventListener('keydown', function escClose(e) {
    if (e.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', escClose);
    }
  });
}

// 🚀 ScrollReveal - Animações suaves
ScrollReveal().reveal('.hero-text', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 100
});

ScrollReveal().reveal('.hero-image', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.about-content', {
  origin: 'bottom',
  distance: '40px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.card', {
  origin: 'bottom',
  distance: '30px',
  duration: 800,
  interval: 150
});

ScrollReveal().reveal('.video', {
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  interval: 200
});

ScrollReveal().reveal('.collaborator-card', {
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  delay: 300
});

ScrollReveal().reveal('footer', {
  origin: 'bottom',
  distance: '20px',
  duration: 600,
  delay: 200
});

// Menu hamburguer toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Swiper de kits
const kitsSwiper = new Swiper('.kits-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

/* área restrita para revendedores oficiais */

function openLogin() {
  document.getElementById('loginModal').style.display = 'flex';
}

function closeLogin() {
  document.getElementById('loginModal').style.display = 'none';
}

function checkSenha() {
  const senha = document.getElementById('revendedorSenha').value;
  if (senha === 'moncoc2025') {
    window.location.href = "area-restrita.html";
  } else {
    alert("Senha incorreta! Acesso negado.");
  }
}

/* Animações com ScrollReveal */

ScrollReveal().reveal('[data-sr="fade-left"]', {
  origin: 'left',
  distance: '50px',
  duration: 800,
  delay: 100,
  reset: false
});

ScrollReveal().reveal('[data-sr="fade-right"]', {
  origin: 'right',
  distance: '50px',
  duration: 800,
  delay: 100,
  reset: false
});
