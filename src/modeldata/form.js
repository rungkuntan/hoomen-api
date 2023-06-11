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



    },
    {
        underscored: true
    }
    )

    
    Form.associate =(models) => {
    
    Form.BelongsTo(models.User, {
        foreignKey: {
          name:'user_id',
          allowNull: false
       
      },
      onDelete: 'RESTRICT'
      })

      
      Form.hasOne(models.Services, {
        foreignKey: {
          name:'services_id',
          allowNull: false
       
      },
      onDelete: 'RESTRICT'
      })

     Form.hasOne(models.Doctor, {
        foreignKey: {
            name:'doctor_id',
            allowNull: false
         
        },
     })



    }


    return Form
}