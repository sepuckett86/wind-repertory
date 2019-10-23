const request = require('superagent');
const { parse } = require('node-html-parser');

module.exports = (query = '') => {
  return request.get(`http://www.windrep.org/index.php?title=Category:Compositions&pagefrom=${query}#mw-pages`)
    .then(res => res.text)
    .then(parse)
    .then(findRelevantHtml)
    .then(findCompositionTitles);
};

const findRelevantHtml = html => html.querySelectorAll('.mw-category-group');

const findCompositionTitles = categoryGroups => {
  return categoryGroups.map(group => {
    const titleText = group.childNodes[2].rawText;
    const split = titleText.split('\n');
    return split;
  }).flat();
};
