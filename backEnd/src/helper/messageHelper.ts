import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageHelper {
  private messages = {
    msg_error_not_valid_authorized: "Token not valid authorized",
    msg_error_token_authorized: "No token authorized",
    msg_success_addEmpMsg: "User added Successfully",
    msg_success_loginSuccess: "You have successfully logged in",
    msg_success_logoutSuccess: "Logout successfully",
    msg_error_loginUserWrong: "User not found",
    msg_error_loginPasswordWrong: "Password is not correct",
    msg_error_loginNotActivated: "User Not Activated",
    msg_error_loginIpaddress: "You are not authorised to access this IP address (ipAddress)",
    msg_validation_emptyLogin: "Please provide email or password",
    msg_success_free_trial_activation_insert: "Free trial activated successfully",
    msg_success_free_trial_query_insert: "Free trial activated query added successfully",
  };

  getMessage(key: string): string {
    return this.messages[key] || 'Message key not found';
  }
}
