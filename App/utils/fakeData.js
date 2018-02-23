const fakeData = [
	{
		id: '1',
		url: 'http://onapples.com/uploads/varieties/4iw8z5071wzp.png',
		text: 'Apple',
		description: 'Apples are good for your body, also are delicious'
	},
	{
		id: '2',
		url: 'https://vignette.wikia.nocookie.net/battlefordreamisland/images/a/ae/Bananas.png/revision/latest?cb=20170825134007',
		text: 'Bananas',
		description: 'Bananas are for monkeys...'
	},
	{
		id: '3',
		url: 'http://www.thienkhanh.vn/wp-content/uploads/2017/07/dua.png',
		text: 'Pinnaple',
		description: 'Pinnable is yellow, is pretty, and delicious'
	},
	{
		id: '4',
		url: 'http://onapples.com/uploads/varieties/4iw8z5071wzp.png',
		text: 'Apple',
		description: 'Apples are good for your body, also are delicious'
	},
	{
		id: '5',
		url: 'https://vignette.wikia.nocookie.net/battlefordreamisland/images/a/ae/Bananas.png/revision/latest?cb=20170825134007',
		text: 'Bananas',
		description: 'Bananas are for monkeys...'
	},
	{
		id: '6',
		url: 'http://www.thienkhanh.vn/wp-content/uploads/2017/07/dua.png',
		text: 'Pinnaple',
		description: 'Pinnable is yellow, is pretty, and delicious'
	},
	{
		id: '7',
		url: 'http://onapples.com/uploads/varieties/4iw8z5071wzp.png',
		text: 'Apple',
		description: 'Apples are good for your body, also are delicious'
	},
	{
		id: '8',
		url: 'https://vignette.wikia.nocookie.net/battlefordreamisland/images/a/ae/Bananas.png/revision/latest?cb=20170825134007',
		text: 'Bananas',
		description: 'Bananas are for monkeys...'
	},
	{
		id: '9',
		url: 'http://www.thienkhanh.vn/wp-content/uploads/2017/07/dua.png',
		text: 'Pinnaple',
		description: 'Pinnable is yellow, is pretty, and delicious'
	},
	{
		id: '10',
		url: 'http://onapples.com/uploads/varieties/4iw8z5071wzp.png',
		text: 'Apple',
		description: 'Apples are good for your body, also are delicious'
	},
	{
		id: '11',
		url: 'https://vignette.wikia.nocookie.net/battlefordreamisland/images/a/ae/Bananas.png/revision/latest?cb=20170825134007',
		text: 'Bananas',
		description: 'Bananas are for monkeys...'
	},
	{
		id: '12',
		url: 'http://www.thienkhanh.vn/wp-content/uploads/2017/07/dua.png',
		text: 'Pinnaple',
		description: 'Pinnable is yellow, is pretty, and delicious'
	},
	{
		id: '13',
		url: 'http://onapples.com/uploads/varieties/4iw8z5071wzp.png',
		text: 'Apple',
		description: 'Apples are good for your body, also are delicious'
	},
	{
		id: '14',
		url: 'https://vignette.wikia.nocookie.net/battlefordreamisland/images/a/ae/Bananas.png/revision/latest?cb=20170825134007',
		text: 'Bananas',
		description: 'Bananas are for monkeys...'
	},
	{
		id: '15',
		url: 'http://www.thienkhanh.vn/wp-content/uploads/2017/07/dua.png',
		text: 'Pinnaple',
		description: 'Pinnable is yellow, is pretty, and delicious'
	},
	{
		id: '16',
		url: 'http://onapples.com/uploads/varieties/4iw8z5071wzp.png',
		text: 'Apple',
		description: 'Apples are good for your body, also are delicious'
	},
	{
		id: '17',
		url: 'https://vignette.wikia.nocookie.net/battlefordreamisland/images/a/ae/Bananas.png/revision/latest?cb=20170825134007',
		text: 'Bananas',
		description: 'Bananas are for monkeys...'
	},
	{
		id: '18',
		url: 'http://www.thienkhanh.vn/wp-content/uploads/2017/07/dua.png',
		text: 'Pinnaple',
		description: 'Pinnable is yellow, is pretty, and delicious'
	},
	{
		id: '19',
		url: 'http://onapples.com/uploads/varieties/4iw8z5071wzp.png',
		text: 'Apple',
		description: 'Apples are good for your body, also are delicious'
	},
	{
		id: '20',
		url: 'https://vignette.wikia.nocookie.net/battlefordreamisland/images/a/ae/Bananas.png/revision/latest?cb=20170825134007',
		text: 'Bananas',
		description: 'Bananas are for monkeys...'
	},
	{
		id: '21',
		url: 'http://www.thienkhanh.vn/wp-content/uploads/2017/07/dua.png',
		text: 'Pinnaple',
		description: 'Pinnable is yellow, is pretty, and delicious'
	},
	{
		id: '22',
		url: 'http://onapples.com/uploads/varieties/4iw8z5071wzp.png',
		text: 'Apple',
		description: 'Apples are good for your body, also are delicious'
	},
	{
		id: '23',
		url: 'https://vignette.wikia.nocookie.net/battlefordreamisland/images/a/ae/Bananas.png/revision/latest?cb=20170825134007',
		text: 'Bananas',
		description: 'Bananas are for monkeys...'
	},
	{
		id: '24',
		url: 'http://www.thienkhanh.vn/wp-content/uploads/2017/07/dua.png',
		text: 'Pinnaple',
		description: 'Pinnable is yellow, is pretty, and delicious'
	},
	{
		id: '25',
		url: 'http://onapples.com/uploads/varieties/4iw8z5071wzp.png',
		text: 'Apple',
		description: 'Apples are good for your body, also are delicious'
	},
	{
		id: '26',
		url: 'https://vignette.wikia.nocookie.net/battlefordreamisland/images/a/ae/Bananas.png/revision/latest?cb=20170825134007',
		text: 'Bananas',
		description: 'Bananas are for monkeys...'
	},
	{
		id: '27',
		url: 'http://www.thienkhanh.vn/wp-content/uploads/2017/07/dua.png',
		text: 'Pinnaple',
		description: 'Pinnable is yellow, is pretty, and delicious'
	},
	{
		id: '28',
		url: 'http://onapples.com/uploads/varieties/4iw8z5071wzp.png',
		text: 'Apple',
		description: 'Apples are good for your body, also are delicious'
	},
	{
		id: '29',
		url: 'https://vignette.wikia.nocookie.net/battlefordreamisland/images/a/ae/Bananas.png/revision/latest?cb=20170825134007',
		text: 'Bananas',
		description: 'Bananas are for monkeys...'
	},
	{
		id: '30',
		url: 'http://www.thienkhanh.vn/wp-content/uploads/2017/07/dua.png',
		text: 'Pinnaple',
		description: 'Pinnable is yellow, is pretty, and delicious'
	},
]

export default fakeData