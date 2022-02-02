const allH3 = document.getElementsByTagName('h3');
for (const h3 of allH3) {
    h3.style.color = 'salmon';
}

const backpackBgColor = document.getElementById('bg-color');
backpackBgColor.style.backgroundColor = 'pink';

const cardsBorderRadius = document.getElementsByClassName('card');
for (const card of cardsBorderRadius) {
    card.style.borderRadius = '25px';
}

function showOutput() {
    console.log("button function working...");
}

function showOutput2() {
    console.log("function 2 working...");
}

const deleteButtons = document.getElementsByClassName('delete-button');
for (const deleteButton of deleteButtons) {
    deleteButton.addEventListener('click', function () {
        deleteButton.style.display = 'none';
    })
}