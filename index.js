
function takeANumber(katzDeliLine, otherDeli){
  var katzDeli = []
  katzDeliLine.push(otherDeli);
  for(let i = 0, l = katzDeliLine.length; i < l; i++){
    katzDeli.push(`Welcome, ${katzDeliLine[i++]}. You are number ${i++} in line.`)
  }
  return katzDeli;
}

var noLine = [];
var deliLine = ["Steven", "Blake", "Avi"];
function nowServing(noLine, deliLine){
  var nowServ = [];
  if(!noLine.length){
    return "There is nobody waiting to be served!";
  }
  for(let i = 0, l = deliLine.length; i < l; i++){
    nowServ.push(`Now serving ${deliLine[i]}.`)
  }
  return nowServ;
}

//function currentLine(line){
//  if(line = 0){
//    return "The line is currently empty."
//  }
//}
