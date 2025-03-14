import { Button } from '@/components/ui/button';

export const TripPlanner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h2>Lets plan Your next trip?</h2>
      <p className="text-center p-3 mb-10">
        Tell us your trip preferences and we will generate travel details for
        you!
      </p>
      <div>
        <form className="flex flex-col gap-4">
          <label className="text-gray-700 font-medium" htmlFor="destination">
            What is destination of choice?
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1"
            type="text"
            id="destination"
          />
          <label className="text-gray-700 font-medium" htmlFor="budget">
            Budget
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1"
            type="number"
            id="budget"
          />
          <label className="text-gray-700 font-medium" htmlFor="duration">
            Duration
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1"
            type="number"
            id="duration"
          />
          <Button type="submit">Plan Trip</Button>
        </form>
      </div>
    </div>
  );
};
