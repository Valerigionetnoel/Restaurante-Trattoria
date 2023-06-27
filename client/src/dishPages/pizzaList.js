import PizzaPicture1 from './images/pizzaPicture1.jpg';
import PizzaPicture2 from './images/pizzaPicture2.jpg';

const pizzaList = [
    {
        id: 1,
        name: 'Hawaiian',
        description: 'Succulent pineapple and slices of ham topped with an extra layer of cheese.',
        alt: 'Hawaiian',
        image: PizzaPicture1,
        price: 25,
    },
    {
        id: 2,
        name: 'MeatZZa',
        description: 'Slice after slice of pepperoni, ham, savory Italian sausage and beef crumble topped with an extra layer of cheese.',
        alt: 'MeatZZa',
        image: PizzaPicture2,
        price: 25,
    },
    {
        id: 3,
        name: 'Philly Steak',
        description: 'Loaded with tender slices of steak, onions, green peppers, mushrooms, and 3 different types of cheese.',
        price: 20,
    },
    {
        id: 4,
        name: 'Pepperoni Feast',
        description: 'Lots and lots of pepperoni topped with an extra layer of cheese.',
        price: 20,
    },
    {
        id: 5,
        name: 'Chicken Bacon Alfredo Pizza',
        description: 'An Alfredo Sauce base with a Mozzarella/Cheddar Cheese blend, fresh mushrooms, onions, all white-meat chicken, bacon and Provolone cheese.',
        price: 20,
    },
    {
        id: 6,
        name: '6 Cheese Pizza',
        description: 'Covered with Feta, provolone, cheddar, Parmesan-Asiago, and mozzarella cheese finished with a sprinkle of oregano.',
        price: 20,
    },
    {
        id: 7,
        name: 'Choose Your Own Toppings:',
        description: 'Pepperoni, Mushrooms, Sausage, Onions, Bacon, Extra Cheese, Peppers, Black Olives, Chicken, Pineapple, Spinach, Fresh Basil, Ham, Pesto, Beef',
        price: '15 + 3 * number of toppings you choose',
    },
];

export default pizzaList; 