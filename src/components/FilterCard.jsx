import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const filterData = [
  {
    filterType: "Location",
    array: ["Hanoi", "Ho Chi Minh", "Da Nang", "Hai Phong", "Can Tho"]
  },
  {
    filterType: "Industry",
    array: ["Frontend", "Backend", "Fullstack", "Mobile", "Data Engineer", "Data Science"]
  }
]

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    // Nếu đã chọn giá trị này rồi, hủy chọn
    if (selectedValue === value) {
      setSelectedValue('');
    } else {
      setSelectedValue(value);
    }
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue, dispatch]);

  return (
    <div className='text-left w-full bg-white p-3 rounded-md'>
      <div className="flex justify-between items-center">
        <h1 className='font-bold text-lg'>Filter Jobs</h1>
        {selectedValue && (
          <button 
            onClick={() => setSelectedValue('')}
            className="text-blue-500 text-sm hover:underline"
          >
            Clear All
          </button>
        )}
      </div>
      <hr className='mt-3' />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {
          filterData.map((data, index) => (
            <div key={index} className="mt-4">
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.array.map((item, idx) => {
                  const itemId = `id${index}-${idx}`;
                  const isSelected = selectedValue === item;
                  
                  return (
                    <div className='flex items-center space-x-2 my-2' key={itemId}>
                      <RadioGroupItem
                        value={item}
                        id={itemId}
                        className={`border ${isSelected ? 'border-blue-500' : 'border-gray-700'}`}
                      />
                      <Label htmlFor={itemId}>{item}</Label>
                    </div>
                  );
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  );
}

export default FilterCard