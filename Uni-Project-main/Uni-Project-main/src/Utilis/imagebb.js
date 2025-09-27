import axios from "axios";
export const uploadImage = async (image) => {
  const form = new FormData();

  form.append("image", image);
  const imageKey = "0c27e104c53ae2df72d57727803c0212";
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${imageKey}`,
    form
  );
  return data;
};
