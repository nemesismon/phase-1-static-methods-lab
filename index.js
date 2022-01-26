class Formatter {
  static capitalize (string) {
    let array = string.split('');
    array[0] = array[0].toUpperCase();
    let newArr = array.join('');
    return newArr.toString();
  }
  static sanitize (string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize (string) {
    let array = [];
    let titleArray = [];
    let uncapWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let cleanTitle;
    array = string.split(' ');

    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        let firstWord = array[i];
        let fwArray = firstWord.split('');
        fwArray[0] = fwArray[0].toUpperCase();
        let newString = fwArray.join('');
        titleArray.push(newString);
      }
      else {
          if (uncapWords.includes(array[i])) {
            titleArray.push(array[i])
          }
          else {
            let otherWords = array[i].split('');
            otherWords[0] = otherWords[0].toUpperCase();
            let owString = otherWords.join('');
            titleArray.push(owString);
          }        
      } 
    }
    return cleanTitle = titleArray.join(' ');
  }
}
