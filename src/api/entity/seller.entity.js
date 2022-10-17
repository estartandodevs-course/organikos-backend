module.exports = class SellerEntity {
    constructor(sellerRepository) {
        this.sellerRepository = sellerRepository;
    }

    async create(params) {
        const {
            name,
            desc,
            phone,
            email,
            password,
            distribution,
            payment,
            category,
        } = params;
        const { city, state, country, zipCode } = params.address;
    }
};
// {
//     "name": "Horta da Dona Clara",
//     "desc": "Aqui você encontra os melhores legumes",
//     "phone": "1181239856",
//     "email": "horta@email.com",
//     "password": "anypassword",
//     "adress": {
//         "city": "Any City",
//         "state": "Any State",
//         "country": "Any Country",
//         "zipCode": "01001-000",
//     },
//     "distribution": [
//         "Delivery",
//         "Assinatura",
//         "Retirada",
//     ],
//     "payment": [
//         "Dinheiro",
//         "Cartao",
//         "Pix"
//     ],
//     "category": [
//         "Frutas",
//         "Granja",
//         "Horta",
//         "Carne",
//         "Laticinio",
//         "Outros"
//     ],
// }
