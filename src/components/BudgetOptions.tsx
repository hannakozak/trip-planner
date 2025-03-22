import { BudgetOptionsList } from '@/constans/options';
export const BudgetOptions = () => {
  return (
    <div>
      <div className="grid grid-col-1 md:grid-cols-3 gap-4 text-center">
        {BudgetOptionsList.map((option) => (
          <div
            key={option.id}
            className="flex flex-col border p-3 items-center gap-2 cursor-pointer"
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
