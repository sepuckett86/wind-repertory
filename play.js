// const scrapeCompositionTitles = require('./lib/services/scrapeCompositionTitles');
const fetchCompositions = require('./lib/services/fetchCompositions');

// scrapeCompositionTitles();
fetchCompositions().then(comps => console.log(comps.length));
