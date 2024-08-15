const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey=b0ed9161d09e4ab5b77b100b14bf1207';

    var req = new Request(url);
    const tp = await fetch(req);

    const top_headlines = await tp.json();
    let top12 = top_headlines.articles.slice(0, 12)

    top12 = top12.map((element) => {
        return { ...element, publishedAt: element.publishedAt.slice(0, 10)}
    })    

    res.render('home', {
        headlines: top12
    })
})

module.exports = router