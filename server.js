const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

let currentUser = {
    id: '123',
    name: 'Abby',
    age: 190,
    hairColor: 'brown',
    hobbies: ['swimming', 'reading']
};

let users = [{
    id: '123',
    name: 'Abby',
    age: 190,
    hairColor: 'brown',
    hobbies: ['swimming', 'reading']
},{
    id: '456',
    name: 'Billy',
    age: 30,
    hairColor: 'blonde',
    hobbies: ['running', 'biking']
}];

let products = [{
    id: '1',
    name: 'Shampoo',
    price: 5,
    rating: 4,
},{
    id: '2',
    name: 'Conditioner',
    price: 5,
    rating: 4,
}];

app.get('/current-user', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === req.params.id);
    res.json(user);
});

app.post('/users/:id', (req, res) => {
    const {id} = req.params;
    const {user: updatedUser} = req.body;

    let userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedUser };
        res.json(users[userIndex]);
    } else {
        res.status(404).send('User not found');
    }
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/products', (req, res) => {
    const {product} = req.body;
    products.push(product);
    res.json(product);
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

