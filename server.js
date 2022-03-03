const  express = require('express');
const  bodyParser = require('body-Parser');
const  mongoose = require('mongoose');
const cors = require("cors")


const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use(cors());

const api = require('./routes/routes');
app.use('/api/v1/', api);

//const CONNECTION_URL = 'mongodb+srv://rich:@importrich1217@cluster0.vxe48.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const CONNECTION_URL = 'mongodb+srv://Ethio-Brocker:Brocker@cluster0.ezopw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT= process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

mongoose.connect(CONNECTION_URL)
.then( () => console.log(`moongodb connected: ${PORT}`))
.catch((error) => console.log(error.message));


//mongoose.set('useFindAndModify', false);
