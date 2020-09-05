const express = require("express");
const morgan = require("morgan");
const Podlet = require("@podium/podlet");

/**
 * definizione del manifest
 */
const podlet = new Podlet({
  name: "recos",
  version: "1.0.2",
  pathname: "/recos",
  fallback: "/fallback",
  development: true,
});

/**
 * definizione del css
 */
podlet.css({
  value: "http://localhost:3002/static/fragment.css",
});


/**
 * Init express
 */
const app = express();
app.use(morgan("dev"));
app.use("/recos", podlet.middleware());
app.use("/static", express.static("./static"));

/**
 * Esposizione del manifest json
 */
app.get("/recos/manifest.json", (req, res) => {
    res.status(200).json(podlet);
});

/**
 * Film array
 */



const films = {
    ace: [{title: "The Adventures of Greyfriars Bobby", cover: "https://m.media-amazon.com/images/M/MV5BNTU0ZmY0YTctNDJjNS00ZjYyLTg2NTUtNzA3Y2Y1M2RmZjgyXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg"},{title: "10000 BC", cover: "https://m.media-amazon.com/images/M/MV5BMzc2NDMzNDY4Ml5BMl5BanBnXkFtZTYwNzM2Njk3._V1_SX300.jpg"}],
    greyfriars: [{title: "10000 BC", cover: "https://m.media-amazon.com/images/M/MV5BMzc2NDMzNDY4Ml5BMl5BanBnXkFtZTYwNzM2Njk3._V1_SX300.jpg"},{title: "Ace Ventura: Pet Detective", cover: "https://m.media-amazon.com/images/M/MV5BYmVhNmFmOGYtZjgwNi00ZGQ0LThiMmQtOGZjMDUzNzJhMGIzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}],
    bc10000: [{title: "The Adventures of Greyfriars Bobby", cover: "https://m.media-amazon.com/images/M/MV5BNTU0ZmY0YTctNDJjNS00ZjYyLTg2NTUtNzA3Y2Y1M2RmZjgyXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg"},{title: "Ace Ventura: Pet Detective", cover: "https://m.media-amazon.com/images/M/MV5BYmVhNmFmOGYtZjgwNi00ZGQ0LThiMmQtOGZjMDUzNzJhMGIzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}]
  };

  app.get("/recos", (req, res) => {
    const { sku } = req.query;
    console.log(req.query)
    res.status(200).podiumSend(`
      <div class="inspire_fragment">
        <h2 class="inspire_headline">Recommendations</h2>
        <div class="inspire_recommendations">
          ${films[sku]
            .map(
              reco => `
                <a href="http://localhost:3001/product/${reco.title}">
                  <img src="${reco.cover}" />
                </a>`
            )
            .join("\n")}
        </div>
      </div>
    `);
  });


app.get("/recos/fallback", (req, res) => {
    res.status(200).podiumSend(`
      <a href="http://localhost:3002/recos">
        Show Recommendations
      </a>
    `);
  });
  
  app.listen(3002);
  