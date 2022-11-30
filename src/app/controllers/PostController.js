import { getUsersService } from "../services/PostService.js";
export const getUsers = async (req, res) => {
  try {
    const response = await getUsersService();
    // const response = "tes";
    let result = {
      success: true,
      data: response,
      message: "Data get successfully",
    };
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};
