const { Model, DataTypes } = require('sequelize');

class Seller extends Model {
    static init(sequelize) {
        super.init(
            {
                name: DataTypes.STRING,
                email: DataTypes.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

module.exports = Seller;
