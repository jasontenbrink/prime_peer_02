// ! ! !
// Three Bugs


var Atticus = {name: "Atticus", id: "2405", salary:"47000", score: 3};
var Jem = {name:"Jem", id:"62347", salary:"63500", score:4};
var Boo = {name:"Boo", id:"11435", salary:"54000", score:3};
var Scout = {name:"Scout", id:"6243", salary:"74750", score:5};

var array = [Atticus,Jem,Boo,Scout];


//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]); 
}

$(document).ready(function(){
  

  $('#content').on('click','button', function(){
    //for(i = 0;i < array.length; i++){
      //console.log(array[i].name + ", " + array[i].sti + ", " + array[i].salary + ", " + array[i].salaryIncrease);
      //console.log($(this).parent().find('li').text());   
    //}
    $(this).parent().remove();
  });
    for (i=0; i < array.length;i++){
      var $personDiv;
      $('#content').append("<div class = 'personContainer'></div>");
      $personDiv = $('#content').children().last();
      $personDiv.append("<li></li>"); 
      $personDiv.append("<button>click me</button>");
      $personDiv.find('li').text(array[i].name + ", " + array[i].sti + ", " + array[i].salary + ", " + array[i].salaryIncrease); 
      
    }
});

function calculateSTI(person){
  var newObject = {};

  newObject.name = person.name;

  var employeeNumber = person.id;
  var baseSalary = person.salary;
  var reviewScore = person.score;


  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }


  newObject.sti = bonus;
  newObject.salary = Math.round(baseSalary * (1.0 + bonus)); // no rounding
  newObject.salaryIncrease = (baseSalary * bonus);
  //console.log(newObject.name + " " + newObject.sti + " " + newObject.salary + " " + newObject.salaryIncrease);
  return newObject;

}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;  //had a -1
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}