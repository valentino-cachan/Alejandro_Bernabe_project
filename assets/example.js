const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')

prev.addEventListener('click', () => {
    console.log('prev')
    slider.scrollLeft -= 750
})

next.addEventListener('click', () => {
    console.log('next')
    slider.scrollLeft += 650
})
