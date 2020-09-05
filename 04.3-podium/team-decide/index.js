/**
 * Insert deps
 */

const express = require("express");
const morgan = require("morgan");
const Layout = require("@podium/layout");

/**
 * create a new Layout
 */
const layout = new Layout({
  name: "film",
  pathname: "/film",
  development: true,
});

/**
 * Register clients (podlets)
 */
const recos = layout.client.register({
  name: "recos",
  uri: "http://localhost:3002/recos/manifest.json",
  timeout: 500,
});

/**
 * Initialize express
 */
const app = express();
app.use(morgan("dev"));
app.use(layout.middleware());
app.use("/static", express.static("./static"));

/**
 * define layout css
 */
layout.css([
    { value: "/static/page.css" },
    { value: "/static/outlines.css" }
]);

const films = {
    ace: {title: "Ace Ventura: Pet Detective", cover: "https://m.media-amazon.com/images/M/MV5BYmVhNmFmOGYtZjgwNi00ZGQ0LThiMmQtOGZjMDUzNzJhMGIzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},
    greyfriars: {title: "The Adventures of Greyfriars Bobby", cover: "https://m.media-amazon.com/images/M/MV5BNTU0ZmY0YTctNDJjNS00ZjYyLTg2NTUtNzA3Y2Y1M2RmZjgyXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg"},
    bc10000: {title: "10000 BC", cover: "https://m.media-amazon.com/images/M/MV5BMzc2NDMzNDY4Ml5BMl5BanBnXkFtZTYwNzM2Njk3._V1_SX300.jpg"}
  };
  
  app.get(`/film/:sku`, async (req, res, next) => {

    try{

    const sku = req.params["sku"];
    const film = films[sku];
    const incoming = res.locals.podium;
  

    const recoResponse = await recos.fetch(incoming, { query: { sku } });

    incoming.podlets = [recoResponse];
    incoming.view = { title: film.title };
  
    res.status(200).podiumSend(`
      <section class="decide_layout">
        <h1 class="decide_header">Petflix</h1>
        <div class="decide_product">
          <h2 class="decide_headline">${film?.title}</h2>
          <img class="decide_image" src="${film?.cover}" style="height:400px; width:250px" />
        </div>
        <aside class="decide_recos">${recoResponse}</aside>
      </section>
    `);


}catch(e){
    console.error(e)
}

});
app.listen(3001);