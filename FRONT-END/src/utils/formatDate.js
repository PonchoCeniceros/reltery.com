import axios from "axios";

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-GB").format(new Date(date));
};

export default formatDate;
