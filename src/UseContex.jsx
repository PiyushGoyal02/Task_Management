// import { createContext, useContext, useState } from "react";

// const ActiveContext = createContext();

// export function ActiveProvider({ children }) {
//   const [active, setActive] = useState("dashboard");

//   return (
//     <ActiveContext.Provider value={{ active, setActive }}>
//       {children}
//     </ActiveContext.Provider>
//   );
// }

// export function useActive() {
//   return useContext(ActiveContext);
// // } a