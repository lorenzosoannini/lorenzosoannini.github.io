'use strict';
const examples = {
  aquarium: { label: 'Aquarium', target: 'Viewed target photograph of an aquarium', reconstruction: 'Aquarium reconstructed from held-out participant EEG' },
  'polar-bear': { label: 'Polar bear', target: 'Viewed target photograph of a polar bear', reconstruction: 'Polar bear reconstructed from held-out participant EEG' }
};
for (const button of document.querySelectorAll('[data-example]')) {
  button.addEventListener('click', () => {
    const key = button.dataset.example;
    const example = examples[key];
    if (!example) return;
    const target = document.querySelector('#eeg-target');
    const reconstruction = document.querySelector('#eeg-reconstruction');
    target.src = `assets/preview-${key}-target.png`;
    target.alt = example.target;
    reconstruction.src = `assets/preview-${key}-reconstruction.png`;
    reconstruction.alt = example.reconstruction;
    for (const other of document.querySelectorAll('[data-example]')) {
      const active = other === button;
      other.classList.toggle('active', active);
      other.setAttribute('aria-pressed', String(active));
    }
  });
}
const slider = document.querySelector('#ct-slider');
slider.addEventListener('input', () => {
  slider.closest('.ct-comparison').style.setProperty('--split', `${slider.value}%`);
  slider.setAttribute('aria-valuetext', `${slider.value} percent healthy CT visible`);
});
