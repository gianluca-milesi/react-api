import imageGiaguaro from "../assets/giaguaro.jpg"
import imageProcione from "../assets/procione.jpeg"
import imageLeone from "../assets/leone.jpg"

const posts = [
	{
		id: 1,
		title: 'Giaguaro',
		image: imageGiaguaro,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['html', 'css'],
		category: "grande",
		published: true,
	},
	{
		id: 2,
		title: 'Procione',
		image: imageProcione,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['js', 'css'],
		category: "piccolo",
		published: true,
	},
	{
		id: 3,
		title: 'Tigre',
		image: undefined,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['js', 'php'],
		category: "grande",
		published: true,
	},
	{
		id: 4,
		title: 'Leone',
		image: imageLeone,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['html'],
		category: "grande",
		published: false,
	},
]

export default posts