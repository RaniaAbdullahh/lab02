'use strict';

let allAnimals = [];
let keywordsList = [];

function Animal(animal) {

  this.title = animal.title;
  this.image_url = animal.image_url;
  this.description = animal.description;
  this.keyword = animal.keyword;
  this.horns = animal.horns;
  allAnimals.push(this);
}
//console.log(allAnimals);

Animal.prototype.render = function() {
  $('main').append('<section class="new"></section>');// add a section and append it to the main
  let animalNew = $('section[class="new"]'); // put the new section inside a nariable
  let animalHtml = $('#photo-template').html(); // to get the html elements that iside the id #photo-temp
  animalNew.html(animalHtml); // add the element stored inside animalHtml to the new section animalNew
  //   console.log(animalNew);
  //   console.log(animalHtml);

  animalNew.find('h2').text(this.title);
  animalNew.find('img').attr('src', this.image_url);
  animalNew.find('p').text(this.description);
  animalNew.removeClass('new');//remove class name to add another name
  animalNew.attr('class', this.keyword);//give sections class names as the krywordes
};





//--git the data from json file--
const ajaxSetting = {
  method : 'get',
  dataType : 'json'
};

$.ajax('data/page-1.json', ajaxSetting).then((data)=>{
  data.forEach(animalObj => {
    let animal = new Animal(animalObj);
    animal.render();
    if(!keywordsList.includes(animal.keyword)){// condition  to prevent repeated items iside the list
      keywordsList.push(animal.keyword);
    }



  });
  //console.log(keywordsList);
  Animal.addList(keywordsList);
  Animal.filterImages();
});
//--to add the items to the list---
Animal.addList = function(keywordsList) {
  keywordsList.forEach ( animal => {
    $('.keywordsList').append('<option class="new"></option>');
    $('option[class="new"]').text(animal);
    $('option[class="new"]').val(animal);
    $('option[class="new"]').removeClass('new');
  });
};

//---to hide render----
Animal.hideRender = () => {
  $('section').hide();
};

//--- to filter images and show choosen  image's keyword----
Animal.filterImages = () => {
  $('.keywordsList').on('change',function(){
    Animal.hideRender();
    let chosenImg = [];
    let selectedItem = $(this).val();
    //console.log('selectedItem', selectedItem);
    allAnimals.forEach(animal => {
      if(animal.keyword === selectedItem){
        chosenImg.push(animal);
      }
    });
    chosenImg.forEach( animal => animal.render());
    //console.log('chosenImg',chosenImg);
  });
};


