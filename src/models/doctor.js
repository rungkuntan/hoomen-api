module.exports = (sequelize,DataTypes,) => {
    const Doctor =  sequelize.define ("Doctor",{
        
       doctorName : {
            type: DataTypes.STRING,
            allowNull: false,
         
          },


    },{
        underscored: true
    }
        
    )
     

    Doctor.associate =(models) => {
        Doctor.hasOne(models.Form, {
        foreignKey: {
          name:'formId',
    
       
      },
      onDelete: 'RESTRICT'
      }) 
     

    }    

    return Doctor
}