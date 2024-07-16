const secoes = [
    {
        id: 1,
        title: 'Insira alguns dados basicos',
        textInput:[
            {
                id: 1,
                label: 'Nome',
                placeholder: 'Digite seu nome completo'
            },
            {
                id: 2,
                label: 'Email',
                placeholder: 'Digite seu email'
            },
            {
                id: 3,
                label: 'Crie uma senha',
                placeholder: 'Insira sua senha'
            },
            {
                id: 4,
                label: 'Confirme sua senha',
                placeholder: 'Insira sua senha'
            }

        ],
        checkbox: []
    },
    {
        id: 2,
        title: 'Agora, mais alguns dados sobre você:',
        textInput: [
            {
                id: 1,
                label: 'CEP',
                placeholder: 'Digite seu CEP'
            },
            {
                id: 2,
                label: 'Rua',
                placeholder: 'Digite sua rua'
            },
            {
                id: 3,
                label: 'Número',
                placeholder: 'Digite o número'
            },
            {
                id: 4,
                label: 'Complemento',
                placeholder: 'Digite o complemento (opcional)'
            },
            {
                id: 5,
                label: 'Bairro',
                placeholder: 'Digite seu bairro'
            },
            {
                id: 6,
                label: 'Cidade',
                placeholder: 'Digite sua cidade'
            },
            {
                id: 7,
                label: 'Estado',
                placeholder: 'Digite seu estado'
            },
        ],
        checkbox: []
    },
    {
        id: 3,
        title: 'Para finalizar, quais sao os seus planos?',
        textInput: [],
        checkbox: [
            {
                id: 1,
                value: 'Sulamerica'
            },
            {
                id: 2,
                value: 'Unimed'
            },
            {
                id: 3,
                value: 'Bradesco'
            },
            {
                id: 4,
                value: 'Amil'
            },
            {
                id: 5,
                value: 'Biosaude'
            },
            {
                id: 6,
                value: 'Biovida'
            },
            {
                id: 7,
                value: 'Outros'
            },
            {
                id: 8,
                value: 'Nao tenho plano'
            },
        ]
    }
]

export { secoes }