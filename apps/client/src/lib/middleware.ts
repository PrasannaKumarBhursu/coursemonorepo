import jwt, { JwtPayload } from "jsonwebtoken";
import { SECRET } from "./config";

export const getUser = (token: string, cb: (userId: string | boolean | JwtPayload | undefined) => void) => {
    jwt.verify(token, SECRET, (err, user) => {
        if (err) {
            return cb(false);
        }

        return cb(user);
    });
}