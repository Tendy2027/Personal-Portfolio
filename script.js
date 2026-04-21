const nav = document.getElementById('mainNav');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };

  try {
    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      alert(`Thanks ${data.name}! ${result.message}`);
      form.reset();
    } else {
      alert('Error: ' + (result.errors ? result.errors.map(e => e.msg).join(', ') : result.message));
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Network error. Please try again later.');
  }
});

const links = document.querySelectorAll('nav a[href^="#"]');
links.forEach((link) => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
    }
  });
});