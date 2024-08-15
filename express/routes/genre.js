const express = require('express')
const router = express.Router()

const getTopHeadlines = async (category) => {
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          `category=${category}&` +
          'apiKey=b0ed9161d09e4ab5b77b100b14bf1207';

    var req = new Request(url);
    const tp = await fetch(req);

    const top_headlines = await tp.json();
    return top_headlines;
}

router.get('/:category', async (req, res) => {
    const top_headlines = await getTopHeadlines(req.params.category)
    let top12 = top_headlines.articles.slice(0, 12)

    top12 = top12.map((element) => {
        return { ...element, publishedAt: element.publishedAt.slice(0, 10)}
    })

    res.render('home', {
        headlines: top12
    })
})

module.exports = router