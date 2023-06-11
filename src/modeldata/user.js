module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define("User",{
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

    }, 
    {
      underscored: true
    }
    
    )

     User.associate =(models) => {
        User.hasMany(models.form, {
            foreignKey: {
                name:'user_id',
                allowNull: false
             
            },
            onDelete: 'RESTRICT'
        })

     }


    return User;
}