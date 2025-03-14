import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Link to="/trip-planner">
        <Button>Trip Planner</Button>
      </Link>
    </div>
  );
};
