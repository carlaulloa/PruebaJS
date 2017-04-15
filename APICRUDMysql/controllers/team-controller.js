'use strict';

const TeamModel = require('../models/team-model'),
      tm = new TeamModel()

class TeamController{
    
    getAll(req,res,next){
            tm.getAll((err,data)=>{
                if(!err){
                /*    res.render('index',{
                       title:"indentation_war",
                       data:data
                   });*/
                    res.status(200).json({data:data,status:"OK"});
                }
            });
    }
    
    getOne(req,res,next){
        let id = req.params.id;
        tm.getOne(id,(err,data)=>{
            if(!err){
                   /*res.render('editar',{
                        title:"Editar contacto",
                       data:data
                    });*/
                res.status(200).json({data:data,status:"OK"});
               } 
        });
    }
    
    save(req,res,next){
        let contact = {
            id:(req.body.id || 0),
            name:req.body.name,
            twitter:req.body.twitter,
            country:req.body.country,
            side:req.body.side            
        };
        tm.save(contact,(err)=>{
            if(!err){
                //res.redirect('/');
                res.status(200).json({
                    message:"Se guardó la información correctamente",
                    status:"OK"
                })
            }else{
                return next(new Error('Registro no salvado'));
            }
        });       
    }
    
    delete(req,res,next){
        let id = req.params.id;
        tm.delete(id,(err,data)=>{
            if(!err){
                //res.redirect('/');
                res.status(200).json({
                   message:"Se ha eliminado el item correctamente",
                    status:"OK"
                });
            }else{
                return next(new Error('Registro no encontrado'));
            }
        })
    }
    
    addForm(req,res,next){
        res.render('agregar',{
            title:"Agregar"
        });
    }
    
    error404(req,res,next){
        let err = new Error();
        err.status = 404;
        err.statusText = "NOT FOUND";    
        res.render('error',{error:err});
    }
}

module.exports = TeamController;