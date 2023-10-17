import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from "@/utils";

const customFetch = async (url, { body, ...customConfig }) => {
	const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
	const headers = {
		"content-type": "application/json",
		Accept: "application/json",
	};
	if (token) headers.Authorization = `Bearer ${token}`;
	const config = {
		...customConfig,
		headers: {
			...customConfig.headers,
			...headers,
		},
	};
	if (body) config.body = JSON.stringify(body);

	try {
		const response = await fetch(url, config);
		const data = await response.json();
		if (data.success) {
			return { data: data.data, message: data.message, success: true };
		} else {
			return { data: null, message: data.message, success: false };
		}
	} catch (error) {
		console.log(error);
		return { data: null, message: error.message, success: false };
	}
};

export const getPosts = (page = 1, limit = 5) => {
	return customFetch(API_URLS.getPosts(page, limit), { method: "GET" });
};
