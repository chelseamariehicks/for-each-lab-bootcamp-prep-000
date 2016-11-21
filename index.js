
function iterativeLog(array){
array.forEach(function(element, index){
  console.log(`${index}: ${element}`)
})

}

function iterate(callback) {
  var aTribe = ["Q-Tip", "Phife Dawg", "Ali", "Jarobi"];
aTribe.forEach(callback);
return aTribe
}

function doToArray(array, callback) {
array.forEach(callback)

}
