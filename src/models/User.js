import sequelize from 'sequelize';
const {Model, DataTypes} = sequelize;

class User extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

export default User