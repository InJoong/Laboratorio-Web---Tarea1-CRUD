let express = require('express')
let app = express();

let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

let methodOverride = require('method-override')
app.use(methodOverride('_method'))

let webRoutes = require('./routes/web')
app.use('/', webRoutes)

let exphbs = require('express-handlebars');
const extNameHbs = 'hbs';
let hbs = exphbs.create({extname: extNameHbs});
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);

let appConfig = require('./config/app')

app.listen(appConfig.express_port, function() {
    console.log('The app is running on the port ' + appConfig.express_port)
})