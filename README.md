# React-Native-Circle-Timer

The React Native Native iOS and Android Circle timer or countdown timer which renders the Circular countdown timer with user specific time and colors. 
This renders the timer with Hours & Minutes within it

See Example.js for example

## Install
```bash
npm install --save react-native-circle-timer
```

## How to use

This shows the default properties.

| Property      | Type           |   Default  | Required | Description  |
|---------------|----------------|------------|----------|---------------|
| radius       |   number      |  40     |    YES      | To change the radius of timer|
| seconds       |   number      |  60     |    YES      | Set the timer in seconds|
| borderWidth         |   number       |  10   |     NO       | Border witdth of the timer|
| showSecond         |   bool         |  false   |NO| Render Elapsed time when set to TRUE|
| borderColor      |   string       |  #0E3657   | NO |Set the border color of the timer |
| textStyle     |   style       | null | NO| Render the elapsed time with user cutomization|
| style     |   style       | null | NO| Render the timer with user cutomization|
| circleColor |   string       | #FFFFFF | NO| Change the color of timer circle|
| borderBackgroundColor |   string       | #A8C3BC | NO| Color of the left time in Timer|
| onTimeElapsed |   funtion       | null | NO| Called when the timer is finished|

```js

import React, { View } from 'react-native';
import CircleTimer from 'react-native-circle-timer';

class ComponentClass extends React.Component {

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
```
