document.addEventListener('DOMContentLoaded', function() {
  const passwordPrompt = document.getElementById('password-prompt');
  const valentineContent = document.getElementById('valentine-content');
  const passwordInput = document.getElementById('password');
  const submitPasswordButton = document.getElementById('submit-password');
  const passwordError = document.getElementById('password-error');

  // Mot de passe (à changer!)
  const correctPasswords = ["wouly", "Woly","Wouly","woly"];

  submitPasswordButton.addEventListener('click', function() {
    const enteredPassword = passwordInput.value;

    if (correctPasswords.includes(enteredPassword)) {
      passwordPrompt.style.display = 'none';
      valentineContent.style.display = 'block';
      startConfetti(); // Démarrer les confettis après la validation du mot de passe
    } else {
      passwordError.textContent = "Mot de passe incorrect. Veuillez réessayer. Ce n'est pas le nom de la partenaire de Kader.";
    }
  });

  // Empêcher la soumission du formulaire par défaut (si vous utilisez un formulaire)
  passwordPrompt.addEventListener('submit', function(event) {
    event.preventDefault();
  });

  // Fonction pour créer les confettis
  function startConfetti() {
    const numberOfConfetti = 100;

    for (let i = 0; i < numberOfConfetti; i++) {
      createConfetti();
    }
  }

  function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.backgroundColor = getRandomColor();
    document.body.appendChild(confetti);

    // Supprimer les confettis après l'animation
    confetti.addEventListener('animationend', function() {
      confetti.remove();
    });
  }

  function getRandomColor() {
    const colors = ['#f06292', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Kiss animation
  function createKiss() {
    const kiss = document.createElement('span');
    kiss.classList.add('kiss');
    kiss.textContent = '💋'; // Emoji de bisou
    kiss.style.left = Math.random() * 100 + 'vw';
    kiss.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(kiss);

    kiss.addEventListener('animationend', function() {
      kiss.remove();
    });
  }

  // Start kiss animation
  function startKissAnimation() {
    setInterval(createKiss, 1000); // Create a kiss every 1 second
  }

  startKissAnimation();
});