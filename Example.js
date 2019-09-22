import React, { View } from 'react-native';
import CircleTimer from 'react-native-circle-timer';

class Example extends React.Component {

    constructor(props) {
        super();
    }


    render() {
        return (
            <View
                style={{backgroundColor: "#06566e", justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <CircleTimer
                        radius={80}
                        borderWidth={10}
                        seconds={1800}
                        borderColor={'#F5F5F5'}
                        borderBackgroundColor={"#FF0000"}
                        onTimeElapsed={() => {
                            console.log('Timer Finished!');
                        }}
                        showSecond={true}
                    />
            </View>
        )
    }
}
