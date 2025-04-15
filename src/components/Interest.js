import React from 'react';

function Interest({ data, setData }) {
  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="cricket"
            checked={data?.interests?.includes('cricket')}
            onChange={handleChange}
          />
          Cricket
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="football"
            checked={data?.interests?.includes('football')}
            onChange={handleChange}
          />
          Football
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={data?.interests?.includes('coding')}
            onChange={handleChange}
          />
          Coding
        </label>
      </div>
    </div>
  );
}

export default Interest;
