const sound = new SoundEngine();
sound.init();

// Тест всех звуков (по очереди)
const testSounds = [
  'hitPlayer', 'hitAI', 'wall', 
  'goalPlayer', 'goalAI', 
  'boost', 'slow', 'spin', 'spark'
];

testSounds.forEach((name, i) => {
  setTimeout(() => {
    console.log(`▶ ${name}`);
    sound[name]();
  }, i * 300);
});