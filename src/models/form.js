module.exports = (sequelize,DataTypes) => {
    const Form =  sequelize.define ("Form",{
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true,
            }
        },

        petName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        doctorName: {
            type: DataTypes.STRING,
        },

       

    },
    {
        underscored: true
    }
    )

    
    Form.associate =(models) => {
    
    Form.belongsTo(models.User, {
        foreignKey: {
          name:'userId',
          allowNull: false
       
      },
      onDelete: 'RESTRICT'
      })

     
      Form.hasOne(models.Services, {
        foreignKey: {
          name:'servicesId',
          allowNull: false
       
      },
      onDelete: 'RESTRICT'
      })

    }


    return Form
}