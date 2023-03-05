import React from "react";
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import UserData from "../components/UserData";

describe('UserData Component', () => {
    it('UserData component is defined', () => {
        expect(UserData).toBeDefined();
    });
    it('renders correctly', () => {
        renderer.create(<UserData />)
    });
    it('UserData component render correctly',()=>{
        const { getByTestId,getByText}=render(<UserData/>);
        const userData = getByTestId('user-data');
        expect(userData).toBeDefined();
    });

});