/******************
 * YOUR CODE HERE *
 ******************/

function colorDeconstructor(color) {
  if(color === 'orange') {
    return 'red and yellow';
    }
  else if(color === 'purple') {
    return 'red and blue';
    }
  else if(color === 'green') {
    return 'blue and yellow';
    }
  // else return undefined;
  }

// Our setup code here. Don't touch!
if(typeof colorDeconstructor === 'undefined') {
  colorDeconstructor = undefined;
}


module.exports = colorDeconstructor;
