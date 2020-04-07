export function enter() {
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
      document.getElementById('textarea').value = `${document.getElementById('textarea').value}\n`;
    }
  });

  document.addEventListener('click', (event) => {
    if (event.toElement.id === 'Enter') {
      document.getElementById('textarea').value = `${document.getElementById('textarea').value}\n`;
    }
  });
}