import React, { useState } from 'react';
import Profile from './Profile';
import Interest from './Interest';
import Settings from './Settings';
import '../style.css';

function Tab() {
  const [activetabs, setactivetabs] = useState(0);
  const [data, setData] = useState({
    name: '',
    age: '',
    email: '',
    interests: ['cricket', 'coding'],
    theme: 'dark',
  });
  const tabs = [
    {
      name: 'Profile',
      component: Profile,
    },
    {
      name: 'Interest',
      component: Interest,
    },
    {
      name: 'Settings',
      component: Settings,
    },
  ];

  const ActivetabsIndicator = tabs[activetabs]?.component;

  const handleTabs = (index) => {
    setactivetabs(index);
  };

  const handleSubmit = () => {
    console.log('final data', data);
  };
  console.log('activetabs', activetabs);
  return (
    <div>
      <div className="tab-container">
        {tabs?.map((item, index) => (
          <div
            className={activetabs === index ? 'tab-items active' : `tab-items`}
            key={index}
            onClick={() => handleTabs(index)}
          >
            {item?.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActivetabsIndicator data={data} setData={setData} />
      </div>
      <div>
        {activetabs < 2 && (
          <button onClick={() => setactivetabs((prev) => prev + 1)}>
            Next
          </button>
        )}
        {activetabs === 1 && (
          <button onClick={() => setactivetabs((prev) => prev - 1)}>
            Prev
          </button>
        )}
        {activetabs === 2 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
}

export default Tab;
