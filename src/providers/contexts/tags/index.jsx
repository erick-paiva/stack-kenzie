import { createContext, useState, useEffect } from "react";
import { api } from "../../../services/api";
import { useQuestions, useComments, useAnswers } from "../../hooks";

const TagContext = createContext({});

const TagProvider = ({ children }) => {
  const [tags, setTags] = useState([
    { name: "JAVASCRIPT", isActive: true },
    { name: "REACT", isActive: false },
    { name: "LINUX", isActive: false },
    { name: "PYTHON", isActive: false },
    { name: "NODE", isActive: false },
    { name: "CSS", isActive: false },
    { name: "HTML", isActive: false },
    { name: "REDUX", isActive: false },
    { name: "TYPESCRIPT", isActive: false },
    { name: "FRONT", isActive: false },
    { name: "FIREBASE", isActive: false },
    { name: "CONTEXTAPI", isActive: false },
    { name: "YARN", isActive: false },
    { name: "API", isActive: false },
    { name: "HEROKU", isActive: false },
    { name: "CANVA", isActive: false },
    { name: "MYSQL", isActive: false },
    { name: "POSTGRESQL", isActive: false },
    { name: "SQL", isActive: false },
    { name: "KATAS", isActive: false },
  ]);

  //deletar uma questão
  const updateTags = async (tag) => {
    /* 
    const newTags = tags.reduce((acc, act) => {
      if (act.name === tag) {
        return (tag.isActive = true);
      }
    }); 
    setTags(newTags) 
    */
  };

  return (
    <TagContext.Provider value={{ tags, setTags, updateTags }}>
      {children}
    </TagContext.Provider>
  );
};

export { TagProvider, TagContext };
