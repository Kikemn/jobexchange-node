'use strict'

const e = require('express')
const JobExchange = require('../models/jobexchange')
const jobexchange = require('../models/jobexchange')

async function addJobExchange(req,res){
    const{
        name,
        age,
        gender,
        email,
        phone,
        vacant,
        civilStatus
    } = req.body
    const jobexchange = JobExchange({
        name,
        age,
        gender,
        email,
        phone,
        vacant,
        civilStatus
    })

    try {
         const jobexchangeStored = await jobexchange.save()
         res.status(201).send({message: jobexchangeStored})
    } catch(e){
        res.status(500).send ({message: e.message})

    }

}

async function getJobExchanges(req,res){
    try{
        const jobexchanges = await JobExchange.find()
            res.status(200).send({items:jobexchanges})  
    } catch (e){
        res.status(500).send({message: e.message})
    }
}

async function getJobExchange(req,res){
    let jobexchangeId = req.params.jobexchangeId
    try{
        await jobexchange.findOne({_id:jobexchangeId},(err,jobexchange)=>{
            if (err) return res.status(500).send({message: 'cannot get this item'})
            if(!jobexchange) return res.status(404).send({message: 'item not found'})
            res.status(200).send({message: jobexchange})
        })
    } catch (error){
        throw error
    }
}

async function updateJobExchange(req,res){
    let jobexchangeId = req.params.jobexchangeId
    let update = req.body
    try{
        await JobExchange.findOneAndUpdate({_id:jobexchangeId},update,(err,jobexchanges)=>{
            if(err) return(200).send({message: `cannot update this product ${err}`})
            res.status(200).send({message:'this product has been update'})
        })
    }catch (error){
        throw error
    }
}

async function deleteJobExchange(req,res){
    let jobexchangeId = req.params.jobexchangeId
    try {
        await JobExchange.findOneAndDelete({_id:jobexchangeId},(err, jobexchangeDeleted)=>{
            if (err) return res.status(500).send({message: 'cannot delete this jobexchange'})
            if(!jobexchangeDeleted) res.status(404).send({message: 'jobexchange not found'})
            res.status(200).send({message:'this jobexchange has delete', jobexchangeDeleted})
        })
    } catch (error){
        throw error
    }
}

module.exports={
    addJobExchange,
    getJobExchanges,
    updateJobExchange,
    getJobExchange,
    deleteJobExchange
}