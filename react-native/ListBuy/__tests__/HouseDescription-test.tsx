import React from "react";
import { render } from '@testing-library/react-native';
import HouseDescription from "../components/HouseDescription";

describe('HouseDescription Component',()=>{
    test('HouseDescription component is defined',()=>{
        expect(HouseDescription).toBeDefined();
    })
    test('HouseDescription component is render correctly',()=>{
        const item = jest.fn();
        const { getByTestId}=render(<HouseDescription houseDesc={item} />);

        const HouseDetails = getByTestId('houseDetails')
        expect(HouseDetails).toBeDefined();
        
        const Address = getByTestId('address')
        expect(Address).toBeDefined();
        
        const PropertyType = getByTestId('propertyType')
        expect(PropertyType).toBeDefined();
        
        const Price = getByTestId('price')
        expect(Price).toBeDefined();
        
        const Parking = getByTestId('parking')
        expect(Parking).toBeDefined();
        
        const Bedroom = getByTestId('bedroom')
        expect(Bedroom).toBeDefined();
        
        const Bathroom = getByTestId('bathroom')
        expect(Bathroom).toBeDefined();
    })
})