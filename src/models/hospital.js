module.exports=(sequelize,type)=>{
   return sequelize.define('Hospital_Master',{
        hospital_id:{
            type: type.INTEGER,
            primaryKey:  true,
            autoIncrement: true            
        },
        hospital_name:  type.STRING,
        hospital_address:   type.STRING,
        hospital_contact:   type.STRING,
        hospital_email: type.STRING,
        hospital_speciality:    type.STRING,
        hospital_active:    type.BOOLEAN,
        record_created_by:  type.STRING,
        record_created_date:    type.DATE,
        record_modified_by: type.STRING,
        record_modified_date:type.DATE

    });

    
};
