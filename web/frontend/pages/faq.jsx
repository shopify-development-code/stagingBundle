import React from 'react';
import { Collapse,Card } from 'antd';
const Faq = () => {
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
    {
      key: '1',
      label: 'How to create a simple bundle ?',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
    },
  ];


  return (
    <div className='sd-bundle-setting-translation'>
           <div className='sd-bundle-MoveToHome-section'>
    
       <div className="sd-bundle-commonHeading">FAQ and Instructions</div>
      
    </div>
    <div  >
        <Card>
    <Collapse  ghost items={items} />

        </Card>
    </div>
    </div>
  )
}

export default Faq