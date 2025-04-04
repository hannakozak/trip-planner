import { BudgetOptions } from '@/components/BudgetOptions';
import { TravelersOptions } from '@/components/TravelerOptionsList';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

export const TripPlanner = () => {
  const [place, setPlace] = useState<Place | null>(null);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onGenerateTrip = () => {
    if (Number(formData?.duration) > 14) {
      alert('Duration cannot be more than 14 days');
      return;
    }
    if (
      !formData?.destination ||
      !formData?.duration ||
      !formData?.budget ||
      !formData?.travelers
    ) {
      alert('Please fill all the fields');

      return;
    }
  };
  interface Place {
    label: string;
    value: {
      place_id: string;
      description: string;
    };
  }

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
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              value: place,
              onChange: (value: Place | null) => {
                setPlace(value);
                handleInputChange('destination', value?.label || '');
              },
            }}
          />
          <label className="text-gray-700 font-medium" htmlFor="duration">
            Duration
          </label>
          <input
            onChange={(event) =>
              handleInputChange('duration', event.target.value)
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1"
            type="number"
            id="duration"
          />
          <label className="text-gray-700 font-medium" htmlFor="budget">
            What is Your Budget?
          </label>
          <BudgetOptions
            handleInputChange={handleInputChange}
            formData={formData}
          />
          <label className="text-gray-700 font-medium" htmlFor="travelers">
            Number of Travelers?
          </label>
          <TravelersOptions
            handleInputChange={handleInputChange}
            formData={formData}
          />
          <Button onClick={onGenerateTrip} type="submit">
            Plan Trip
          </Button>
        </form>
      </div>
    </div>
  );
};
