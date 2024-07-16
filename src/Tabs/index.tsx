import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Main from "./Main";
import Consultas from "./Consultas";
import Explorar from "./Explorar";
import Perfil from "./Perfil";

const Tab = createBottomTabNavigator()

const screenOptions = {tabBarStyle: {backgroundColor: "#002851"}, tabBarActiveTintColor: "#339CFF", tabBarInactiveTintColor: "#FFF"};

const tabs = [
    {
        name: 'Principal',
        component: Main,
        icon: 'home'
    },
    {
        name: 'Consultas',
        component: Consultas,
        icon: 'calendar'
    },
    {
        name: 'Explorar',
        component: Explorar,
        icon: 'search'
    },
    {
        name: 'Perfil',
        component: Perfil,
        icon: 'person'
    }
]

export default function Tabs(){
    return(
        <Tab.Navigator screenOptions={screenOptions}>
            {tabs.map((tab) => (
                <Tab.Screen key={tab.name} name={tab.name} component={tab.component} options={{ headerShown: false, tabBarIcon:({color, size}) => (<Ionicons color={color} size={size} name={tab.icon}/>) }}/>
            ))}
        </Tab.Navigator>
    )
}