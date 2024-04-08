const express = require('express');
const app = express();
const hostname = '172.31.46.229'; // Your server ip address
const port = 3000;

const version = '1.0.0';

app.get('/', (req, res) => {
    // set response content    
        res.send(`<html>
                    <body>
                        <h1>Hello Lokesh welcome to the Devops World</h1>
                    </body>
                   </html>`);
 

})

app.listen(port, () => {
    console.log(`Hello World`);
})
