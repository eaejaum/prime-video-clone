import { Image, StyleSheet, TouchableOpacity } from "react-native";

export const MovieCard = (props) => {
  return (
    <TouchableOpacity>
      <Image style={styles.image} source={props.movieURL} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    image: {
        marginRight: 20,
    }
});
