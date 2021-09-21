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

  let typed2 = new TypeIt('#msg', {
    speed: 50,
    afterComplete(t) {
      t.destroy();
    },
  });
  let typed = new TypeIt('.intro', {
    speed: 75,
    afterComplete() {
      typed2.go();
    },
  });

  document.getElementById('text-404').addEventListener('animationend', () => {
    typed.go();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') container.pause();
    else container.play();
  });
}
document.addEventListener('readystatechange', () => {
  if (document.readyState === 'complete') main();
});
