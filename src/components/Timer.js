import * as React from 'react';
import { Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import timerStyles from "../styles/timerStyles"
import colors from "../constants"

export default function Timer() {
  const [isPlaying, setIsPlaying] = React.useState(true)

  return (
    <View style={timerStyles.container}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={90}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[60, 30, 10, 0]}
        size={50}
        strokeWidth={6}
        trailColor={"#121214"}
        onComplete={() => ({ shouldRepeat: true, delay: 2 })}
    >
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 12 }}>
          {remainingTime}
        </Text>
      )}
    </CountdownCircleTimer>
  </View>
  )
}

