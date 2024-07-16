import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Title } from './components/Title';
import { InputText } from './components/InputText';
import { Botao } from './components/Botao';

export default function Login({ navigation } : any) {

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
                }

            ]
        }
    ]

    return (
        <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
            <Image source={Logo} alt="logo Voll" />
            <Title>
                Faça login em sua conta
            </Title>
            <Box>
                <FormControl mt={3}>
                    <InputText placeholder='Insira seu endereco de email' label='Email'/>
    
                    <InputText placeholder='Insira sua senha' label='Senha'/>
                </FormControl>
            </Box>
            <Botao onPress={() => navigation.navigate('Tabs')}>
                Entrar
            </Botao>
            <Link href='' mt={5}>Esqueceu sua senha?</Link>
            <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
                <Text>Ainda nao tem cadastro? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text color="blue.500">Faca seu cadastro</Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    );
}