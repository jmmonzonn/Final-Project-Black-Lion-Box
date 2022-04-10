const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      username: "",
    },
    actions: {
      setUsername: (username) => {
        setStore({ username: username });
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      validate: async () => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/validate",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        return data.validate;
      },
    },
  };
};

export default getState;
