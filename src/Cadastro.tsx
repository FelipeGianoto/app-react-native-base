import { Text, Image, Box, Checkbox, ScrollView} from 'native-base'
import Logo from './assets/Logo.png';
import { Title } from './components/Title';
import { InputText } from './components/InputText';
import { Botao } from './components/Botao';
import { useState } from 'react';
import { secoes } from './utils/CadastroEntradaTexto';

export default function Cadastro() {
    const [numeroSecao, setNumeroSecao] = useState(0);
   

    function nextSecao(){
        if(numeroSecao < secoes.length - 1){
            setNumeroSecao(numeroSecao + 1)
        }
    }

    function lastSecao(){
        if(numeroSecao > 0){
            setNumeroSecao(numeroSecao - 1)
        }
    }

  return (
    <ScrollView flex={1} px={5} py={20}>
        <Image source={Logo} alt="logo Voll" alignSelf="center" mt={35}/>
        <Title>
            {secoes[numeroSecao].title}
        </Title>
        <Box>
            {
                secoes[numeroSecao]?.textInput?.map(input => {
                    return <InputText label={input.label} placeholder={input.placeholder} key={input.id}/>
                })
            }
        </Box>
        {secoes[numeroSecao]?.checkbox?.length > 0 && <Box>
            <Text color="blue.800" fontWeight="bold" fontSize="md" mt="2" mb={2}>Selecione o plano:</Text>
            {
                secoes[numeroSecao]?.checkbox?.map(checkbox => {
                    return <Checkbox mt={1} value={checkbox.value} key={checkbox.id}>{checkbox.value}</Checkbox>
                })
            }
        </Box>}
        {numeroSecao > 0 && 
            <Botao onPress={() => lastSecao()} backgroundColor="gray.400">
                Voltar
            </Botao>
        }
        <Botao onPress={() => nextSecao()} mt={4} mb={40}>
            Avancar
        </Botao>
    </ScrollView>
  );
}