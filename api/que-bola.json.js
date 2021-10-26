//  /api/que-bola.js

module.exports = (req, res) => {

  // tomamos el nombre desde  querystring del la url 
  const { name } = req.query;

  // retornamos un JSON con el saludo
  res.json({
    text: name ? `${name} que bola asere` : 'Dime tu nombre' 
  });
};
