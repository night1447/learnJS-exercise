

const checkSpam = (str = '') => !!str.match(/viagra|XXX/gi)?.length;

console.log(checkSpam('sa[pfjSD[PAFP[VIAGRAfdspafdspXXXa[fisdap[XXXfiViagraa[psfkds[pfviagra'));
console.log(checkSpam('sadasdsadasdas'));
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));