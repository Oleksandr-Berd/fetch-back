const path = require('path');
const dotenv = require("dotenv");
require('colors');

const app = require("./app");

const pathToEnv = path.join(__dirname, ".env");
dotenv.config({ path: pathToEnv });
const { PORT } = process.env;

app.listen(PORT, () =>
  console.log(`Server is launched on port: ${PORT}`.bold.green.italic)
);