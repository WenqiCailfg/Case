import React, { useState, useContext, useEffect, createContext } from "react";
import { Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import data from "./assets/data/project_data.json";
const AppContext = createContext();
const { confirm } = Modal;

// Context component
const AppProvider = ({ children }) => {
  const [projects, setProjects] = useState(data);
  const [showProjects, setShowProjects] = useState(data);
  const [input, setInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // function show confirmation when deleting project
  const showConfirm = (value) => {
    confirm({
      title: "Delete Project",
      icon: <ExclamationCircleFilled />,
      content: `Do you want to delete ${value}?`,
      onOk() {
        removeProject(value);
      },
      onCancel() {
        handleCancel();
      },
    });
  };

  // generate unique category, store in allCategory variable
  // be used to fetch category color
  let allCategory = [];
  data.map((item) => {
    allCategory.push(item.category);
  });
  allCategory = [...new Set(allCategory)];

  //open and close confirmation modal functions
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Search projects when type in search bar
  const searchProjects = () => {
    // Set projects data after searching
    // Store in showProjects variable
    let filterProjects = projects.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setShowProjects(filterProjects);
  };

  // Delete projects function
  const removeProject = (name) => {
    // Store in Projects variable
    let newProjects = projects.filter((item) => item.name !== name);
    setProjects(newProjects);
  };

  // Search projects when input or projects changed
  useEffect(() => {
    searchProjects();
  }, [input, projects]);

  return (
    <AppContext.Provider
      value={{
        projects,
        input,
        setInput,
        allCategory,
        removeProject,
        showProjects,
        setIsModalOpen,
        showModal,
        handleCancel,
        showConfirm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
