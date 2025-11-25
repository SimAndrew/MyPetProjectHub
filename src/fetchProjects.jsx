import { useEffect, useState } from 'react';
import { createClient } from 'contentful';

const client = createClient({
	environment: 'master',
	space: '75nq3zqkijp6',
	accessToken: 'KQzuiBvm3GBGFlr_lmb-xeAp19j5M8AKRDu2SubtXLQ',
});

export const useFetchmyPetProjectHub = () => {
	const [loading, setLoading] = useState(true);
	const [myPetProjectHub, setmyPetProjectHub] = useState([]);

	const getData = async () => {
		try {
			const response = await client.getEntries({
				content_type: 'myPetProjectHub',
			});

			const myPetProjectHub = response.items.map((item) => {
				const { title, url, image } = item.fields;
				const id = item.sys.id;
				const img = image?.fields?.file?.url;

				return { title, url, id, img };
			});

			setmyPetProjectHub(myPetProjectHub);
			setLoading(false);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return { loading, myPetProjectHub };
};
