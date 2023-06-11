module.exports = (sequelize,DataTypes,) => {
    const Services =  sequelize.define ("Services",{
        
       itemsName : {
            type: DataTypes.STRING,
            allowNull: false,
         
          },


    },{
        underscored: true
    }
        
    )
     

    Services.associate =(models) => {
        Services.hasOne(models.Form, {
        foreignKey: {
          name:'formId',
          allowNull: false
       
      },
      onDelete: 'RESTRICT'
      }) 
     

    }    

    return Services 
}