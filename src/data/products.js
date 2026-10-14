/** Товары магазина THE BRAND. sizes — для фильтра на каталоге */

const IMG = 'https://raw.githubusercontent.com/deligtfullady/HTML_CSS/main/img';

const products = [
  {
    id: 1,
    title: "ELLERY X M'O CAPSULE",
    price: 52,
    sizes: ['XS', 'S', 'M'],
    image: `${IMG}/product1.png`,
    description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
  },
  {
    id: 2,
    title: "ELLERY X M'O CAPSULE",
    price: 52,
    sizes: ['S', 'M', 'L'],
    image: `${IMG}/product2.png`,
    description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
  },
  {
    id: 3,
    title: "ELLERY X M'O CAPSULE",
    price: 52,
    sizes: ['XS', 'S', 'L'],
    image: `${IMG}/product3.png`,
    description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
  },
  {
    id: 4,
    title: "ELLERY X M'O CAPSULE",
    price: 52,
    sizes: ['S', 'M', 'L'],
    image: `${IMG}/product4.png`,
    description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
  },
  {
    id: 5,
    title: "ELLERY X M'O CAPSULE",
    price: 52,
    sizes: ['XS', 'M', 'L'],
    image: `${IMG}/product5.png`,
    description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
  },
  {
    id: 6,
    title: "ELLERY X M'O CAPSULE",
    price: 52,
    sizes: ['S', 'M'],
    image: `${IMG}/product6.png`,
    description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
  },
  {
    id: 7,
    title: "MANGO PEOPLE T-SHIRT",
    price: 300,
    sizes: ['S', 'M', 'L'],
    image: `${IMG}/product7.png`,
    description: "Stylish Mango People t-shirt. Premium cotton, modern fit.",
    color: 'Red',
  },
  {
    id: 8,
    title: "MANGO PEOPLE T-SHIRT",
    price: 300,
    sizes: ['XS', 'S', 'M', 'L'],
    image: `${IMG}/product8.png`,
    description: "Stylish Mango People t-shirt. Premium cotton, modern fit.",
    color: 'Red',
  },
  {
    id: 9,
    title: "ELLERY X M'O CAPSULE",
    price: 52,
    sizes: ['XS', 'S'],
    image: `${IMG}/product9.png`,
    description: "Known for her sculptural takes on traditional tailoring.",
  },
];

export const categories = [
  { title: '30% OFF', subtitle: 'FOR WOMEN', image: `${IMG}/women.png`, link: '/catalog' },
  { title: 'HOT DEAL', subtitle: 'FOR MEN', image: `${IMG}/men.png`, link: '/catalog' },
  { title: 'NEW ARRIVALS', subtitle: 'FOR KIDS', image: `${IMG}/kids.png`, link: '/catalog' },
  { title: 'LUXIROUS & TRENDY', subtitle: 'ACCESORIES', image: `${IMG}/accesories.png`, link: '/catalog', wide: true },
];

export default products;
