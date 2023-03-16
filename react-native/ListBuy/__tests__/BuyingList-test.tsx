import React from "react";
import { render } from '@testing-library/react-native';
import BuyingList from "../components/BuyingList"
import jsonData from '../listings-buy-data.json';

describe('BuyingList Components', () => {

    it('BuyingList component render correctly', () => {
        const { getByTestId,getAllByTestId } = render(<BuyingList />);
        
        const BuyingFlatList = getByTestId('Buying-FlatList');
        expect(BuyingFlatList).toBeDefined();

        const HousePicture = getAllByTestId('HouseImage');
        expect(HousePicture).toBeDefined();

        const AgentProfilePic = getAllByTestId('agentProfileImage');
        expect(AgentProfilePic).toBeDefined();

    });

    it('Checking .json file is empty or not',()=>{
        const jsonObject= jsonData
        expect(jsonObject).not.toBeNull();
    })
})