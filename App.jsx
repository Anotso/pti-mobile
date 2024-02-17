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
      urlImg: 'https://reactjs.org/logo-og.png'
    }),
    JSON.stringify({
      title: 'Produto 2',
      description: 'Descrição do produto 2',
      price: 19.58,
      urlImg: 'https://reactjs.org/logo-og.png'
    }),
    JSON.stringify({
      title: 'Produto 3',
      description: 'Descrição do produto 3',
      price: 13.80,
      urlImg: 'https://reactjs.org/logo-og.png'
    }),
    JSON.stringify({
      title: 'Produto 4',
      description: 'Descrição do produto 4',
      price: 39.90,
      urlImg: 'https://reactjs.org/logo-og.png'
    }),
  ];

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View className="flex justify-center items-center h-screen bg-slate-300">
          {data.map((item, key) =>{
            return <Card values={item} key={key}/>
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
