const express = require('express');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();
const port = process.env.PORT || 5003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

const items = require('./src/api/controllers/item.controller');

app.use('/api', items);

app.use(errorHandler);

app.listen(port, (error) => {
	if (error) throw error;
	console.log('Server running on port' + port);
});
