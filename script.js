let currentStep = 1;

document.getElementById('nextBtn').addEventListener('click', () => {
  const current = document.getElementById(`step-${currentStep}`);
  const next = document.getElementById(`step-${currentStep + 1}`);

  if (next) {
    current.classList.add('hidden');
    next.classList.remove('hidden');
    currentStep++;
  } else {
    alert("Đã hiện hết rồi nha 😎");
  }
});
