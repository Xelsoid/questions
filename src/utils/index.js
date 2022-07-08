const returnRandomRoundValueFromRange = (rangeStart, rangeEnd) => {
  rangeStart = Math.ceil(rangeStart);
  rangeEnd = Math.floor(rangeEnd);
  return Math.floor(Math.random() * (rangeEnd - rangeStart)) + rangeStart;
}

export {returnRandomRoundValueFromRange}