import { API_KEY, URL_CREATE_VIDEO } from "constant";

export default async function getGenerateVideo({ manifest }) {
	const response = await fetch(URL_CREATE_VIDEO, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			/*"public_id": "test_video",
			"resource_type": "video",*/
			"manifest_json": JSON.stringify(manifest),
			"timestamp": Date.now() / 1000,
			"api_key": API_KEY,
			"upload_preset": "ml_default"
		})
	})

	for await (let res of response){
		const responseJson = await res.json()
		if(responseJson.status !== "processing") return responseJson
	}
}
