import { React } from "react";
import { View, Text, Button, StyleSheet, FlatList, Alert, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PD } from "./profileData";

export const AllUsers = (route) => {
      const navigation = useNavigation()

      const moveToProfile = ({ userId, name, position, image }) => {
            return (navigation.navigate('Profile', { userId, name, position, image }))
      }

      const ProfileList = ({ userId, name, position, image }) => {
            return (
                  <TouchableOpacity style={styles.card} onPress={() => { clickEventListener(name, userId, position, image) }}>
                        <View style={styles.cardHeader}>
                              <Image style={styles.icon}
                                    source={{ uri: "https://img.icons8.com/flat_round/64/000000/hearts.png" }} />
                        </View>
                        <Image style={styles.userImage} source={{ uri: image }} />
                        <View style={styles.cardFooter}>
                              <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <Text style={styles.name}>{name}</Text>
                                    <Text style={styles.position}>{position}</Text>

                                    <TouchableOpacity
                                          style={styles.followButton}
                                          onPress={() => { moveToProfile(userId, name, position, image) }}>
                                          <Text style={styles.followButtonText}>Profile</Text>
                                    </TouchableOpacity>
                              </View>
                        </View>
                  </TouchableOpacity>
            )
      }

      const clickEventListener = (name, userId, position, image) => {
            /* Alert.alert(name + ' ' + userId) */
            console.log(name, userId, position, image);
      }

      return (


            <View style={styles.container}>

                  <FlatList
                        style={styles.list}
                        contentContainerStyle={styles.listContainer}
                        data={PD}
                        horizontal={false}
                        numColumns={2}
                        keyExtractor={(item) => item.id}
                        renderItem={(itemData) => {
                              return (
                                    < ProfileList
                                          route={route}
                                          navigation={navigation}
                                          userId={itemData.item.id}
                                          image={itemData.item.image}
                                          name={itemData.item.name}
                                          position={itemData.item.position}
                                    />)
                        }}

                  />

            </View>


      )
}




const styles = StyleSheet.create({
      container: {
            flex: 1,
            marginTop: 20,
      },
      list: {
            paddingHorizontal: 5,
            backgroundColor: "#E6E6E6",
      },
      listContainer: {
            alignItems: 'center'
      },

      /******** card **************/
      card: {
            shadowColor: '#00000021',
            shadowOffset: {
                  width: 0,
                  height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,

            marginVertical: 5,
            backgroundColor: "white",
            flexBasis: '46%',
            marginHorizontal: 5,
      },
      cardFooter: {
            paddingVertical: 17,
            paddingHorizontal: 16,
            borderTopLeftRadius: 1,
            borderTopRightRadius: 1,
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "center"
      },
      cardContent: {
            paddingVertical: 12.5,
            paddingHorizontal: 16,
      },
      cardHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 12.5,
            paddingBottom: 25,
            paddingHorizontal: 16,
            borderBottomLeftRadius: 1,
            borderBottomRightRadius: 1,
      },
      userImage: {
            height: 120,
            width: 120,
            borderRadius: 60,
            alignSelf: 'center',
            borderColor: "#DCDCDC",
            borderWidth: 3,
      },
      name: {
            fontSize: 18,
            flex: 1,
            alignSelf: 'center',
            color: "#008080",
            fontWeight: 'bold'
      },
      position: {
            fontSize: 14,
            flex: 1,
            alignSelf: 'center',
            color: "#696969"
      },
      followButton: {
            marginTop: 10,
            height: 35,
            width: 100,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor: "#FF8000",
      },
      followButtonText: {
            color: "#FFFFFF",
            fontSize: 20,
      },
      icon: {
            height: 20,
            width: 20,
      }
});