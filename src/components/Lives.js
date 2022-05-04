import {Text,StyleSheet,View} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Lives = ({lives,setLives})=>{
  
  
    
    const heart = <FontAwesome5 name={'heart'} />;
      {/* Array(lives).fill().map((live,index)=>{
                return <Text style={styles.icon} key={`heart-${index}`}>{heart}</Text>
            }) */}
 

 
    return (
       <View style={styles.lives}>
   
        {
          

            [...Array(lives)].map((live,index)=>{
                return <Text style={styles.icon} key={`heart-${index}`}>{heart}</Text>
            })
        }
       </View>
    )
 

}

const styles=StyleSheet.create({
    icon: {
        color: 'red',
        marginLeft: 10,
    },
    lives:{
        flexDirection:'row',
         flexWrap:'wrap',
         paddingTop:50,
    }
})
export default Lives;
