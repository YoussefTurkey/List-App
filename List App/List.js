// Cache Variables
let form = document.querySelector('form');
let input = document.querySelector('#item');
let ul = document.querySelector('ul');
let ClearButton = document.querySelector('button');
let items = JSON.parse(localStorage.getItem('Names')) ? JSON.parse(localStorage.getItem('Names')) : [];
let data = JSON.parse(localStorage.getItem('Names')) ? JSON.parse(localStorage.getItem('Names')) : [];

// create li and append to ul
let _li = (text) =>{
    let li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

// loop through data
data.map( (item) => {
    _li(item);
});

// Submit Form Event
form.addEventListener('submit' , function(e){
    e.preventDefault();

    // Add localStorage
    items.push(input.value);
    localStorage.setItem('Names',JSON.stringify(items));

    // Add to ul
    _li(input.value);
    input.value = '';
})

// Clear Data
ClearButton.addEventListener('click', function(){
    localStorage.clear();
    ul.innerHTML = '';
})