'use client'

import React, { useState } from "react";

export const SlideContext = React.createContext();

export const SlideProvider = ({ children }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <SlideContext.Provider value={{ activeSlideIndex, setActiveSlideIndex }}>
      {children}
    </SlideContext.Provider>
  );
};