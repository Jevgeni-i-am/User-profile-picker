import { React, Component } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";



export default class AllUsers extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    this.fetchData()
  }


  fetchData = async () => {
    const response = await fetch(`https://randomuser.me/api?results=100`)
    const json = await response.json()
    this.setState({ data: json.results })
  }

  tagClickEventListener(item) { return (console.log(item.name.first)) }

  moveToProfile = (item) => {
    return (this.props.navigation.navigate('Profile', {
      user: item
    }))
  }

  render() {


    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => { this.moveToProfile(item) }}>
              <View style={styles.box}>
                <Image
                  style={styles.image}
                  source={{ uri: item.picture.thumbnail }} />
                <View style={styles.midBox}>
                  <Text
                    style={styles.username}>
                    {`${item.name.title} ${item.name.first} ${item.name.last} `}
                  </Text>
                  <View style={[styles.cardContent, styles.tagsContent]}>
                    <TouchableOpacity style={styles.btnColor} onPress={() => { this.tagClickEventListener(item) }}>
                      <Text>  {`${item.location.city} ${item.name.title} `}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnColor} onPress={() => { this.tagClickEventListener(item) }}>
                      <Text>  {` ${item.name.first} ${item.name.last} `}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          } />
      </View>)
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  name: {
    fontSize: 18,
    alignSelf: 'center',
    color: "#008080",
    fontWeight: 'bold'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: "#000088",
    borderWidth: 2,
    marginTop: -25,

  },
  body: {
    padding: 30,
    backgroundColor: "#E6E6FA",
  },
  box: {
    marginTop: 25,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height: 3,
      width: -4
    },
    elevation: 2,

  },
  midBox: {
    flexDirection: "column",
  },
  username: {
    color: "#20B2AA",
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: 10
  },
  cardContent: {
    flexDirection: 'row',
    marginLeft: 10,
  },

  tagsContent: {
    marginTop: 10,
    flexWrap: 'wrap'
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: "#eee",
    marginTop: 5,
  },
  btnTekst: {
    flexDirection: "column",
  }
});