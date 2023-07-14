import React, { useState, useEffect } from 'react';

function Gettheuserdata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchthedata = async () => {
      try {
        const response = await fetch("https://www.linkedin.com/feed/");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchthedata();
  }, []);

  console.log(data);

  return <div></div>;
}

export default Gettheuserdata;
