import { API_KEY, URL_CREATE_VIDEO, URL_UPLOAD } from "constant";

export default function getGenerateVideo({ manifest }) {

	/*const response = await fetch(URL_CREATE_VIDEO, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			"manifest_json": JSON.stringify(manifest),
			"timestamp": Date.now() / 1000,
			"api_key": API_KEY,
			"upload_preset": "ml_default"
		})
	})*/

	//return await response.json()
	return {
		url: "/neon.mp4",
		poster: "/poster.jpg"
	}
}
