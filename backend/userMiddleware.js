import { error } from 'console';
import fs from 'fs';

export const userMiddleware = (req, res, next) => {
    try{
        const user = req.body;
        const str = "userName: " + user.name + ", password: " + user.password + ", date: " + new Date().toString() + "\n";
        fs.appendFile('newUser_details.txt', str, error => {
            if (error) {
                console.error('Error writing to file:', error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        });
        next();
    }
    catch (error) {
        console.error('Error writing to file:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
export default userMiddleware;