import jwt from 'jsonwebtoken';
const secretKey = process.env.TOKEN_SECRET as string;

function jwtVerify(token: string): void {
	try {
        jwt.verify(token, secretKey);
	} catch (err) {
		throw new Error('Authentication Failed!');
	}
}

function jwtSign(userId: number) {
    return jwt.sign({id: userId}, secretKey);
}

export {jwtVerify, jwtSign}
