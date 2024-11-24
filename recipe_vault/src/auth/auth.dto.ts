import { UserDTO } from "src/users/users.dto";

export class AuthResponseDTO{
    token: string;
    expiresIn: number;
}