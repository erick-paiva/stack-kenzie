import { createContext, useState} from "react";

const TagContext = createContext({});

const TagProvider = ({ children }) => {
  const [tags, setTags] = useState([
    "JAVASCRIPT",
    "REACT",
    "LINUX",
    "PYTHON",
    "NODE",
    "CSS",
    "HTML",
    "REDUX",
    "TYPESCRIPT",
    "FRONT",
    "FIREBASE",
    "CONTEXTAPI",
    "YARN",
    "API",
    "HEROKU",
    "CANVA",
    "MYSQL",
    "POSTGRESQL",
    "SQL",
    "KATAS",
  ]);

  return (
    <TagContext.Provider value={{ tags, setTags }}>
      {children}
    </TagContext.Provider>
  );
};

export { TagProvider, TagContext };
