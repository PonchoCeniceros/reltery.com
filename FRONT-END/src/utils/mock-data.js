export const getUsers = (username) => {
  let res;
  switch (username) {
    case "a307718":
      res = {
        id: "user",
        displayName: "James G. Stanley",
        photoUrl:
          "https://i1.wp.com/smk.org.uk/wp-content/uploads/avatar.jpg?fit=300%2C300&ssl=1",
        email: "chandler.bing@email.com",
        token: "TOKENEXAMPLE",
      };
      break;

    default:
      break;
  }

  return res;
};
