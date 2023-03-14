import React from "react";
import { render } from '@testing-library/react-native';
import UserData from "../components/UserList";

describe('UserData Component', () => {

    const users = [
        { name: 'john', email: 'john@example.com' },
    ];

    it('UserData component is defined', () => {
        expect(UserData).toBeDefined();
    });


    it('UserData component render correctly', () => {
        const { getByTestId } = render(<UserData />);
        
        const userData = getByTestId('table');
        expect(userData).toBeDefined();

    });

});