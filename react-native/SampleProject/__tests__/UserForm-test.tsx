import React from "react";
import { fireEvent, render } from '@testing-library/react-native';
import UserForm from "../components/UserForm";
import renderer from 'react-test-renderer';

describe('UserForm Component', () => {
    it('UserForm component is defined', () => {
        expect(UserForm).toBeDefined();
    })
    it('renders correctly', () => {
        renderer.create(<UserForm />);
    });
    it('UserForm component renders correctly', () => {
        const { getByTestId, getByText, getByPlaceholderText } = render(<UserForm />)

        const component = getByTestId('user-form');
        expect(component).toBeDefined();

        const nameText = getByTestId('name-test');
        expect(nameText).toBeDefined();

        const nameInput = getByPlaceholderText('Enter your name');
        expect(nameInput).toBeDefined();

        const emailText = getByTestId('name-test');
        expect(emailText).toBeDefined();

        const emailInput = getByPlaceholderText('Enter your email');
        expect(emailInput).toBeDefined();

        const addButton = getByText('Add');
        expect(addButton).toBeDefined();

        const cancelButton = getByText('Cancel');
        expect(cancelButton).toBeDefined();

        const tableHead = getByTestId('theading');
        expect(tableHead).toBeDefined();
    });

    it('adds items to the list', () => {
        const { getByPlaceholderText, getByText, getByTestId } = render(<UserForm />);
        
        const nameInput = getByPlaceholderText('Enter your name');
        const emailInput = getByPlaceholderText('Enter your email');
        const addButton = getByText('Add');
        const flatList = getByTestId('flatlist');
    
        fireEvent.changeText(nameInput, 'sam');
        fireEvent.changeText(emailInput, 'sam@gmail.com');
        fireEvent.press(addButton);
    
        expect(getByText('sam')).toBeDefined();
        expect(getByText('sam@gmail.com')).toBeDefined();
        expect(flatList.props.data[0].name).toContain('sam');
        expect(flatList.props.data[0].email).toContain('sam@gmail.com');
      });
})