import { BudgetOptionsList } from '@/constans/options';

interface BudgetOptionsProps {
  handleInputChange: (field: string, value: string) => void;
  formData: {
    [key: string]: string;
  };
}

export const BudgetOptions = ({
  handleInputChange,
  formData,
}: BudgetOptionsProps) => {
  return (
    <div>
      <div className="grid grid-col-1 md:grid-cols-3 gap-4 text-center">
        {BudgetOptionsList.map((option) => (
          <div
            key={option.id}
            onClick={() => handleInputChange('budget', option.label)}
            className={`flex flex-col border-2 p-3 items-center gap-2 cursor-pointer ${
              formData?.budget === option.label
                ? 'border-black bg-gray-100'
                : 'border-gray-300'
            }`}
          >
            <h2 className="font-bold text-lg">{option.label}</h2>
            <h2 className="text-3xl">{option.icon}</h2>
            <h3 className="text-sm text-gray-500">{option.desc}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
