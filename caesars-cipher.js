function rot13(str) { // LBH QVQ VG!
    let chars = str.split('')
    for (let i=0; i<chars.length; i++) {
      if (chars[i].match(/[A-Z]/)) {
        chars[i] = String.fromCharCode(chars[i].charCodeAt(0) + 13)
      }
      if (chars[i].charCodeAt(0) > 90) {
        chars[i] = String.fromCharCode(chars[i].charCodeAt(0) - 26)
      }
    }
    return chars.join('')
  }