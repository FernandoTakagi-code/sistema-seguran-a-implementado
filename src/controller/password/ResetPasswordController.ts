import { Request, Response } from "express";
import { ResetPasswordService } from "../../service/password/ResetPasswordService";

class ResetPasswordController {
  async handle(request: Request, response: Response) {
    const { token, newPassword } = request.body;

    const resetPasswordService = new ResetPasswordService();

    const result = await resetPasswordService.execute(token, newPassword);

    return response.json(result);
  }
}

export { ResetPasswordController };