const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      subscription_id: "",
      username: "",
      user_id: "",
      stripe_id: "",
      suscriptionList: [],
    },
    actions: {
      /* Funcion para pagos en Stripe */
      pay: (stripe_id) => {
        let stripe = Stripe(process.env.React_APP_STRIPE_KEY);
        stripe
          .redirectToCheckout({
            lineItems: [{ price: stripe_id, quantity: 1 }],
            customerEmail: localStorage.getItem("email"),
            mode: "subscription",
            successUrl:
              "https://3000-jmmonzonn-finalprojectb-hhw9h19v6vn.ws-eu43.gitpod.io/user/dashboard",
            cancelUrl:
              "https://3000-jmmonzonn-finalprojectb-hhw9h19v6vn.ws-eu43.gitpod.io/cancel",
          })
          .then(function (result) {
            if (result.error) {
              var displayError = document.getElementById("error-message");
              displayError.textContent = result.error.message;
            }
          });
      },
      /* Funcion para guardar la informacion de las subscripciones dentro del Store */
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

      setUsername: (username) => {
        setStore({ username: username });
      },
      setUser_id: (id) => {
        setStore({ user_id: id });
      },
      setSubscription_id: (id) => {
        setStore({ subscription_id: id });
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
