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
        const { getByTestId } = render(<HouseImages />);

        const HouseImageView = getByTestId('houseImageView')
        expect(HouseImageView).toBeDefined();
    })
})