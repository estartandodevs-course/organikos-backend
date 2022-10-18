module.exports = class GetSellerByTagService {
    constructor() {}
    async getByTag() {
        try {
            return {
                sellerId: '123e4567-e89b-12d3-a456-426614174000',
                name: 'Horta da Dona Clara',
                desc: 'Aqui você encontra os melhores legumes',
                phone: '1181239856',
                email: 'horta@email.com',
                distribution: ['Delivery', 'Assinatura', 'Retirada'],
                payment: ['Dinheiro', 'Cartao', 'Pix'],
                category: [
                    'Frutas',
                    'Granja',
                    'Horta',
                    'Carne',
                    'Laticinio',
                    'Outros',
                ],
            };
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
