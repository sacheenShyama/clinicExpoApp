import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Doctordetail from "./screens/Doctordetail";
import Patientdetail from "./screens/Patientdetail";
import Payment from "./screens/Payment";
import Home from "./screens/Home";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { Feather } from "@expo/vector-icons";
import Finddoctor from "./screens/Finddoctor";
import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

//Stack
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen name="Register" component={Register} />
      <HomeStack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

//Nested screen
function NestedStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen name="Finddoctor" component={Finddoctor} options={{
        title:"Find Doctor",
        headerTitleAlign:'center'
        
      }} />
    </HomeStack.Navigator>
  );
}

//Tab Bottom
const Tab = createBottomTabNavigator();
function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="NestedStack"
        component={NestedStack}
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? "#21A6AD" : "#BCC3C4"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Doctordetail"
        component={Doctordetail}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome
              name="stethoscope"
              size={24}
              color={focused ? "#21A6AD" : "#BCC3C4"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Patientdetail"
        component={Patientdetail}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={focused ? "#21A6AD" : "#BCC3C4"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "credit-card" : "credit-card-outline"}
              size={24}
              color={focused ? "#21A6AD" : "#BCC3C4"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <HomeStackGroup />
    </NavigationContainer>
  );
}
