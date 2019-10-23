const request = require('superagent');
const { parse } = require('node-html-parser');

module.exports = (query = '') => {
  return request.get(`http://www.windrep.org/index.php?title=Category:Compositions&pagefrom=${query}#mw-pages`)
    .then(res => res.text)
    .then(parse)
    .then(findRelevantHtml)
    .then(result => result.json())
    .then(result => console.log(result));
};

const findRelevantHtml = html => html.querySelector('.mw-category');
// const findCharNames = objs => {
//   const names = objs.map(obj => obj.childNodes[0].rawText);
//   return names.filter(name => !name.includes('Year:'));
// };
