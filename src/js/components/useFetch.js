const useFetch = async (api, ...funcs) => {
	const promise = new Promise(async (resolve, reject) => {
		const response = await fetch(api);
		if (response.ok) resolve(response.json());
		else reject(`JSON Data Is Not Connection -> ${response.status} ${response.statusText}`);
	});

	try {
		funcs.forEach(async (func) => func(await promise));
	} catch (reason) {
		console.warn(reason);
	}
};

export default useFetch;
