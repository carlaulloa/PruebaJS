'use strict';

const conn = require('./model'),
      querys = require('./querys');

class TeamModel{
    getAll(cb){
        conn.query(querys.team.getAll,cb);
    }
    
    getOne(id,cb){
         conn.query(querys.team.getOne,id,cb);
    }
    
    save(data,cb){        
        conn.query(querys.team.getOne,data.id,(err,rows)=>{
            console.log(`Numero de registros ${rows.length}`);
            console.log(data);
            if(!err){
                return (rows.length==1) ? 
                    conn.query(querys.team.update,[data,data.id],cb)
                    :
                    conn.query(querys.team.insert,data,cb);
            }
        });
    }
    
    delete(id,cb){
        conn.query(querys.team.delete,id,cb);
    }
}

module.exports = TeamModel;