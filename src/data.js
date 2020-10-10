import axios from "axios";
import { trackPromise } from "react-promise-tracker";


export const Teachers = () => {
  trackPromise(
    axios
      .get(
        "https://team065a-backend-arch.herokuapp.com/api/v1/teachers")
      .then((response) => {
        console.log("fetched teachers")
      })
      .catch((error) => {
        console.log("error", error);
    }));
}

export const Courses = () => {
  trackPromise(
    axios
      .get(
        "https://team065a-backend-arch.herokuapp.com/api/v1/courses")
      .then((response) => {
        console.log("fetched teachers")
      })
      .catch((error) => {
        console.log("error", error);
    }));
}

export const Posts = () => {
  trackPromise(
    axios
      .get(
        "https://team065a-backend-arch.herokuapp.com/api/v1/posts")
      .then((response) => {
        console.log("fetched teachers")
      })
      .catch((error) => {
        console.log("error", error);
    }));
}
