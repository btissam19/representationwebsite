const express = require('express');
const connect = require('./database/mongo.js');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors')
 


const app = express();
app.use(cors())
require('dotenv').config();

const port = process.env.PORT || 4000;
const databaseUrl = process.env.MONGO_URL;
const skills=require('./routes/skills.js')
const projects=require('./routes/project')
const contact=require('./routes/contact')
const resume=require('./routes/resume')

app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, '../views'), 
    partialsDir: 'views/partials'
}));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/skills',skills);
app.use('/projects',projects)
app.use('/contact',contact);
app.use('/resume',resume);
app.use('/uploads', express.static('uploads'));


app.get('/', (req, res) =>{res.render('skills', { layout: false})})

const start = async () => {
    await connect(databaseUrl);
    app.listen(port, () => {
        console.log(`Your server is running on http://localhost:${port}`);
    });
}

start();
