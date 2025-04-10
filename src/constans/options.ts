export const BudgetOptionsList = [
  { id: 1, label: 'Cheap', desc: 'Budget friendly options', icon: '💰' },
  { id: 2, label: 'Moderate', desc: 'Balanced options', icon: '💵' },
  { id: 3, label: 'Expensive', desc: 'High-end options', icon: '💸' },
];
export const TravelerOptionsList = [
  { id: 1, label: 'Just Me', desc: 'Solo adventure', icon: '🧍' },
  { id: 2, label: 'A Couple', desc: 'Two travelers', icon: '👫' },
  { id: 3, label: 'Family', desc: 'Group or kids', icon: '👨‍👩‍👧‍👦' },
];

export const AI_PROMPT =
  'Generate Travel Plan for Location : {location}, for {noOfDays} Days for {noOfPeople} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {noOfDays} with each day plan with best time to visit in JSON format';
