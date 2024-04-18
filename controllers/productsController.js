const productModel = require('../models/productsModel.js');

const getAllProducts = async (req, res) => {
    const products = await productModel.find();
    console.log(req.url);
    res.json({
        status: 'success',
        results: products.length,
        data:{
            products,
        }
    })
}

const addProduct = async (req, res)=>{
    try{
        const {_id, createdAt, updatedAt, ...reqData} = req.body;
        const products = await productModel.create(reqData);
        res.json({
            status: 'success',
            results: 1,
            data: {
                products,
            }
        });
    }
    catch(err){
        res.status(403);
        console.log(err)
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        });
    }
}

const replaceProduct = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const {_id, createdAt, updatedAt, ...data} = req.body;
        const products = await productModel.findOneAndReplace({_id: reqId}, data);
        if(!products){
            res.status(400);
            res.json({
                status: 'fail',
                message: 'Id does not exist',
            })
            return ;
        }
        res.json({
            status: 'success',
            results: 1,
            data:{
                products,
            }
        });
    }
    catch(err){
        res.status(500);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        })
    }
}

const updateProduct = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const {_id, createdAt, updatedAt, ...data} = req.body;
        const products = await productModel.findOneAndUpdate({_id: reqId}, data);
        if(!products){
            res.status(400);
            res.json({
                status: 'fail',
                message: 'Id does not exist',
            })
            return ;
        }
        res.json({
            status: 'success',
            results: 1,
            data:{
                products,
            }
        });
    }
    catch(err){
        res.status(500);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        })
    }
}

const deleteProduct = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const products = await productModel.findOneAndDelete({_id: reqId});
        if(!products){
            res.status(400);
            res.json({
                status: 'fail',
                message: 'Id does not exist',
            })
            return ;
        }
        res.status(204);
        res.json({
            status: 'success',
            results: 1,
            data:{
                products: products,
            }
        });
    }
    catch(err){
        res.status(500);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        })
    }
}

module.exports = {
    getAllProducts,
    addProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
}