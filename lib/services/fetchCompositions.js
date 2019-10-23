const request = require('superagent');
const { parse } = require('node-html-parser');
const scrapeCompositions = require('./scrapeCompositionTitles');

module.exports = () => {
  return Promise.all([
    scrapeCompositions(),
    scrapeCompositions('Alchemy+in+Silent+Spaces'),
    scrapeCompositions('Ancient+Air+and+Dance'),
    scrapeCompositions('Armenian+Dances'),
  ])
    .then(([compositionsA, compositionsB, compositionsC]) => {
      return [...compositionsA, ...compositionsB, ...compositionsC];
    })
    .then(compositions => {
      return Promise.all(compositions.map(title => {
        return request.get(`http://www.windrep.org/${title}`)
          .then(res => res.text)
          .then(parse);
        // .then(html => {
        //   const labels = html.querySelectorAll('.pi-data-label').map(l => l.childNodes[0].rawText);
        //   const values = html.querySelectorAll('.pi-data-value').map(v => v.childNodes[0].rawText);
        //   const photoInfo = html.querySelectorAll('.pi-image-thumbnail')[0];
        //   return [labels, values, character, photoInfo];
        // })
        // .then(organizeInfo);
      }));
    });
};
