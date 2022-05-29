function handleMouseEnter(){
    //console.log('handle mouse enter was caled', this);
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

function addEventListenersToCards(){
    const cardElements = document.getElementsByClassName('s-card');
    console.log(cardElements);
    
    for(let index = 0; index< cardElements.length; index++){
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement){
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.s-cards-carousel');
    const transform = carousel.style.transform;
    console.log(transform);
}