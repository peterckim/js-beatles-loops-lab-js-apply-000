function theBeatlesPlay(musicians, instruments) {
  var resultArray = [];
  var i, j;
  for (i = 0; i < musicians.length; i++) {
    var result = musicians[i] + ' plays ' + instruments[i];
    resultArray[i] = result;
  }
  
  return resultArray;
}