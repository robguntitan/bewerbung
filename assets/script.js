// Kleine Interaktionen: Theme Toggle & Email kopieren
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggleTheme');
  const copyBtn = document.getElementById('copyEmail');
  const emailLink = document.getElementById('email');

  // Wähle initiales Theme anhand des Systempräferenz or saved setting
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const root = document.documentElement;
  if (saved) root.setAttribute('data-theme', saved);
  else if (prefersDark) root.setAttribute('data-theme', 'dark');

  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  copyBtn.addEventListener('click', async () => {
    const text = emailLink.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = '✅';
      setTimeout(() => copyBtn.textContent = '📋', 2000);
    } catch (e) {
      alert('Kopieren fehlgeschlagen. Bitte manuell kopieren.');
    }
  });
});
