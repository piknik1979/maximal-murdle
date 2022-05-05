import * as React from 'react';
import {Text, View} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import timerStyles from '../styles/timerStyles';

export default function Timer({setGameState}) {
  const [isPlaying, setIsPlaying] = React.useState(true);

  React.useEffect(() => {
    if (!isPlaying) {
      setGameState('timeout');
    }
  }, [isPlaying]);

  const duration = 100;

  return (
    <View style={timerStyles.container}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={duration}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[60, 30, 10, 0]}
        size={50}
        strokeWidth={6}
        trailColor={'#121214'}
        onComplete={() => {
          ({shouldRepeat: false, delay: 2});
          setIsPlaying((prev) => !prev);
        }}
      >
        {({remainingTime, color}) => (
          <Text style={{color, fontSize: 12}}>{remainingTime}</Text>
        )}
      </CountdownCircleTimer>
    </View>
  );
}
