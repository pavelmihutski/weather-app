import axios from 'axios';
import { appid } from '../constants';

export default axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5/',
	params: {
		appid
	}
});
