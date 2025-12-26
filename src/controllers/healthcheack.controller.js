import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/asynchandler.js";
// const HealthCheack = (req, res) => {
//   try {
//     res.status(200).json(new ApiResponse(200, { massage: "app is healthy" }));
//   } catch (error) {}
// };

const HealthCheack = asyncHandler(async (rwq, res) => {
  res.status(200).json(new ApiResponse(200, { massage: "app is healthy" }));
});

export default HealthCheack;
