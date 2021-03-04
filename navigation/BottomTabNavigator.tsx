import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {BottomTabParamList, TabOneParamList, TabTwoParamList} from '../types';
import {useTheme} from "react-native-paper";
import {createDrawerNavigator} from '@react-navigation/drawer';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const Drawer = createDrawerNavigator();

export default function BottomTabNavigator() {

    const {colors} = useTheme();

    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            tabBarOptions={{
                activeTintColor: colors.text,
                activeBackgroundColor: colors.surface
            }}>
            <BottomTab.Screen
                name="TabOne"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-code" color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-code" color={color}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}


function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={TabOneScreen}
                options={{headerTitle: 'Tab One Title 444'}}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={TabTwoScreen}
                options={{headerTitle: 'Tab Two Title 321'}}
            />
        </TabTwoStack.Navigator>
    );
}
