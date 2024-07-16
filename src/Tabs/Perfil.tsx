import {ScrollView, VStack ,Text, Avatar, Divider} from 'native-base'
import { Title } from '../components/Title'

export default function Perfil(){
    return(
        <ScrollView flex={1} pt={10}>
            <VStack flex={1} alignItems="center" p={5}>
                <Title color="blue.500">Meu Perfil</Title>
                <Avatar size="xl" source={{uri: "https://avatars.githubusercontent.com/u/105225630?v=4"}} mt={5}/>
                <Title color="blue.500">Informacoes Pessoais</Title>
                <Title fontSize="lg" mb={1}>Felipe Gianoto de Oliveira</Title>
                <Text>30/12/1998</Text>
                <Text>Sao Paulo</Text>

                <Divider mt={5}/>

                <Title color="blue.500" mb={1}>Historico Medico</Title>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}