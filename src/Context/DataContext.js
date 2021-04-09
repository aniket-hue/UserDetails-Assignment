import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchData } from '../api';

const DataContextValue = createContext();

export const useDataContext = () => {
  return useContext(DataContextValue);
};

export const DataContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => fetchUserData(), []);

  const fetchUserData = async () => {
    const userDetailsData = await fetchData('users');
    const postData = await fetchData('posts');
    let finalData = userData;
    userDetailsData.forEach(
      (el) =>
        (finalData = {
          ...finalData,
          [el.id]: {
            ...el,
            posts: [],
          },
        })
    );
    postData.forEach(
      (el) =>
        (finalData = {
          ...finalData,
          [el.userId]: {
            ...finalData[el.userId],
            posts: [...finalData[el.userId]['posts'], el.title],
          },
        })
    );

    setUserData(finalData);
  };

  return (
    <DataContextValue.Provider value={{ userData, fetchUserData, setUserData }}>
      {children}
    </DataContextValue.Provider>
  );
};
