const routes = require('express'); 
const home = require('../controllers');
const routers = routes.Router(); 
  
routers.get('/', home);
  
module.exports = routers;
