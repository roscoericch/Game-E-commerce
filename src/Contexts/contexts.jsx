import { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext({
  data: {},
  SetData: () => {},
});

const CheckoutContext = ({ children }) => {
  const [data, setdata] = useState({});
  const SetData = (data) => {
    setdata(data);
  };
  const value = {
    data,
    SetData,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default CheckoutContext;
