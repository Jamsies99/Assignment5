
var mainURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
var drinklst = [];
var input;
var drinksData;
var lnk;
var tN =[];
function getDrink(data){
  drinksData = data;
}
function preload(){
  let url = mainURL+"margarita";
  loadJSON(url, getDrink);
}



function setup() {
  createCanvas(1800, 1800);
  var button = select('button');
  input = select('#drink');
  button.mousePressed(searchDrink);
  col= color(255);
  for (var i =0; i < drinksData.drinks.length; i++){
    drinklst.push(new Drink(drinksData.drinks[i].strDrink, drinksData.drinks[i].strGlass, drinksData.drinks[i].strInstructions));
  }
}


function searchDrink(){
  let url = mainURL+ input.value();
  for (var i = 0; i < drinklst.length; i++){
    drinklst.pop();
  }
  loadJSON(url, getDrink);
  character=random(65,70); //ascii values for A-E
  col = color('#B2'+char(character)+'4BE');
  for (var i = 0; i < drinksData.drinks.length; i++){
    drinklst.push(new Drink(drinksData.drinks[i].strDrink, drinksData.drinks[i].strGlass, drinksData.drinks[i].strInstructions));
  }

}


function draw() {
  background(col);
  for( var i = 0; i< drinklst.length; i++){
    drinklst[i].display(i);
  }


}

class Drink {
  constructor (name, glass, instruction){
    this.name = name;
    this.glass = glass;
    this.instruction = instruction;
  }


  display(multi){
    textSize(15);
    text("\n\nDrink: " +this.name+ ". Glass: " + this.glass+ ".\n Instructions: "+ this.instruction+"\n", 10, 100*multi , width );
  }
}
