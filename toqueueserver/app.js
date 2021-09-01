const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');



/**
 * Create server with express framework and api/queues route for toQueue frontend.
 */

const app = express();

const keycloak = require('./config/keycloak-config').initKeycloak(app);

app.use(keycloak.middleware());

connectDB();

const qItems = require('./routes/api/queues');

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('Server working.'));

app.use('/api/queues', qItems);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));