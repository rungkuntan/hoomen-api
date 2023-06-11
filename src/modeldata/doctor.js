module.exports = (sequelize,DataTypes ) => {
    const Doctor =  sequelize.define ("Doctor",{
        
       doctorName : {
            type: DataTypes.STRING,
            allowNull: false,
         
          },

          department : {
            type: DataTypes.STRING,
            allowNull: false,
         
          },

    },{
        underscored: true
    }
   
    )

    Doctor.associate =(models) => {
      Doctor.hasOne(models.Appointment, {
        foreignKey: {
          name:'appointment_form_ID',
          allowNull: false
       
      },
      onDelete: 'RESTRICT'
      } )


    return Doctor 
}}