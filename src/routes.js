const { Router } = require("express");
const routers = new Router();

routers.get("/", (req, res) => {
    return res.json({ message : "Servidor Ativo !"});
});

module.exports = routers;