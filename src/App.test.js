
import { initializeTimes, updateTimes} from "./components/Main/Main.js";
//Test 1: initializeTimes returns an object with all available times set to true
// describe("initializeTimes", () => {
//   it("returns an object with all available times set to true", () => {
//     const availableTimes = ["11:00 AM", "12:00 PM", "1:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"];
//     const expectedTimes = {
//       "11:00 AM": true,
//       "12:00 PM": true,
//       "1:00 PM": true,
//       "5:00 PM": true,
//       "6:00 PM": true,
//       "7:00 PM": true,
//     };

//     const times = initializeTimes(availableTimes);

//     expect(times).toEqual(expectedTimes);
//   });
// });



//Test 2: updateTimes returns an array with the provided time set to the provided value
describe('updateTimes', () => {
  it('should return the same value that is provided in the state', () => {
    const initialTimes = [
      '11:00 AM',
      '12:00 PM',
      '1:00 PM',
      '5:00 PM',
      '6:00 PM',
      '7:00 PM',
    ];
    const updatedTimes = updateTimes(initialTimes, '11:00 AM', false);
    expect(updatedTimes).toEqual(initialTimes);
  });
})
