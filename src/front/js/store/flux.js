const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {},
      thisWeek: [],
      userList: [],
      roleList: [],
      suscriptionList: [],
      suscriptionTypeList: [],
      sessionList: [],
      sessionTypeList: [],
      weekdayList: [],
      userSessionList: [],
    },
    actions: {
      getUser: () => {
        fetch(
          process.env.BACKEND_URL + "/api/user/" + localStorage.getItem("id"),
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ user: data });
          });
      },
      getItem: (itemToGet, listToSet) => {
        fetch(process.env.BACKEND_URL + "/api/get_" + itemToGet, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ [listToSet]: data });
          });
      },
      postItem: (route, itemToPost, itemToGet, listToSet) => {
        let x = fetch(process.env.BACKEND_URL + "/api/" + route, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify(itemToPost),
        })
          .then((resp) => resp.json())
          .then((data) => getActions().getItem(itemToGet, listToSet));
        return x;
      },
      putItem: (route, itemToPut, itemToGet, listToSet) => {
        let x = fetch(process.env.BACKEND_URL + "/api/" + route, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
          body: JSON.stringify(itemToPut),
        })
          .then((resp) => resp.json())
          .then((data) => {
            getActions().getItem(itemToGet, listToSet);
          });
        return x;
      },
      deleteItem: (route, itemToGet, listToSet) => {
        fetch(process.env.BACKEND_URL + "/api/" + route, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => getActions().getItem(itemToGet, listToSet));
      },
      postUserSession: (date, sessions_id) => {
        const store = getStore();
        fetch(process.env.BACKEND_URL + "/api/joinsession", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            date: date,
            sessions_id: sessions_id,
          }),
        })
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ user_sessions: data });
            // getActions().putUser(user);
            // getActions().getThisWeek();
            fetch(
              process.env.BACKEND_URL +
                "/api/edit_user/" +
                localStorage.getItem("id"),
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer" + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                  remaining_tokens: store.user.remaining_tokens - 1,
                }),
              }
            )
              .then((resp) => resp.json())
              .then((data) => {
                // console.log(newUser);
                // console.log(data);
                setStore({ user: data });
                getActions().getThisWeek();
              });
          });
      },

      getSessionTypes: () => {
        fetch(process.env.BACKEND_URL + "/api/get_session_types", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ sessionTypes: data });
          });
      },
      getSuscriptions: () => {
        fetch(process.env.BACKEND_URL + "/api/get_suscriptions", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((resp) => resp.json())
          .then((data) => setStore({ suscriptionList: data }));
      },
      deleteUserSession: (user_id, sessions_id, date) => {
        const store = getStore();
        // date = date.replace(/\//g, ":");
        fetch(
          process.env.BACKEND_URL +
            "/api/delete_user_session/" +
            user_id +
            "/" +
            sessions_id +
            "/" +
            date,
          {
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
          .then((resp) => resp.json())
          .then(
            (data) => {
              console.log(data);
              // setStore({ user_sessions: data });
              fetch(
                process.env.BACKEND_URL +
                  "/api/edit_user/" +
                  localStorage.getItem("id"),
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer" + localStorage.getItem("token"),
                  },
                  body: JSON.stringify({
                    remaining_tokens: store.user.remaining_tokens + 1,
                  }),
                }
              )
                .then((resp) => resp.json())
                .then((data) => {
                  // console.log(newUser);
                  console.log(data);
                  setStore({ user: data });
                  getActions().getThisWeek();
                });
            }

            // setStore({ user_sessions: data })
          );
      },
      putUser: (user) => {
        const store = getStore();
        fetch(process.env.BACKEND_URL + "/api/edit_user/" + store.user.id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
          body: JSON.stringify(user),
        })
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ user: data });
          });
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
