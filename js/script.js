// change h3 tag color....
const allH3 = document.getElementsByTagName('h3');
for (const h3 of allH3) {
    h3.style.color = 'salmon';
}

// change background color....
const backpackBgColor = document.getElementById('bg-color');
backpackBgColor.style.backgroundColor = 'pink';

// change border redius using js...
const cardsBorderRadius = document.getElementsByClassName('card');
for (const card of cardsBorderRadius) {
    card.style.borderRadius = '25px';
}

// test output using js...
function showOutput() {
    console.log("button function working...");
}
function showOutput2() {
    console.log("function 2 working...");
}

// delete button when i click a button...
const deleteButtons = document.getElementsByClassName('delete-button');
for (const deleteButton of deleteButtons) {
    deleteButton.addEventListener('click', function () {
        deleteButton.style.display = 'none';
    })
}

// enable delete when i type email in input field...
document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
    const deleteButt = document.getElementById('delete-butt');
    if (event.target.value == 'email') {
        deleteButt.removeAttribute('disabled');
    }
    else {
        deleteButt.setAttribute('disabled', true);
    }
})

// change image when i hover cursor...
let shoeImage = document.getElementById('shoe1Image');
shoeImage.addEventListener('mouseover', function () {
    shoeImage.src = "images/shoes/shoe-111.jpg"
})
shoeImage.addEventListener('mouseout', function () {
    shoeImage.src = "images/shoes/shoe-1.png"
})
let bagImage = document.getElementById('bag2Image');
bagImage.addEventListener('mouseover', function () {
    bagImage.src = "images/bags/bag-22.jpg"
})
bagImage.addEventListener('mouseout', function () {
    bagImage.src = "images/bags/bag-2.png"
})

// change background color use double click...
let changeColor = document.getElementById('subcribe');
changeColor.addEventListener('dblclick', function () {
    changeColor.style.backgroundColor = 'salmon'
})

