// Utilisation de data "Mockup pour stimuler un acces db"
const data = require('../data/products.json');
const productController = {
    // [GET]/api/route/42

    // Recuperation de la liste des elements
    getAll: (req, res) => {
        // console.log(data.products[0]);
        // Recuperation de données
        const products = data.products;

        // Envoi de la réponse sous format json
        // res.writeHead(200, { "Content-Type": "application/json"});
        // res.end(JSON.stringify(products));
        // la methode stringify pour envoyer en format json le contenu ms dans insomnia il est en text/html
        // res.send(200(JSON.stringify(products)));

        // Utilisation de la méthode "json" qui remplace toutes les methodes en dessus
        res.json(products);
        
    },

    getById: (req, res) => {
        // Recuperation du paramètres Id contenu dans l'url
        // const { id } = parseInt(req.params.id);
        const { id } = req.params;
        const product = data.products.find(p => p.id === parseInt(id));
        console.log(product);
  
        // Recuperation du paramètre des données
        
        // console.log(product);
        // Test si on obtient l'element
        if(!product) {
            return res.status(404).json({ message: 'Aucun produit trouve!!' });
            
        }
        res.send(product)
    },
    // Reuperation des elements via leur nom
    getByName: (req, res) => {
        res.sendStatus(501);

    },
    // Ajouter un product
    add: (req, res) => {
        const newProduct = req.body;
        // console.log(newProduct);
        const newId = ++data.lastId;
        data.products.push({
            id: newId,
            ...newProduct
        });
        res.json({
            message: `Bravo le produit avec id ${newId}`
        });

    },
    // Mise à jour d'un product
    update: (req, res) => {
        // Recuperation des donneées à mettre à jour avec PUT
        const id = req.params;
        const updateProduct = req.body;
        // Mise à jour de l'element de la liste a metttre à jour 
        const targetProduct = data.products.findIndex(p => p.id === parseInt(id));

        // teste si l'element existe
        if(targetProduct === -1 ) {
            return res.status(404).json({
                message:`Dommage le produit ${id} n'existe pas !`
            });
        }
       // Mise a jours des données(Cas reel -> Utilisation de la DB)
        res.json(data.products[targetProduct]);
    },
    // Suppression d'un product
    delete: (req, res) => {
        // Récuperation du paramètre Id contenu dans l'url
        const id = parseInt(req.params.id);

        // Suppression de l'element (cas reel dans la DB)
        data.products.splice(data.products.findIndex(p => p.id === id), 1);
        data.products = data.products.filter(p => p.id ==)
        res.sendStatus(501);

    },


};

module.exports = productController;