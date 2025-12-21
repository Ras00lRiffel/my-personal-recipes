import { useState, type ChangeEvent } from "react";

type RepeatingInputsProps = {
  /** Callback to send the array of values to the parent */
  onChange: (values: string[]) => void;
};

const RepeatingInputs: React.FC<RepeatingInputsProps> = ({ onChange }) => {
  const [values, setValues] = useState<string[]>([""]);

  const addInput = (): void => {
    const updatedValues = [...values, ""];
    setValues(updatedValues);
    onChange(updatedValues); // notify parent
  };

  const removeInput = (indexToRemove: number): void => {
    const updatedValues = values.filter((_, index) => index !== indexToRemove);
    setValues(updatedValues);
    onChange(updatedValues); // notify parent
  };

  const handleChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const updatedValues = [...values];
    updatedValues[index] = event.target.value;
    setValues(updatedValues);
    onChange(updatedValues); // notify parent
  };

  return (
    <div className="repeater-inputs flex justify-between max-w-2xl m-auto block text-sm/6 font-medium text-gray-900">
      <div>
        {values.map((value, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              value={value}
              onChange={(e) => handleChange(index, e)}
              className="repeater-input w-sm  bg-white border border-gray-300 rounded px-2 py-1"
            />
            <button
              type="button"
              onClick={() => removeInput(index)}
              className="repeater-input-rm-btn ml-2 cursor-pointer border border-gray-300 rounded px-2 py-1"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="repeater-input-add-btn cursor-pointer h-full mr-2 border border-gray-300 rounded px-2 py-1 bg-gray-400 text-white hover:bg-orange-400 hover:text-white transition"
        onClick={addInput}
      >
        Add Input
      </button>
    </div>
  );
};

export default RepeatingInputs;
