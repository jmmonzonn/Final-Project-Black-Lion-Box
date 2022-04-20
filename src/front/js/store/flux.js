const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      username: "",
      user_id: null,
      stripe_id: "",
      suscriptionList: [],
    },
    actions: {
      pay: (user_id, stripe_id) => {
        let stripe = Stripe(process.env.React_APP_STRIPE_KEY);
        stripe
          .redirectToCheckout({
            lineItems: [{ price: stripe_id, quantity: 1 }],
            mode: "subscription",
            successUrl:
              "https://3000-jmmonzonn-finalprojectbl-zeavhkau3qo.ws-eu39b.gitpod.io/success",
            cancelUrl:
              "https://3000-jmmonzonn-finalprojectbl-zeavhkau3qo.ws-eu39b.gitpod.io/cancel",
          })
          .then(function (result) {
            if (result.error) {
              var displayError = document.getElementById("error-message");
              displayError.textContent = result.error.message;
            }
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
