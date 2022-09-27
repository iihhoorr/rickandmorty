import { controlErrorModal } from "../../UI/ErrorModal";

const baseFetch = (url, responseStatus, requestOptions) => {
	return fetch(url, requestOptions)
		.then(async response => {
			responseStatus = response.ok;
			if (response.status === 204 || response.status === 201) {
				return {};
			} else if (response.status < 200 || response.status >= 300) {
				const json = await response.json();
				let message = json?.message || json?.error || null;
				return Promise.reject({ message, trace: { status: response.status, response: json } });
			} else if (response.status > 399) {
				controlErrorModal && controlErrorModal(true);
				return await response.json();
			}
			return await response.json();
		})
		.then(json => {
			return new Promise((resolve, reject) => {
				if (responseStatus) {
					resolve(json);
				} else {
					controlErrorModal && controlErrorModal(true);
					reject(json);
				}
			});
		})
		.catch(error => {
			controlErrorModal && controlErrorModal(true);
			return new Promise((resolve, reject) => {
				reject(error);
			});
		});
};

export default {
	get(url) {
		let requestOptions = {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		};
		let responseStatus = false;

		return baseFetch(url, responseStatus, requestOptions);
	},
};
