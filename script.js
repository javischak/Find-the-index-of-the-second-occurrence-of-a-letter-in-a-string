function secondSymbol(str, symbol) {
  let firstIndex = str.indexOf(symbol);
  if (firstIndex === -1) {
    return -1;
  }
  let secondIndex = str.indexOf(symbol, firstIndex + 1);
  if(secondIndex === -1) {
    return -1;
  }
  return secondIndex;
}

