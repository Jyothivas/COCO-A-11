import { Image, ScrollView, Text, TextInput, View } from "react-native";
import HelloWorldApp from "./HelloWorldApp";
import TestRenderer from 'react-test-renderer';
import GroceryShoppingList from "./components/GroceryShoppingList";

function App() {


  return (
    <>
      <ScrollView>
        <View>
          <Text>Some Text </Text>
          <Text>Hello, World!</Text>
          <Text>Some more text</Text>
          <Image testID="cat-image" source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <GroceryShoppingList />
      </ScrollView>
    </>
  );
}

// const testRenderer = TestRenderer.create(<App />);
// const testInstance = testRenderer.root;

export default App;
