/**
 * @type {import('tsparticles').Main}
 */
const tsParticles = window.tsParticles;

async function main() {
  const container = await tsParticles.loadJSON(
    'particles',
    'particles-config/background.json'
  );
  container.play();

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') container.pause();
    else container.play();
  });
}
main();
