module.exports = class SellerRepository {
    constructor() {}
    async create() {
        try {
            return 'create seller';
        } catch (error) {
            return error;
        }
    }
    async update() {
        try {
            return 'update seller';
        } catch (error) {
            return error;
        }
    }
    async getAll() {
        try {
            return [
                {
                    sellerId: '123e4567-e89b-12d3-a456-426614174000',
                    contact: {
                        name: 'Horta da Dona Clara',
                        desc: 'Aqui você encontra os melhores legumes',
                        phone: {
                            number: '1181239856',
                            isWpp: 'true',
                        },
                        email: 'horta@email.com',
                        address: {
                            city: 'São Paulo',
                            neighborhood: 'Centro',
                            street: 'rua dos bobo',
                            number: '1',
                            state: 'São Paulo',
                            country: 'Brasil',
                            zipCode: '01001-100',
                        },
                    },
                    distribution: ['Delivery', 'Assinatura', 'Retirada'],
                    payment: ['Dinheiro', 'Cartao', 'Pix'],
                    category: ['Frutas', 'Horta', 'Outros'],
                    history: [
                        {
                            orderNumber: '1',
                            status: 'done',
                            price: 'R$150,00',
                            date: '12/10/2022',
                            hour: '16:35',
                        },
                        {
                            orderNumber: '2',
                            status: 'processing',
                            price: 'R$87,00',
                            date: '19/10/2022',
                            hour: '14:47',
                        },
                    ],
                    rating: '3,7',
                },
                {
                    sellerId: '5d242b46-07dc-43e0-8280-7da54947f04c',
                    contact: {
                        name: 'Horta da Seu José',
                        desc: 'Aqui você encontra os melhores queijos',
                        phone: {
                            number: '1181239856',
                            isWpp: 'true',
                        },
                        email: 'queijo@email.com',
                        address: {
                            city: 'São Paulo',
                            neighborhood: 'Centro',
                            street: 'rua dos bobo',
                            number: '1',
                            state: 'São Paulo',
                            country: 'Brasil',
                            zipCode: '01001-000',
                        },
                    },
                    distribution: ['Delivery', 'Retirada'],
                    payment: ['Dinheiro', 'Cartao', 'Pix'],
                    category: ['Laticinio', 'Outros'],
                    history: [
                        {
                            orderNumber: '1',
                            status: 'done',
                            price: 'R$150,00',
                            date: '12/10/2022',
                            hour: '16:35',
                        },
                        {
                            orderNumber: '2',
                            status: 'processing',
                            price: 'R$87,00',
                            date: '19/10/2022',
                            hour: '14:47',
                        },
                        {
                            orderNumber: '3',
                            status: 'cancelled',
                            price: 'R$7,00',
                            date: '20/10/2022',
                            hour: '14:32',
                        },
                    ],
                    rating: '4,2',
                },
                {
                    sellerId: '5d242b46-07dc-43e0-8280-7da54947f04c',
                    contact: {
                        name: 'Horta da Dona Maria',
                        desc: 'Aqui você encontra as melhores frutas',
                        phone: {
                            number: '1181239856',
                            isWpp: 'true',
                        },
                        email: 'frutas@email.com',
                        address: {
                            city: 'São Paulo',
                            neighborhood: 'Centro',
                            street: 'rua dos bobo',
                            number: '1',
                            state: 'São Paulo',
                            country: 'Brasil',
                            zipCode: '01001-000',
                        },
                    },
                    distribution: ['Delivery', 'Retirada'],
                    payment: ['Dinheiro', 'Cartao', 'Pix'],
                    category: ['Frutas', 'Horta'],
                    history: [
                        {
                            orderNumber: '1',
                            status: 'processing',
                            price: 'R$45,00',
                            date: '13/10/2022',
                            hour: '12:35',
                        },
                        {
                            orderNumber: '2',
                            status: 'done',
                            price: 'R$87,00',
                            date: '14/10/2022',
                            hour: '14:47',
                        },
                        {
                            orderNumber: '3',
                            status: 'cancelled',
                            price: 'R$17,00',
                            date: '20/10/2022',
                            hour: '10:32',
                        },
                    ],
                    rating: '4,8',
                },
            ];
        } catch (error) {
            return error;
        }
    }
    async getByTag() {
        try {
            return 'get seller by tag';
        } catch (error) {
            return error;
        }
    }
    async getById() {
        try {
            return 'get seller by id';
        } catch (error) {
            return error;
        }
    }
    async delete() {
        try {
            return 'delete seller';
        } catch (error) {
            return error;
        }
    }
};
