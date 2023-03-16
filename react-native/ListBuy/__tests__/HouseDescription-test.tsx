import React from "react";
import { render } from '@testing-library/react-native';
import HouseDescription from "../components/HouseDescription";

describe('HouseDescription Component',()=>{
    test('HouseDescription component is defined',()=>{
        expect(HouseDescription).toBeDefined();
    })
    test('HouseDescription component is render correctly',()=>{
        const { getallby} =render(<HouseDescription />);
    })
})