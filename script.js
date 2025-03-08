function E(selector, parent) {
    if (selector instanceof HTMLElement)
        return selector;
        
    return (parent || document).querySelectorAll(selector);
}

function hasClass(element, className) {
    return element.classList.contains(className);
}

function radioClass(element, className) {
    E("." + className).forEach(elem => 
    elem.classList.remove(className));
    element.classList.toggle(className);
}

function tabs(nav) {
    let navElem = E(nav)[0];

    navElem.addEventListener("click", (e) => {
        let target = e.target;

        if (hasClass(target, "tab")) 
            radioClass(target, "active");

        let linkedTab = E("." + target.id)[0];
        
        radioClass(linkedTab, "visible");
        
    });

    let active = E(".tab.active")[0];
    if (active) {
        radioClass(E("." + active.id)[0], "visible");
    }
}

tabs(".menu-nav")



/* PARA BOTON 1 */ 
let loadMoreBtn1 = document.querySelector('#load-more-1');
let currentItem1 = 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-1 .box-1')];

    if (loadMoreBtn1.textContent === "Cargar menos") {
        let newCurrent = currentItem1 - 4;
        for (var i = newCurrent; i < currentItem1; i++) {
            if (boxes[i]) boxes[i].style.display = "none";
        }
        currentItem1 = newCurrent;
        
        if (currentItem1 <= 4) {
            loadMoreBtn1.textContent = "Cargar más";
        }
        return;
    }

    for (var i = currentItem1; i < currentItem1 + 4; i++) {
        if (boxes[i]) boxes[i].style.display = 'inline-block';
    }
    currentItem1 += 4;

    if (currentItem1 >= boxes.length) {
        loadMoreBtn1.textContent = "Cargar menos";
    }
};

/* PARA BOTON 2 */ 
let loadMoreBtn2 = document.querySelector('#load-more-2');
let currentItem2 = 4;

loadMoreBtn2.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-2 .box-2')];

    if (loadMoreBtn2.textContent === "Cargar menos") {
        let newCurrent = currentItem2 - 4;
        for (var i = newCurrent; i < currentItem2; i++) {
            if (boxes[i]) boxes[i].style.display = "none";
        }
        currentItem2 = newCurrent;
        
        if (currentItem2 <= 4) {
            loadMoreBtn2.textContent = "Cargar más";
        }
        return;
    }

    for (var i = currentItem2; i < currentItem2 + 4; i++) {
        if (boxes[i]) boxes[i].style.display = 'inline-block';
    }
    currentItem2 += 4;

    if (currentItem2 >= boxes.length) {
        loadMoreBtn2.textContent = "Cargar menos";
    }
};

/* PARA BOTON 3 */ 
let loadMoreBtn3 = document.querySelector('#load-more-3');
let currentItem3 = 4;

loadMoreBtn3.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-3 .box-3')];

    if (loadMoreBtn3.textContent === "Cargar menos") {
        let newCurrent = currentItem3 - 4;
        for (var i = newCurrent; i < currentItem3; i++) {
            if (boxes[i]) boxes[i].style.display = "none";
        }
        currentItem3 = newCurrent;
        
        if (currentItem3 <= 4) {
            loadMoreBtn3.textContent = "Cargar más";
        }
        return;
    }

    for (var i = currentItem3; i < currentItem3 + 4; i++) {
        if (boxes[i]) boxes[i].style.display = 'inline-block';
    }
    currentItem3 += 4;

    if (currentItem3 >= boxes.length) {
        loadMoreBtn3.textContent = "Cargar menos";
    }
};
