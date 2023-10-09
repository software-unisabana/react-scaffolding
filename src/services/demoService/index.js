// aca va el servicio
const axios = require('axios');
const { getItemsSearch, getItemsDetail } = require('../../utils/itemsParser');

class DemoService {
    constructor() {
        this.url = 'https://api.mercadolibre.com/';

    }
    async getItems(q){
        const response = await axios.get(`${this.url}sites/MLA/search`, {
			params: { q },
		});
        if (response.status === 200) {
			return getItemsSearch(response.data);
		} else {
			throw new GeneralError(
				`petición rechazada con estado: ${response.status}`
			);
		}
    }
}

module.exports= DemoService;
