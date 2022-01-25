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
        console.log(array[i]);
        let otherWords = array[i];
        console.log(i);
        if (otherWords === 'the' || 'a' || 'an' || 'but' || 'of' || 'and' || 'for' || 'at' || 'by' || 'from') {
          titleArray.push(array[i]);
        }
        else { 
          let oWord = otherWords.split('');
          oWord[0] = oWord[0].toUpperCase();
          let owString = oWord.join('');
          titleArray.push(owString);
        }
      }
      
      return cleanTitle = titleArray.join();
    }
  }}