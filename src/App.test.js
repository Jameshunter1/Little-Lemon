import { fetchAPI } from "./components/Bookingpage/BookingAPI";
import { updateTimes } from "./components/Bookingpage/Bookingpage";

describe('fetchAPI function', () => {
  const mockData = {
    data: {
      availableTimes: ["17:00", "17:30", "18:00", "18:30", "21:00", "21:30", "22:00", "23:00"],
      bookings: []
    }
  };
  it('should return the correct data', async () => {
    const expected = mockData;
    const result = await fetchAPI(new Date('2022-04-01'));

    expect(result).toEqual(expected);
  });

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });

  it('fetchAPI returns error for invalid date', async () => {
    await expect(fetchAPI(new Date('invalid date'))).rejects.toThrow();
  });

  it('should call the fetch function with the correct arguments', async () => {
    const expectedUrl = 'http://localhost:3000/api/bookings?date=2022-04-01';

    await fetchAPI(new Date('2022-04-01'));

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
  });

  it('should throw an error if the response is not successful', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });

    await expect(fetchAPI(new Date('2022-04-01'))).rejects.toThrow(
      'Request failed: 404 Not Found'
    );
  });
});
