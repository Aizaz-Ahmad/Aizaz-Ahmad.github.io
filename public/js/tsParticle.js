/**
 * @type {import('tsparticles').Main}
 */
const tsParticles = window.tsParticles;

async function useParticles() {
  const container = await tsParticles.load('particles', {
    autoPlay: true,
    particles: {
      orbit: {
        rotation: {},
        color: C,
        animation: {
          speed: 1000,
        },
        enable: true,
        width: 40,
        radius: 40,
      },
    },
    background: {
      color: '#000000',
    },
  });
  container.play();
  // const particles = container.particles
  // particles.pla
}
useParticles();
