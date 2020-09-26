var Sequelize =require('sequelize');

var sequelize = new Sequelize('HAS_DB','has_admin','Password20!',{
    host:'has-db.crtab34zfx4p.us-east-1.rds.amazonaws.com',
    dialect:'mysql'
});

module.exports = sequelize;
