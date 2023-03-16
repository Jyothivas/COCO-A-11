import React from "react";
import { render } from '@testing-library/react-native';
import BuyingList from "../components/BuyingList"

describe('BuyingList Components', () => {

    it('BuyingList component render correctly', () => {
        const { getByTestId } = render(<BuyingList />);

        const BuyingFlatList = getByTestId('Buying-FlatList');
        expect(BuyingFlatList).toBeDefined();

    });

    const data = jest.fn(async () => {
        const url = 'http://192.168.220.250:3000/data';
        let response: any = await fetch(url);
        response = await response.json();
        return response;
    })

    it('works with async/await', async () => {
        expect.assertions(1);
        expect(data).not.toBeNull();
    });
})