import { useContext, useState, useEffect, createContext } from "react";

const commentContext = createContext();
const useComment = () => useContext(commentContext);


const CommentProvider = ({children}) => {
    

      return(
          <commentContext.Provider value={{}}>
              {children}
          </commentContext.Provider>
      );
    
};

export {CommentProvider, useComment};