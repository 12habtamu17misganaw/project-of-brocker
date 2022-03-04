const  express = require('express');
const  bodyParser = require('body-Parser');
const  mongoose = require('mongoose');
const cors = require("cors")


const app = express();

const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use(cors());

const api = require('./routes/routes');
app.use('/api/v1/', api);

// This middleware informs the express application to serve our compiled React files
if (
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "staging"
  ) {
    app.use(express.static(path.join(__dirname, "client/build")));
  
    app.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
  }


  // Catch any bad requests
app.get("*", (req, res) => {
    res.status(200).json({
      msg: "Catch All",
    });
  });

//const CONNECTION_URL = 'mongodb+srv://rich:@importrich1217@cluster0.vxe48.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const CONNECTION_URL = 'mongodb+srv://Ethio-Brocker:Brocker@cluster0.ezopw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT= process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

mongoose.connect(CONNECTION_URL)
.then( () => console.log(`moongodb connected: ${PORT}`))
.catch((error) => console.log(error.message));


//mongoose.set('useFindAndModify', false);
