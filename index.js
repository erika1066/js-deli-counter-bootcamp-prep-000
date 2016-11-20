//var katzDeli = [];
//var katzDeliLine = ["Steven", "Blake", "Avi"];
var otherDeli = ["Ada"]
//, "Grace", "Kent"];
//var otherDeli = ["Ada"]

function takeANumber(katzDeliLine, otherDeli){
  var katzDeli = []
  //var i = 1;
  //i++;
  //otherDeli.push(`"Grace", "Kent"`)
  katzDeliLine.push(otherDeli);
  //console.log(katzDeliLine)
  //katzDeliLine = [...katzDeliLine, "Grace", "Kent")
  for(let i = 0, l = katzDeliLine.length; i < l; i++){
    katzDeli.push(`Welcome, ${katzDeliLine[i++]}. You are number ${i++} in line.`)
  }
  //otherDeli.push("Ada");
  //katzDeli.push(`Welcome, ${otherDeli[]}. You are number ${i} in line.`);
  //otherDeli.push("Grace", "Kent");
  //katzDeliLine.push(otherDeli);
  //return katzDeliLine;
  return katzDeli;
}
