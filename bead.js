//Cherisa Davis     //ogCode
//Apr 16, 2019      //scratch

//for teardrop bracelet
var bead1 = "Clear Czech Teardrop";
var bead2 = "Ghost Matte Teardrop";
var string;
var teardrops = 65;

//this function picks a bead
function teardropPicker() {
  //this ties results to a random number between 1 and 10
  var string = Math.floor(Math.random() * 10);

    //if the results are divisible by 2, then it returns bead1
    //if not, it returns bead2
    if (string %2 === 0) {
      console.log(bead1);
      //return bead1;
    } else {
      console.log(bead2);
      //return bead2;
    }
}

teardropPicker();

//this function strings the beads
function teardropString(teardrops) {
  //while beads are greater than 0, run the beadPicker function and then subtract 1 from beads
  while (teardrops > 0) {
    teardropPicker();
    teardrops --;
  }
  //when finished return that's the string of beads needed
  return "That's the string of beads needed!";

}

teardropString(teardrops);

//crystal rondelle beads
//36
var rondelle1 = "6mm glass bead";
var rondelle2 = "8mm glass bead";
var rondelleBead;
var spacer = "8mm rondelle spacer bead";
var beads = 36;
