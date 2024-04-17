const getAllProducts = (req, res) => {
    console.log(req.url)
    res.json({
        status: 'success',
        results: 0,
        data:{
            products: [],
        }
    })
}

module.exports = {
    getAllProducts
}