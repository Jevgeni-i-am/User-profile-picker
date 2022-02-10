import { React } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";


export const ProfileScreen = ({ route, navigate }) => {
  const { user } = route.params
    /* console.log(user) */
    ;


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={[styles.card, styles.profileCard]}>
          <Image style={styles.avatar} source={{ uri: user.picture.large }} />
          <Text style={styles.name}> {` ${user.name.title} ${user.name.first} ${user.name.last}`}</Text>
          <Text style={styles.name}> {user.login.username}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTittle}>Location</Text>
          <Text> City: {user.location.city}</Text>
          <Text> Post code: {user.location.postcode}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTittle}>Contacts</Text>
          <Text> Email: {user.email}</Text>
          <Text> </Text>
          <Text> WhatsApp/ Viber / Telegram: {user.cell} </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTittle}>Personal data</Text>
          <Text> Age:  {user.dob.age}</Text>
          <Text> Gender:{user.gender} </Text>
        </View>
      </View>

    </ScrollView >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#DCDCDC"
  },
  cardTittle: {
    color: "#808080",
    fontSize: 22,
    marginBottom: 5,
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 90,
    alignSelf: 'center',
    borderColor: "#DCDCDC",
    borderWidth: 3,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  profileCard: {
    alignItems: 'center',
    marginTop: 20,
  },
  name: {
    marginTop: 10,
    fontSize: 22,
    color: "#808080",
  },


});
