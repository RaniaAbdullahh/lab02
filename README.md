# lab 02 
> My Partener : Mahmoud Gannam.


Number and name of feature: Feature #1: Display images 
Estimate of time needed to complete: _2 hours____

Start time: __1:40_pm__

Finish time:  __4:00_pm__

Actual time needed to complete: _2:20____

# Why are we implementing this feature?
As a user, I want to view the images on the page so that I can browse the photo collection.
What are we going to implement?
Given that a user opens the application in the browser When the user navigates to the home page Then the photo gallery should display all of the images in the gallery

# How are we implementing it?
- Use AJAX, specifically $.ajax(), to read the provided JSON file.
- Each object should become a new instance of a constructor function. Refer to the data to determine the necessary properties.
- Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its     properties, then append the copy to the DOM.




Number and name of feature:Feature #2: Filter images

Estimate of time needed to complete: __2hrs___

Start time: __4:00_pm__

Finish time: __7_pm__

Actual time needed to complete: __3 hrs___

# Why are we implementing this feature?
As a user, I want to be able to filter the images so that I can view only images that match a keyword.
What are we going to implement?
Given that a user clicks on the dropdown menu When the user selects one of the options Then only the images whose keyword matches the option should be displayed

# How are we implementing it?
Create a <select> element which contains unique <option> elements extracted dynamically from the JSON file, one for each keyword.
Use an event handler to respond when the user chooses an option from the select menu. Hide all of the images, then show those whose keyword matches the option chosen.



Number and name of feature: Feature #3: Style the application

Estimate of time needed to complete: __2hrs___

Start time: __7 pm ___

Finish time: __8:15 pm ___

Actual time needed to complete: __1:15___

# Why are we implementing this feature?
As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images in a grid like pattern.
What are we going to implement?
Given that a user opens the application in the browser When the user navigates to the home page Then the images should be displayed in rows across the screen

# How are we implementing it?
Style your application using floats.
Utilize at least one Google font.

# lab03

Number and name of feature: ____Feature 1: Pagination____________________________

Estimate of time needed to complete: __2hrs___

Start time: ____2:30_

Finish time: __5___

Actual time needed to complete: __2:30___

Why are we implementing this feature?
As a user, I want to have the ability to view additional images so that my view does not become cluttered.
What are we going to implement?
Given that a user opens the application in the browser When the user clicks on a button or link to another page Then the other set of images should be dynamically displayed

How are we implementing it?
Add navigation for the user to switch between two pages. Each page should render a unique set of images from one of the two provided JSON files.
Reset the filters, then repopulate them using only keywords from the images currently being displayed.


Number and name of feature: _____Feature 2: Templating___________________________

Estimate of time needed to complete: _1hrs____

Start time: __5:30___

Finish time: __7___

Actual time needed to complete: _1:30____

Why are we implementing this feature?
As a user, I want all of the images to be displayed in a consistent manner, so that it is easy to scan the collection of images.
What are we going to implement?
Given that a user opens the application in the browser When the images are displayed on the screen Then each image should be rendered according to a template

How are we implementing it?
Create the appropriate Mustache template in your HTML with the same <h2>, <img>, and <p> elements as the jQuery template from the prior lab.
Refactor the method that renders your images to use Mustache instead of making a copy with jQuery.

Number and name of feature: ___Feature 3: Styling with Flexbox_____________________________

Estimate of time needed to complete: __1:30___

Start time: __7:15___

Finish time: __8___

Actual time needed to complete: __40min___

Why are we implementing this feature?
As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images.
What are we going to implement?
Given that a user opens the application in the browser When the user navigates to the home page Then the images should be displayed in columns, as screen width allows

How are we implementing it?
Refactor your CSS to use Flexbox instead of floats. You are welcome to use a combination of floats and Flexbox, as you see fit.


Number and name of feature: ________Feature 4: Sort the images________________________

Estimate of time needed to complete: __2hrs___

Start time: __8___

Finish time: __11___

Actual time needed to complete: ___3hrs__

Why are we implementing this feature?
As a user, I want to be able to sort the images so that there is an order to their rendering.
What are we going to implement?
Given that a user is presented with sort options When the user clicks on one option Then the images should be sorted accordingly

How are we implementing it?
Add the ability for the user to sort the images by either title or by number of horns.
Sort the images by one of the properties on page load. This should also apply to the second page of images.