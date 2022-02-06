import { React } from "react";
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";


export const ProfileScreen = ({ params, itemData, userId, route, navigation }) => {
      const { item } = route.params
      const { name } = route.params;
      const { position } = route.params;
      const { image } = route.params;
      console.log({ userId, name, position, image });
      console.log({ item, itemData });
      return (
            <ScrollView>
                  <View style={styles.container}>
                        <View style={[styles.card, styles.profileCard]}>
                              <Image style={styles.avatar} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }} />
                              <Text style={styles.name}>John Doe / {name}</Text>
                        </View>

                        <View style={styles.card}>
                              <Text style={styles.cardTittle}>Title</Text>
                              <Text> - Lorem ipsum dolor sit amet</Text>
                              <Text> - Lorem ipsum dolor sit amet</Text>
                              <Text> - Lorem ipsum dolor sit amet</Text>
                        </View>

                        <View style={styles.card}>
                              <Text style={styles.cardTittle}>Title</Text>
                              <Text> - Lorem ipsum dolor sit amet</Text>
                              <Text> - Lorem ipsum dolor sit amet</Text>
                              <Text> - Lorem ipsum dolor sit amet</Text>
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
            width: 150,
            height: 150,
      },
      card: {
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            padding: 10,
            height: 100,
            marginTop: 10,
      },
      profileCard: {
            height: 200,
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
