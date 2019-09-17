var stompit = require('stompit');

var connectParams = require('./properties.json');

stompit.connect(connectParams, function(error, client){
    
    if(error){
        console.log('Unable to connect: ' + error.message);
        return;
    }
    
    var sendParams = {
        'destination': '/queue/ola_mundo',
        'content-type': 'application/json'
    };
    
    var frame = client.send(sendParams);
    
    frame.end(JSON.stringify({
        anything: 'Primeira mensagem...',
        example: true
    }));
    
    client.disconnect(function(error){
        if(error){
            console.log('Error while disconnecting: ' + error.message);
            return;
        }
        console.log('Sent message');
    });
});

