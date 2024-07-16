import {VStack, Divider, ScrollView} from 'native-base'
import { CardConsulta } from '../components/CardConsulta'
import { Title } from '../components/Title'
import { Botao } from '../components/Botao'

export default function Consultas(){
    return(
        <ScrollView p={5}>
            <Title color="blue.500" mt={10}>Minhas Consultas</Title>
            <Botao mt={5} mb={5}>Agendar nova consulta</Botao>
            <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Proximas consultas</Title>
            <CardConsulta nome="Doutor Felipe" especialidade="Cardiologista" foto='https://avatars.githubusercontent.com/u/105225630?v=4'></CardConsulta>

            <Divider mt={5}/>
            <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Title>
            <CardConsulta nome="Doutor Felipe" especialidade="Cardiologista" foto='https://avatars.githubusercontent.com/u/105225630?v=4' data='16/07/2024' foiAtendido></CardConsulta>
            <CardConsulta nome="Doutor Felipe" especialidade="Cardiologista" foto='https://avatars.githubusercontent.com/u/105225630?v=4' data='16/07/2024' foiAtendido></CardConsulta>
        </ScrollView>

    )
}