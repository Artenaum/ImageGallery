import axios from "axios";

export default class ImageService {
	static async getAllImageData() {
		const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
		return response
	}
}