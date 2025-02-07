import React from 'react';
// import ColorToggler from './Component/Color Toggler project 5/ColorToggler';
// import Todo from './Component/ToDoProject2/Todo';
// import Meals from './Component/MealsAPI.Peoject3/Meals';
// import Calculator from './Component/CalculatorPoject4/Calculator';
// import HiddenSearchBar from './Component/HiddenSearchBar project  6/HiddenSearchBar';
// import Counter from './Component/CounterProject1/Counter';
import AccordionData from './Component/AccordionData Project  7/AccordionData';
import { accordionData } from './utils/content';

const App = () => {
  return (
    <div>
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <Meals/> */}
      {/* <Calculator/> */}
      {/* <ColorToggler/> */}
      {/* <HiddenSearchBar/> */}
      <div className="accordionData">
        {
          accordionData.map(({ title, content }) => (
            <AccordionData key={title} title={title} content={content} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
