import React from "react";
import { render } from '@testing-library/react-native';
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

        const nameText = getByText('Name');
        expect(nameText).toBeDefined();

        const nameInput = getByPlaceholderText('Enter your name');
        expect(nameInput).toBeDefined();

        const emailText = getByText('Email');
        expect(emailText).toBeDefined();

        const emailInput = getByPlaceholderText('Enter your email');
        expect(emailInput).toBeDefined();

        const addButton = getByText('Add');
        expect(addButton).toBeDefined();

        const cancelButton = getByText('Cancel');
        expect(cancelButton).toBeDefined();
    })
})