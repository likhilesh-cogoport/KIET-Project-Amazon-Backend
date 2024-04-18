const productModel = require('../models/productsModel.js');

const getAllProducts = async (req, res) => {
    const data = await productModel.find();
    console.log(req.url);
    res.json({
        status: 'success',
        results: 0,
        data:{
            products: data,
        }
    })
}

const addProduct = async (req, res)=>{
    try{
        const {_id, ...reqData} = req.body;
        const data = await productModel.create(reqData);
        console.log(data);
        res.json({
            status: 'success',
            results: 1,
            data: {
                products: data,
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
        const data = {...req.body, _id: reqId};
        const result = await productModel.findOneAndReplace({_id: reqId}, data);
        res.json({
            status: 'success',
            data:{
                products: result,
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
    replaceProduct
}