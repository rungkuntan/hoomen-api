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
          name:'appointment_form_id',
          allowNull: false
       
      },
      onDelete: 'RESTRICT'
      }) 
     

    }    

    return Services 
}