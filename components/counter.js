import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { decrement } from "../actions/countactions";
import { increment } from "../actions/countactions";

const Counter ()=>{
    const dispatc = useDispatch();
    const count = useSelector((state) => state.count); 
    return (
        <View>
        <Text >
        {count}
        </Text>
        <Button onPress={dispatc(increment())} >
        +10
        </Button>
        <Button onPress={(dispatc(decrement()))}>
        -10
        </Button>
        </View>
    )
};

export default Counter;