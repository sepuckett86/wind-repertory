// const request = require('superagent');
// const { parse } = require('node-html-parser');
const scrapeCompositions = require('./scrapeCompositionTitles');

module.exports = () => {
  return Promise.all([
    scrapeCompositions(),
    scrapeCompositions('Alchemy+in+Silent+Spaces'),
    scrapeCompositions('Ancient+Air+and+Dance'),
    scrapeCompositions('Armenian+Dances'),
    scrapeCompositions('Aztec+Celebration'),
    scrapeCompositions('Ben+Hur'),
    scrapeCompositions('Born+to+be+Wild'),
    scrapeCompositions('Cantate+Domino'),
    scrapeCompositions('Celebration+Overture'),
    scrapeCompositions('Chorales+%28on+Brecht%29'),
    scrapeCompositions('Columbia%27s+Pride'),
    scrapeCompositions('Concerto+for+Oboe+and+Strings'),
    scrapeCompositions('Coronation+March+from+"Le+Prophète"+%28arr+Brown%29'),
    scrapeCompositions('Dances+from+"Estancia"'),
    scrapeCompositions('Diaghilev+Dances'),
  ])
    .then(compositions => compositions.flat())
    .then(compositions => compositions);
  // { 
  // return Promise.all(compositions.map(title => {
  // return request.get(`http://www.windrep.org/${title}`)
  //   .then(res => res.text)
  //   .then(parse);
  // .then(html => {
  //   const labels = html.querySelectorAll('.pi-data-label').map(l => l.childNodes[0].rawText);
  //   const values = html.querySelectorAll('.pi-data-value').map(v => v.childNodes[0].rawText);
  //   const photoInfo = html.querySelectorAll('.pi-image-thumbnail')[0];
  //   return [labels, values, character, photoInfo];
  // })
  // .then(organizeInfo);
  // }));
  // });
};
