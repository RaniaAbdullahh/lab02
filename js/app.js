'use strict';

let allAnimals = [];
let keywordsList = [];
let templateHTML = $('#photo-template').html();
let jsonPath = 'data/page-1.json';

function Animal(animal) {

  this.title = animal.title;
  this.image_url = animal.image_url;
  this.description = animal.description;
  this.keyword = animal.keyword;
  this.horns = animal.horns;
  allAnimals.push(this);
}
//console.log(allAnimals);

// Animal.prototype.render = function() {
//   $('main').append('<section class="new"></section>');// add a section and append it to the main
//   let animalNew = $('section[class="new"]'); // put the new section inside a nariable
//   let animalHtml = $('#photo-template').html(); // to get the html elements that iside the id #photo-temp
//   animalNew.html(animalHtml); // add the element stored inside animalHtml to the new section animalNew
//   //   console.log(animalNew);
//   //   console.log(animalHtml);

//   animalNew.find('h2').text(this.title);
//   animalNew.find('img').attr('src', this.image_url);
//   animalNew.find('p').text(this.description);
//   animalNew.removeClass('new');//remove class name to add another name
//   animalNew.attr('class', this.keyword);//give sections class names as the krywordes
// };


// new rendering using Mustache
Animal.prototype.render = function() {
  let templateEl = $('<section></section>');
  templateEl.html(templateHTML);
  let template = $(templateEl).html();
  templateEl.attr('class', this.keyword);
  let html = Mustache.render(template, this);
  templateEl.html(html);
  $('main').append(templateEl);
};




//--git the data from json file--
// const ajaxSetting = {
//   method : 'get',
//   dataType : 'json'
// };


// $.ajax(jsonPath, ajaxSetting).then((data)=>{
//   data.forEach(animalObj => {
//     let animal = new Animal(animalObj);
//     animal.render();

//     if(!keywordsList.includes(animal.keyword)){// condition  to prevent repeated items iside the list
//       keywordsList.push(animal.keyword);
//     }

//   });

//   //console.log(keywordsList);
//   Animal.addList(keywordsList);
//   Animal.filterImages();
// });

//--to add the items to the list---
Animal.addList = function(keywordsList) {
  keywordsList.forEach ( animal => {
    $('.keywordsList').append('<option class="new"></option>');
    $('option[class="new"]').text(animal);
    $('option[class="new"]').val(animal);
    $('option[class="new"]').removeClass('new');
  });
};

//---to hide thesection----
// Animal.hideRender = () => {
//   $('section').hide();
// };

//--- to filter images and show choosen  image's keyword----
Animal.filterImages = () => {
  $('.keywordsList').on('change',function(){
    $('section').hide();
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


// $('select').on('change', function () {
//   let selected = this.value;
//   $('section').hide();
//   $(`.${selected}`).show();
// });


$('#page2').on('click', function () {
  jsonPath = 'data/page-2.json';
  allAnimals = [];
  $('section').remove();
  dataCalling(jsonPath);
});


$('#page1').on('click', function () {
  if (jsonPath === 'data/page-2.json') {
    keywordsList = [];
    jsonPath = 'data/page-1.json';
  }
  $('section').remove();
  dataCalling(jsonPath);
});


function dataCalling(jsonPath) {
  const ajaxSetting = {
    method : 'get',
    dataType : 'json'
  };
  $.ajax(jsonPath, ajaxSetting).then(data => {
    data.forEach(animalObj => {
      let animal = new Animal(animalObj);
      animal.render();
      if(!keywordsList.includes(animal.keyword)){// condition  to prevent repeated items iside the list
        keywordsList.push(animal.keyword);
      }
    });
    Animal.addList(keywordsList);
    Animal.filterImages();
  });

}





// sort functions

let titleSort = () => {
  allAnimals.forEach( () => {
    allAnimals.sort( (a,b) => {
      if(a.title < b.title){
        return -1;
      }
      if(a.title > b.title){
        return 1;
      }
      return 0;
    });
    return allAnimals;
  });
  $('section').remove();
  allAnimals.forEach(animalObj => {
    animalObj.render();
  });
};


$('#title').on('click', titleSort);

let hornSort = () => {
  allAnimals.forEach( () => {
    allAnimals.sort( (a,b) => {
      return a.horns - b.horns;
    });
    return allAnimals;
  });
  $('section').remove();
  allAnimals.forEach(animalObj => {
    animalObj.render();
  });
};

$('#horns').on('click', hornSort);
