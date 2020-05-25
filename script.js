const container = document.querySelector('.container');
const btn_1 = document.querySelector('.btn-1')

const makeGrid = (size) => {

    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);

    let squares = size * size;

    for (let i = 0; i < squares; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);
    }
}   

const changeColor = () => {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            item.classList.add('change-color');
            console.log(item);
        })
    })
}

const clearGrid = () => {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        container.removeChild(item)
    })
}

// 

const resetGrid = () => {
    let size = prompt('Enter your grid size?');
    clearGrid();
    makeGrid(size);
    changeColor();
}

makeGrid(20)
changeColor()

btn_1.addEventListener('click', resetGrid)