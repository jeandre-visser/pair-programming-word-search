const transpose = function (matrix) {
  
    let array = [];
  
    for (let i = 0; i < matrix[0].length; i++) {
      array.push([]);
    }
  
    for (let row = 0; row < matrix.length; row ++) {
      for (let col = 0; col < matrix[row].length; col++) {
        array[col][row] = matrix[row][col]
      }
    }
    return array;
    
  };

const reverse = function(s){
    return s.split("").reverse().join("");
}

const wordSearch = (letters, word) => {
   

    if (letters.length === 0) {
        return undefined;
    };
    word = word.toUpperCase();
    const wordReverse = reverse(word);
    const lettersTranspose = transpose(letters);
    const verticalJoin = lettersTranspose.map(ls => ls.join(''));
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {

        if (l.includes(word)) return true
        if (l.includes(wordReverse)) return true
    }

    for (l of verticalJoin) {
        if (l.includes(word)) return true
        if (l.includes(wordReverse)) return true
    }
    return false;
}

module.exports = wordSearch