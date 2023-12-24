import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const Tour = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <Image
            source={require('C://Users//91628//Downloads//demo//demo//assets//left-arrow.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.headerText}>Tour Request</Text>
        </View>
        <View style={styles.rightContainer}></View>
      </View>
      <View style={styles.firstRow}>
        <Image
          source={require('C://Users//91628//Downloads//demo//demo//assets//tic.png')}
          style={styles.firstRowImage}
          resizeMode="cover"
        />
        <Text style={styles.requestReceivedText}>Request Received!</Text>
        <Text style={styles.checkingText}>
          We're checking if the home can be seen on
        </Text>
        <Text style={styles.dateText}>Fri, October 4, 6:00 PM</Text>
      </View>
      <View style={styles.secondRow}>
        <Text style={styles.agentText}>
          Agent Will take you on the tour!
        </Text>
        <View style={styles.nestedRow}>
          <View style={styles.leftColumn}>
            <Image
              source={require('C://Users//91628//Downloads//demo//demo//assets//profile.png')}
              style={styles.agentImage}
              resizeMode="cover"
            />
            <View style={styles.nameBox}>
            <Text style={styles.agentName}>Sandeep S.</Text>
            <Text style={styles.agentName1}>Partner</Text>

            </View>
           
          </View>
          <View style={styles.rightColumn}>
            <Image
              source={require('C://Users//91628//Downloads//demo//demo//assets//right-arrow.png')}
              style={styles.rightImage}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
    height: 100,
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
  },
  image: {
    width: 35,
    height: 30,
  },
  middleContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  firstRowImage:{
    width:80,
    height:80,

  },
  firstRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2B3F',
    borderStyle: 'dashed',
    marginLeft:20,
    marginRight:20,
  
  

  },
  requestReceivedText: {
    color: '#2A2B3F',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 19.2, 
    paddingTop:15
  },
  checkingText: {
    color: '#2A2B3F',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 14,
    paddingTop:20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 13.44, 
  },
  dateText: {
    color: '#2A2B3F',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 15,
    paddingTop:10,
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 13.44, 
  },
  secondRow: {
    flex: 1,
 
    padding: 20,
  },
  agentText: {
    color: '#2A2B3F',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 12.48,
    paddingTop:10,
    paddingLeft:10
  },
  agentImage: {
    width: 50,
    height: 50,
    borderRadius: 90,
  },

  leftColumn:{
    display:"flex",
    flexDirection:"row"
  },
  agentName: {
    color: '#2A2B3F',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  agentName1: {
    color: '#8C8C8C',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  nameBox:{
    alignItems:"flex-start",
    paddingLeft:10,
    paddingTop:5
  },
  nestedRow:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingTop:15,
    paddingRight:5
  }
});

export default Tour;
