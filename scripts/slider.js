const smallImgs = document.querySelectorAll('.product__small-img');

smallImgs.forEach((i) => {
    i.addEventListener('click', (e) => {
        const bntWrapper = e.target.parentElement;

        bntWrapper.previousElementSibling.remove();

        smallImgs.forEach((i) => {
            i.classList.remove('img--active');
        })
        e.target.classList.add('img--active');

        const mainImg = document.createElement('img');
        mainImg.classList.add('product__img');
        mainImg.src = e.target.src;
        
        bntWrapper.parentElement.prepend(mainImg);
    })
})