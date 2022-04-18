const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      username: "",
      user_id: null,
      codigo_stripe: "",
    },
    actions: {
      pay: (user_id) => {
        let stripe = Stripe(process.env.React_APP_STRIPE_KEY);
        stripe
          .redirectToCheckout({
            lineItems: [
              { price: "price_1Kmd3IDjIaCZ8ivK9L7ZbYPQ", quantity: 1 },
            ],
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
