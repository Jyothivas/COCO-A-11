import React from "react";
import { render } from '@testing-library/react-native';
import HousePic from '../components/HousePic';
import jsonData from '../listings-buy-data.json';

describe('HousePic Components', () => {

    test('HousePic component is defined', () => {
        expect(HousePic).toBeDefined();
    })

    test('Checking .json file is empty or not', () => {
        const jsonObject = jsonData
        expect(jsonObject).not.toBeNull();
    })

    test('HousePic components renders correctly', () => {
        
        const { getByTestId } = render(<HousePic HousePicData={undefined} navigation={undefined} />);

        const housePicView = getByTestId('HousePicView');
        expect(housePicView).toBeDefined();
        
        const houseImageFlatlist = getByTestId('HouseImage');
        expect(houseImageFlatlist).toBeDefined();

    })
   
})
