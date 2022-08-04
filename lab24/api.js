export const getUser = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "signin.html";
  }

  try {
    const { data } = await axios.get(
      "https://todo-api-with-auth.herokuapp.com/api/auth/user",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (err) {
    localStorage.removeItem("token");
    console.log(err);
    alert("Invalid token! Redirect to signin page!");

    window.location.href = "signin.html";
  }
};

export const login = (user) => {
  let headers = {
    "Content-Type": "application/json",
  };
  let bodyContent = JSON.stringify(user);

  let reqOptions = {
    url: "https://todo-api-with-auth.herokuapp.com/api/auth/signin",
    method: "POST",
    headers,
    data: bodyContent,
  };

  return axios.request(reqOptions);
};
