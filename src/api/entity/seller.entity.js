module.exports = class SellerEntity {
    constructor(sellerRepository) {
        this.sellerRepository = sellerRepository;
    }

    async create(params) {
        const { name, desc, phone, email, password } = params;
        const { address } = ;
        const { city, state, country, zipCode } = params.address;
    }
};
