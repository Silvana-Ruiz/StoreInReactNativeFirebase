import React from "react";
import * as RN from "react-native";
import { useNavigation } from "@react-navigation/native";
import { database } from "../config/fb";
import { QuerySnapshot, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Product from "../components/Product";

export default function Home() {
  const navigation = useNavigation();
  const [products, setProducts] = React.useState([]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <RN.Button title="Add" onPress={() => navigation.navigate("Add")} />
    });
  }, []);

  React.useEffect(() => {
    const collectionRef = collection(database, 'products');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      setProducts(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          emoji: doc.data().emoji,
          name: doc.data().name,
          price: doc.data().price,
          isSold: doc.data().isSold,
          createdAt: doc.data().createdAt,
        }))
      );
    });
    return unsubscribe;
  }, []);

  return (
    <RN.View style={styles.container}>
      <RN.Text style={styles.title}>Products</RN.Text>
      {products.length > 0 ?
        products.map(product => <Product key={product.id} {...product} />)
        :
        <RN.Text style={styles.noProducts}>There are currently no products</RN.Text>
      }
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3F9"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 16
  },
  noProducts: {
    fontSize: 20,
    margin: 16
  }
});