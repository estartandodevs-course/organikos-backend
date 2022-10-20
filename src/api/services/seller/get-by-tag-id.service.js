module.exports = class GetSellerByTagService {
    constructor(repository) {
        this.repository = repository;
    }
    async getByTag() {
        try {
            return [
                {
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
                },
                {
                    sellerId: '09214a48-0cd0-4974-8144-8b4e64970f22',
                    name: 'Horta da Dona Rose',
                    desc: 'Aqui você encontra as melhores verduras',
                    phone: '1181239856',
                    email: 'horta2@email.com',
                    distribution: ['Delivery', 'Retirada'],
                    payment: ['Dinheiro', 'Pix'],
                    category: ['Frutas', 'Granja', 'Horta'],
                },
                {
                    sellerId: 'f3d2faaf-4e1a-43d7-8bd0-e868d197cf61',
                    name: 'Horta do Seu José',
                    desc: 'Aqui você encontra os melhores queijos',
                    phone: '1181239856',
                    email: 'queijaria@email.com',
                    distribution: ['Retirada'],
                    payment: ['Dinheiro', 'Pix'],
                    category: ['Laticinio'],
                },
            ];
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
