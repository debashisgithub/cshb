const express = require('express')
    , cors = require('cors')
    , path = require('path')
    , bodyParser = require('body-parser')
    , app = express()
    , port = process.env.PORT || 8000
    , apis = require('./api/routers');

/**
 * Enable cors
 */
app.use(cors())

/**
 * parse application/json
 * parse application/x-www-form-urlencoded
 */
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

/**
 * Register all api
 */
app.use('/api', apis);

app.use(express.static(path.join(__dirname, 'dist/client-side-header-bidder')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/client-side-header-bidder/index.html')));
app.listen(port, _ => console.log(`application runing on port ${port}`))
