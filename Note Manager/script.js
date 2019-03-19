// select the unordered list element that you want to append everything to
var ul = document.querySelector('ul');

// create the on click event listener for the add button
document.getElementById('add-btn').addEventListener('click', function(e){
    e.preventDefault(); // include the function (e) that prevents form submission
    
    // gather the value for the text input to link to the add button
    var addInput = document.getElementById('add-input');
    
    // prevent a blank note from being created, if input is not empty then create new note
    if(addInput.value !== ''){
    
    // create all of the elements you want to append to the ul by the add button
    var li = document.createElement('li'),
        firstPar = document.createElement('p'),
        secondPar = document.createElement('p'),
        firstIcon = document.createElement('i'),
        secondIcon = document.createElement('i'),
        input = document.createElement('input');
    
    // add the appropriate classes to the elements in the ul li you are adding
    firstIcon.className = "fa fa-pencil-square-o";
    secondIcon.className = "fa fa-times";
    input.className = "edit-note";
    
    // add appropriate attributes to ul li you are adding
    input.setAttribute('type', 'text');
    
    // set the value of the input as the text for the first paragraph
    firstPar.textContent = addInput.value;
    
    // add the first and second icon to the second paragraph of added li
    secondPar.appendChild(firstIcon);
    secondPar.appendChild(secondIcon);
    
    // add first and second paragraphs to the li element
    li.appendChild(firstPar);
    li.appendChild(secondPar);
    
    // add the input element to the li element
    li.appendChild(input);
    
    //add li to the ul
    ul.appendChild(li);
    
    // set value of input to an empty string to prevent a blank note from being created
    addInput.value == '';
        
    }
});


// HIDE ITEMS

// grab the checkbox item by its id
var hideItem = document.getElementById('hide');

// create event for when the checkbox is selected to hide items
hideItem.addEventListener('click', function(){
    
    var label = document.querySelector('label');
   
    // create condidtional to hide items when checkbox is checked
    if(hideItem.checked){
        label.textContent = 'Unhide notes'; // change text to match event
        ul.style.display = 'none'; // removes ul from display
    } else {
        label.textContent = 'Hide notes'; // change text back to match event
        ul.style.display = 'block'; // brings ul back into display
    }
});


// SEARCH FILTER 

// select search input by selecting parent element by id and then specifying child element, which is the input
var searchInput = document.querySelector('#search-note input');

// keyup triggers the event when a key is pressed/entered into the input element
searchInput.addEventListener('keyup', function(e){

    // target is the input element that the event is triggered by, this will get the value of the search input
    var searchChar = e.target.value.toUpperCase(); //this will also translate the keys entered to upper case characters
    
    // gets the li elements in the ul
    var notes = ul.getElementsByTagName('li');
    
    // translates the li elements from the ul to an array so they can be looped/searched through
    Array.from(notes).forEach(function(note){
       var parText =  note.firstElementChild.textContent;
        
        // translates the text in the notes to uppercase to be compared by the search filter
        if(parText.toUpperCase().indexOf(searchChar) !== -1){ // searches the index of keys entered into search and determines if key entered matches anything on the page, -1 means the character is not present, so !== -1 means if the statement is true thenyou procede to display block
            note.style.display = 'block';
        } else {
            note.style.display = 'none';
        }
        
    });
    
});






















