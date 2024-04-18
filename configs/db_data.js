const fs = require("fs");
const data = require('./db_dummy_data');

const addProductsToDB = () => {
    data.forEach((elem, idx)=>{
        fetch('http://localhost:1400/api/products',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(elem)
        }).then((res)=>{
            console.log('Success:: ', idx);
        }).catch((err)=>{
            console.log('Error:: ', idx)
        });
    });
}
    
module.exports = addProductsToDB;