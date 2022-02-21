const http = require("http");
const hostname = "localhost";
const port = 3000;
solan = 0;
const fs = require("fs");
const server = http.createServer((req, res) => {
  solan++;
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  switch (req.url) {
    case "/": {
      content = fs.readFileSync("./views/home.html");
      res.end(content);
      break;
    }
    case "/products": {
      content = fs.readFileSync("./views/products.html");
      res.end(content);
      break;
    }
    case "/nghesi/midu": {
      res.end(
        `<img src="https://kenh14cdn.com/203336854389633024/2021/12/7/img0921-1638882280706279306112.jpg"> `
      );
      break;
    }
    case "/nghesi/locfuho": {
      res.end(
        "<img src='https://lh3.googleusercontent.com/9S6-jyGpyDyUnoO-noe6HFxR5fwVwW_1AGMOU33kqz0CYqn7DLbidCn0abjcO11UOtJAHXiavSJU_KQsEumUeUWVpFx-WG09MeB9ri1mbZA=w600'>"
      );
      break;
    }
    default: {
      res.end(" page nay con xem xet co lam hay ko ");
      break;
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
