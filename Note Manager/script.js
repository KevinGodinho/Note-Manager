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
    
    
    console.log(li)
});




