import { render } from "@testing-library/react-native";
import React from "react";
import HouseCard from "../components/HouseCard";

describe('HouseCard Component',()=>{
    
    test('HouseCard component is defined',()=>{
        expect(HouseCard).toBeDefined();
    })
    
    test('HouseCard component render correctly',()=>{
        const {getByTestId}=render(<HouseCard HouseData={undefined} navigation={undefined}   />)

        const houseCardView = getByTestId('housecard');
        expect(houseCardView).toBeDefined();
    })
})