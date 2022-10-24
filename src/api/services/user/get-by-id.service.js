module.exports = class GetUserByIdService {
    constructor(repository) {
        this.repository = repository;
    }
    async getById(id) {
        try {
            return [
                {
                    userId: id,
                    contact: {
                        name: 'Pedro Bueno',
                        phone: {
                            number: '1181239856',
                            isWpp: 'true',
                        },
                        email: 'pedro@email.com',
                        profile: 'customer' || 'owner',
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
                    history: [
                        {
                            orderNumber: 1,
                            status: 'done',
                            price: 'R$150,00',
                            date: '12/10/2022',
                            hour: '16:35',
                        },
                        {
                            orderNumber: 2,
                            status: 'processing',
                            price: 'R$87,00',
                            date: '19/10/2022',
                            hour: '14:47',
                        },
                    ],
                },
            ];
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
