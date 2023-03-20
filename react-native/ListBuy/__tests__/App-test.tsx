import 'react-native';
import React from 'react';
import App from '../App';
import axios from 'axios';



describe('App Component', () => {
  test('App component is defined', () => {
    expect(App).toBeDefined();
  })
  test('mock testing url api of List-buy work correctly', () => {

    const mockedApi = { data: {} }
    jest.mock('axios');
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    mockedAxios.get.mockResolvedValue(mockedApi);

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledWith(`http://10.0.2.2:3000/data`);

  })
})


