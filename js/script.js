const element = document.querySelectorAll('.text--element')
const question = document.querySelectorAll('.text--question')
const answer = document.querySelectorAll('.text--answer')
const arrow = document.querySelectorAll('.text--arrow__img')

for (let j = 0; j < element.length; j++) {
    function displayAnswer() {
        question[j].classList.toggle('selected')
        answer[j].classList.toggle('text--answer__visible')
        arrow[j].classList.toggle('text--arrow__rotation')
    }
    function turnOnArrowAnimation() {
        arrow[j].classList.add('text--arrow__animation')
    }
    function turnOffArrowAnimation() {
        arrow[j].classList.remove('text--arrow__animation')
    }
    element[j].addEventListener('click', displayAnswer)
    element[j].addEventListener('mouseover', turnOnArrowAnimation)
    element[j].addEventListener('mouseout', turnOffArrowAnimation)

}

