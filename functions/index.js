const { functions } = require('./utils/admin');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));

const { signUp } = require('./handlers/user-functions');
const { checkout, getUserOrderHistory } = require('./handlers/order-functions');
const { authenticationMiddleware } = require('./utils/middleware');

app.post('/sign-up', signUp);

app.get('/order-history', authenticationMiddleware, getUserOrderHistory);
app.post('/checkout', authenticationMiddleware, checkout);

exports.api = functions.https.onRequest(app);