const router = require('express').Router({ strict: true });
const axios = require('axios');
const { GeneralError, BadRequest } = require('../../utils/errors');
const { getItemsSearch, getItemsDetail } = require('../../utils/itemsParser');
const DemoService = require('../../services/demoService');


const baseUrl = 'https://api.mercadolibre.com/';

// GET api/items
router.get('/items', async (req, res, next) => {
	try {
		const { q } = req.query;

		if (!q) throw new BadRequest('Valor faltante');

		const service = new DemoService();
		let data = await service.getItems(q);
		res.json(data);
	} catch (error) {
		next(error);
	}
});

// GET api/items/:id
router.get('/items/:id', async (req, res, next) => {
	try {
		const { id } = req.params;

		if (!id) throw new BadRequest('Valor faltante');

		const [itemResponse, destailResponse] = await Promise.all([
			axios.get(`${baseUrl}items/${id}`),
			axios.get(`${baseUrl}items/${id}/description`),
		]);

		if (itemResponse.status !== 200) {
			throw new GeneralError(
				`petición de item rechazada con estado: ${response.status}`
			);
		}

		if (destailResponse.status !== 200) {
			throw new GeneralError(
				`petición de detalle rechazada con estado: ${response.status}`
			);
		}

		res.json(getItemsDetail(itemResponse.data, destailResponse.data));
	} catch (error) {
		next(error);
	}
});

module.exports = router;