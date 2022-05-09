const brandInp = document.querySelector('.brand');
const yearInp = document.querySelector('.year');
const listItem = document.querySelectorAll('.check__list-item');
const input = document.querySelectorAll('.check__search-inp');
const wrapper = document.querySelector('.check__search-wrapper');
const warning = document.createElement('p');
warning.innerHTML = "Ничего не найдено..";
warning.className = 'warning';
input.forEach((item) => {
    item.addEventListener('input', (e) => {
        let isFound = false;
        let brandInputValue = brandInp.value.toLowerCase();
        let yearInputValue = yearInp.value;
        listItem.forEach(item => {
            item.classList.remove('hidden');
            let itemValue = item.innerHTML.toLowerCase()
            if ((itemValue.indexOf(brandInputValue) == -1) || (itemValue.indexOf(yearInputValue) == -1)) {
                item.classList.add('hidden');
            } else {
                isFound = true;
            }
        });
        if(!isFound) {
            wrapper.appendChild(warning);
        } else if (document.querySelector('.warning')) {
            wrapper.removeChild(warning);
        }
    })
})



