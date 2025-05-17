function selectOption(id) {
  document.querySelectorAll('.option').forEach((option, index) => {
    const isSelected = (index === id - 1);
    option.classList.toggle('active', isSelected);
    option.querySelector('input[type="radio"]').checked = isSelected;
    option.querySelector('.details').style.display = isSelected ? 'block' : 'none';
  });
}

window.onload = () => {
  const radios = document.querySelectorAll('.option input[type="radio"]');
  const selectedIndex = Array.from(radios).findIndex(r => r.checked);
  selectOption(selectedIndex >= 0 ? selectedIndex + 1 : 2); // default to 2nd option
};