import Post from "../models/PostModel.js";
export const getUsersService = async (req, res) => {
  try {
    const response = await Post.findAll();
    // const response = "tes";
    // res.status(200).json(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

// export default PostService;
