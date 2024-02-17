import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import Card from './components/Card';


function App(){
  const data = [
    JSON.stringify({
      title: 'Produto 1',
      description: 'Descrição do produto 1',
      price: 9.58,
      urlImg: 'https://minervafoods.com/wp-content/uploads/2023/09/HamburguerAlcatraComBacon_1-2048x1359.jpg'
    }),
    JSON.stringify({
      title: 'Produto 2',
      description: 'Descrição do produto 2',
      price: 19.58,
      urlImg: 'https://minervafoods.com/wp-content/uploads/2023/09/HamburguerAlcatraComBacon_1-2048x1359.jpg'
    }),
    JSON.stringify({
      title: 'Produto 3',
      description: 'Descrição do produto 3',
      price: 13.80,
      urlImg: 'https://minervafoods.com/wp-content/uploads/2023/09/HamburguerAlcatraComBacon_1-2048x1359.jpg'
    }),
    JSON.stringify({
      title: 'Produto 4',
      description: 'Descrição do produto 4',
      price: 39.90,
      urlImg: 'https://minervafoods.com/wp-content/uploads/2023/09/HamburguerAlcatraComBacon_1-2048x1359.jpg'
    }),
  ];

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View className="bg-white dark:bg-black flex flex-col justify-center items-center h-screen">
          {data.map((item, key) =>{
            return <Card values={item} key={key}/>
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
