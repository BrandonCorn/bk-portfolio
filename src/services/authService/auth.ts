import { scrypt, randomBytes } from 'crypto';
import { Session } from 'next-auth';
import { promisify } from 'util';


const scryptAsync = promisify(scrypt);

export class PasswordManager {
    static async toHash(password: string) {
        const salt = randomBytes(8).toString('hex');
        const buffer = await scryptAsync(password, salt, 64) as Buffer;

        return `${buffer.toString('hex')}.${salt}`
    }

    static async compare(storedPassword: string, supppliedPassword: string) {
        const [hashedPassword, salt] = storedPassword.split('.');
        const buf = (await scryptAsync(supppliedPassword, salt, 64)) as Buffer;

        return buf.toString('hex') === hashedPassword;
    }
}

// export const isAuthenticated = (session: Session) => {
//     if (session.status === 'authenticated') return true;
//     else return false;
// }