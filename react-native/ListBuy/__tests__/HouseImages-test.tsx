import React from "react";
import { render } from '@testing-library/react-native';
import HouseImages from '../components/HouseImages';
import jsonData from '../listings-buy-data.json';

describe('HouseImages Component', () => {

    test('HouseImages component is defined', () => {
        expect(HouseImages).toBeDefined();
    })

    test('Checking .json file is empty or not', () => {
        const jsonObject = jsonData
        expect(jsonObject).not.toBeNull();
    })

    test('HouseImage components renders correctly', () => {
        const images = [
            { url: 'https://www.example.com/image1.jpg' },
            { url: 'https://www.example.com/image2.jpg' },
            { url: 'https://www.example.com/image3.jpg' },
          ];
        const { getByTestId } = render(<HouseImages route={images} />);

        const sliderImages = getByTestId('sliderImages')
        expect(sliderImages).toBeDefined();
    })
})