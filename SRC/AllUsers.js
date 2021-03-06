import { React } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PD } from "./profileData";

export const AllUsers = () => {
      const navigation = useNavigation()
      const moveToProfile = (data) => {
            return (navigation.navigate('Profile', {
                  userId: data.userId,
                  name: data.name,
                  position: data.position,
                  image: data.image,
                  age: data.age,
                  gender: data.gender
            }))
      }



      const ProfileList = (data) => {
            return (
                  <TouchableOpacity style={styles.card}
                        onPress={() => { moveToProfile(data) }}>
                        <View style={styles.cardHeader}>
                              <Image style={styles.icon}
                                    source={{ uri: "https://img.icons8.com/flat_round/64/000000/hearts.png" }} />
                        </View>
                        <Image style={styles.userImage} source={{ uri: data.image }} />
                        <View style={styles.cardFooter}>
                              <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <Text style={styles.name}>{data.name}, {data.age}</Text>
                                    <Text style={styles.position}>{data.position}</Text>
                                    <TouchableOpacity
                                          style={styles.followButton}
                                          onPress={() => { moveToProfile(data) }}>
                                          <Text style={styles.followButtonText}>Profile</Text>
                                    </TouchableOpacity>
                              </View>
                        </View>
                  </TouchableOpacity>
            )
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
                                          userId={itemData.item.id}
                                          image={itemData.item.image}
                                          name={itemData.item.name}
                                          position={itemData.item.position}
                                          age={itemData.item.age}
                                          gender={itemData.item.gender}
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