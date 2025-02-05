import React from 'react';
import { View } from 'react-native';

 export const Card = (props) => {
    return (
        <View style={style.containerStyle}>
            {props.children}
        </View>
    );
};

const style = {
    containerStyle: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'darkgray',
        borderBottomWidth: 0,
        shadowColor: 'darkgray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};
