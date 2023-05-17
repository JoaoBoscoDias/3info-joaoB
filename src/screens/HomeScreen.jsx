import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";

export default function HomeScreen() {
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState([]);

  async function buscarProduto() {
    const produtoRef = collection(db, 'produtos');
    const buscaProduto = query(produtoRef, where('NomeDoProduto', '==', busca));
    const resultadoSnapshot = await getDocs(buscaProduto);
    const listaProdutos = resultadoSnapshot.docs.map(doc => doc.data())
    console.log(listaProdutos);
    setResultado(listaProdutos);

    // console.log(resultadoSnapshot);

  }

  useEffect(
    () => {
      buscarProduto();
    }, [busca]
  )

  return (
    <View>
      <Text>Home Screen</Text>
      <TextInput 
        label={"Faça sua busca"}
        value={busca}
        onChangeText={setBusca}
      />
    </View>
  );
}
