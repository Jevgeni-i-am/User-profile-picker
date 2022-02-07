import { React } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";


export const ProfileScreen = ({ route }) => {
      const { name, userId, position, image, age, gender } = route.params

      return (
            <ScrollView>
                  <View style={styles.container}>
                        <View style={[styles.card, styles.profileCard]}>
                              <Image style={styles.avatar} source={{ uri: image }} />
                              <Text style={styles.name}>{name}</Text>
                        </View>

                        <View style={styles.card}>
                              <Text style={styles.cardTittle}>Skills</Text>
                              <Text> POSITION: {position}</Text>

                        </View>

                        <View style={styles.card}>
                              <Text style={styles.cardTittle}>Contacts</Text>
                              <Text> USER ID: {userId}</Text>
                              <Text> WhatsApp</Text>
                              <Text> Facebook</Text>

                        </View>

                        <View style={styles.card}>
                              <Text style={styles.cardTittle}>Personal data</Text>
                              <Text> Age:  {age}</Text>
                              <Text> Gender:  {gender}</Text>
                              <Text> Card number: </Text>
                              <Text> Courses done: </Text>
                              <Text> Available: </Text>
                        </View>

                        <View style={styles.photosCard}>
                              <Text style={styles.cardTittle}>Photos</Text>
                              <View style={styles.photosContainer}>
                                    <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar1.png" }} />
                                    <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar2.png" }} />
                                    <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar3.png" }} />
                                    <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar4.png" }} />
                                    <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar5.png" }} />
                                    <Image style={styles.photo} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }} />
                              </View>
                        </View>
                  </View>
            </ScrollView>

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
            height: 250,
            alignItems: 'center',
            marginTop: 20,
      },
      name: {
            marginTop: 10,
            fontSize: 22,
            color: "#808080",
      },
      photosContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            height: 'auto',
      },
      photosCard: {
            marginTop: 10,
      },
      photo: {
            width: 113,
            height: 113,
            marginTop: 5,
            marginRight: 5,
      }
});
