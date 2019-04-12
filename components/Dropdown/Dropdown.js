
//Step 3: Define our class that will create a new object!

class Dropdown {
  constructor(newdropdown) {
    
    // Assign this.element to the dropdown element
    this.dropdown= newdropdown; //this link is stored in memory
    // console.log(newdropdown);


    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.dropdown.querySelector(`.dropdown-button`);
    // console.log(this.button);
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.dropdown.querySelector(`.dropdown-content`);
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => this.toggleContent());
                                          //this.toggleContent.bind(this));
  }

  //Method

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class

//step 1 and 2: get our DOM elements and store them in dropdowns; iterate over the NodeList and create a new object
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));