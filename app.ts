import express = require('express');
var sensor = require('ds18x20');
var app = express();
var server = app.listen(8334, function(){
    console.log("Lyssnar");
});

var io = require('socket.io').listen(server);

app.use(express.static('scripts'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


try {
    //sensor.loadDriver();
    console.log('driver is loaded');
} catch (err) {
    console.log('something went wrong loading the driver:', err)
}


var devices = sensor.list();


// Send current time to all connected clients
function sendTemp() {
    io.emit('temp', { temp: sensor.get(devices)});
}

setInterval(sendTemp, 5000);

// Emit welcome message on connection
io.on('connection', function(socket) {
    // Use socket to communicate with this particular client only, sending it it's own id
    socket.emit('welcome', { message: 'Welcome!', id: socket.id });
    socket.on('i am client', console.log);
});

app.get('/', function (req, res){
            //res.send('<h1>'+varde+'</h1>')
            res.render('monitor');
});




export = app;