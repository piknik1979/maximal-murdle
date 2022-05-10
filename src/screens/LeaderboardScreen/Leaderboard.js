import {StyleSheet, View, Image, Text} from 'react-native';

export default function Leaderboard({leaderboardArr}) {
  return <View>{list(leaderboardArr)}</View>;
}

function list(data) {
  return (
    <>
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Image style={styles.img} />
          <View style={styles.info}>
            <Text style={styles.nameText}>Name</Text>
          </View>
        </View>
        <View style={styles.total}>
          <Text style={styles.totalText}>Total Score</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      {data.map((value, index) => {
        console.log('value:', value.fullName);
        return (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.item}>
              <Image style={styles.img} />
              <View style={styles.info}>
                <Text style={styles.nameText}>{value.fullName}</Text>
              </View>
            </View>
            <View style={styles.total}>
              <Text style={styles.totalText}>{value.scores.total}</Text>
            </View>
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
  },
  img: {
    width: 1,
  },
  info: {
    padding: 1,
  },
  total: {
    paddingRight: 20,
  },
  nameText: {
    fontSize: 20,
    color: 'white',
  },
  totalText: {
    fontSize: 20,
    color: 'white',
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
});
