import React from "react";

const ConterContext = React.createContext();
const ConterContextDispatcher = React.createContext();

const ConterProvider = () => {
  return (
    <ConterContext.Provider>
      <ConterContextDispatcher.Provider>
        {children}
      </ConterContextDispatcher.Provider>
    </ConterContext.Provider>
  );
};

export default ConterProvider;
