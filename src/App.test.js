
import { fetchAPI, submitAPI } from './components/Bookingpage/BookingAPI.js';
import {  updateTimes } from './components/Bookingpage/BookingPage.js';


// mock the fetchAPI function to return a non-empty array of available booking times
jest.mock('./components/Bookingpage/BookingAPI.js');
fetchAPI.mockResolvedValue([
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
]);

describe('updateTimes', () => {
  it('returns an object with all available times set to true', async () => {
    const expectedTimes = {
      '11:00 AM': true,
      '12:00 PM': true,
      '1:00 PM': true,
      '5:00 PM': true,
      '6:00 PM': true,
      '7:00 PM': true,
    };

    const times = await updateTimes();

    expect(times).toEqual(expectedTimes);
  });
});


describe('fetchAPI', () => {
  it('returns the expected data', async () => {
    const expectedData = [
      '11:00 AM',
      '12:00 PM',
      '1:00 PM',
      '5:00 PM',
      '6:00 PM',
      '7:00 PM',
    ];

    const data = await fetchAPI();

    expect(data).toEqual(expectedData);
  });
});

