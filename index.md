 
const express = require("express");
const server = express();

server.use(express.json());

let customers = [
    {id : 1, name : "Dev Samurai", site : "http://devsamurai.com.br"},
    {id : 2, name : "Facebook", site : "http://facebook.com.br"},
    {id : 3, name : "Google", site : "http://google.com.br"},
];

server.get("/customers", (req, res) => {
    return res.json(customers);
});

server.get("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const customer = customers.find(item => item.id === id);
    const status = customer ? 200 : 400;

    return res.status(status).json();
});

server.post("/customers", (req, res) => {
    const {name, site } = req.body;
    const id = customers[customers.length - 1].id + 1;

    const newCustomer = {id, name, site};
    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
});

server.put("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {name, site} = req.body;

    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        customers[index] = {id : parseInt(id), name, site};
    }
    return res.status(status).json(customers[index]);
})

server.delete("/customers/:id", (req, res) => {
    
    const id = parseInt(req.params.id);
    const index = customers.findIndex(item => item.id === id );
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        customers.splice(index, 1);
    }

    return res.status(status).json(customers);
})
server.listen(3000);

