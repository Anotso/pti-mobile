import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";

function Card(props) {
    const data = JSON.parse(props.values)

    return(
        <SafeAreaView>
            <View className="flex flex-row p-4">
                <Image 
                    source={{ 
                        uri: data.urlImg
                    }}
                    style={{width: 100, height: 100}}
                    className="rounded-lg"
                />
                <View className="flex flex-col justify-between pl-2">
                    <Text className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {data.title}
                    </Text>
                    <Text className="mb-3 font-normal text-gray-700">
                        {data.description}
                    </Text>
                    <Text className="mb-3 font-normal text-gray-700">
                        R$ {new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(data.price)}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Card;