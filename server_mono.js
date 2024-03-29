const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        "user_id": "zerkpqpgwrq5l6do",
        "email": "edgar.lima@vivitech.com.br",
        "name": "Enzo Rodrigo Miguel Nunes",
        "cpf": "98125305688",
        "is_company": 0,
        "company_name": null,
        "cnpj": null,
        "gender": "male",
        "birth": "1997-06-17",
        "rg": "172781036",
        "rg_shipping_agency": "ssp",
        "rg_shipping_date": "1997-06-17",
        "mother_name": "Sueli Isabelly",
        "country": "Brasil",
        "state": "ES",
        "city": "Cariacica",
        "zip_code": "29140058",
        "district": "Jardim América",
        "street_name": "Rua Terra Nova",
        "number": "101",
        "complement": null,
        "pep": false,
        "occupation": "Programador",
        "monthly_income": "1000.00",
        "declared_equity": "1000.00",
        "wallet_number": "39233642",
        "country_code": "99",
        "region_code": "99",
        "phone": "991383876",
        "financialsecurity_id": "6mka7o0ad0z8g5n4"
    });
});

app.listen(80, () => {
    console.log('Example app listening on port 80!');
})