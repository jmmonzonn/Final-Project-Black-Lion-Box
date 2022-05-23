const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user_sessions: [],
      user: {},
      thisWeek: [],
      suscriptionList: [],
    },
    actions: {
      setUser: (user) => {
        setStore({ user: user });
      },
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
            setStore({ user: data[0] });
          });
      },
      getThisWeek: () => {
        fetch(process.env.BACKEND_URL + "/api/thisweek", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ thisWeek: data });
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
      getUserSessions: () => {
        fetch(
          process.env.BACKEND_URL +
            "/api/user_sessions/" +
            localStorage.getItem("id"),
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
          .then((resp) => resp.json())
          .then((data) => setStore({ user_sessions: data }));
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
                console.log(data);
                setStore({ user: data });
                getActions().getThisWeek();
              });
          });
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
