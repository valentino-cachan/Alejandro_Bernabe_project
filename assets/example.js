const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')

prev.addEventListener('click', () => {
    slider.scrollLeft -= 750
})

next.addEventListener('click', () => {
    slider.scrollLeft += 650
})
