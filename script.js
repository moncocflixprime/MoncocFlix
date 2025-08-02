// ✅ script.js REVISADO

// Voltar ao topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Acessibilidade nos cards de colaborador
const cards = document.querySelectorAll('.collaborator-card');
cards.forEach(card => {
  card.setAttribute('tabindex', '0');
  card.addEventListener('keydown', e => {
    if (['Enter', ' '].includes(e.key)) {
      e.preventDefault();
      openPopup();
    }
  });
});

// Modal colaborador
function openPopup() {
  const modal = document.createElement('div');
  modal.className = 'popup-overlay';
  modal.innerHTML = `
    <div class="popup-content" role="dialog" aria-modal="true">
      <button class="close-popup" aria-label="Fechar">×</button>
      <img src="assets/img/user-photo.webp" alt="Colaborador">
      <h3>James Smith</h3>
      <p>ID 12316</p>
      <p>Revendedor oficial autorizado Moncoc.</p>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector('.close-popup').addEventListener('click', () => modal.remove());
  document.addEventListener('keydown', function escClose(e) {
    if (e.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', escClose);
    }
  });
}

// ScrollReveal (padronizado por atributo data-sr)
ScrollReveal().reveal('[data-sr="fade-left"]', {
  origin: 'left', distance: '50px', duration: 800, delay: 100
});
ScrollReveal().reveal('[data-sr="fade-right"]', {
  origin: 'right', distance: '50px', duration: 800, delay: 100
});
ScrollReveal().reveal('[data-sr="fade-up"]', {
  origin: 'bottom', distance: '40px', duration: 800, delay: 100
});

// Menu mobile
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Fechar menu ao clicar em um link (melhor usabilidade)
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});


// LOOP INFINITO DE SCROLL NA SEÇÃO KITS
const kitsScroll = document.querySelector('.kits-scroll');

// Área restrita: login

function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function checkSenha() {
  const senha = document.getElementById("revendedorSenha").value;
  const senhaCorreta = "moncoc2025"; // 🔐 Edite a senha aqui

  if (senha === senhaCorreta) {
    document.getElementById("materiaisExclusivos").style.display = "block";
    closeLogin();
    window.scrollTo({
      top: document.getElementById("materiaisExclusivos").offsetTop - 60,
      behavior: "smooth"
    });
  } else {
    alert("Senha incorreta. Tente novamente.");
  }
}




// Mostrar modal do revendedor
function abrirModalRevendedor() {
  document.getElementById("revendedorModal").style.display = "flex";
}

function fecharModalRevendedor() {
  document.getElementById("revendedorModal").style.display = "none";
}

function verificarSenhaRevendedor() {
  const senhaCorreta = "moncoc2025"; // Troque pela senha oficial
  const senhaDigitada = document.getElementById("senhaRevendedor").value;

  if (senhaDigitada === senhaCorreta) {
    document.getElementById("materiaisExclusivos").style.display = "block";
    fecharModalRevendedor();
    window.scrollTo({
      top: document.getElementById("materiaisExclusivos").offsetTop - 80,
      behavior: "smooth"
    });
  } else {
    alert("❌ Senha incorreta. Tente novamente.");
  }
}




