import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { MutationResolvers } from '../generated/graphqlgen';

export const Mutation: MutationResolvers.Type = {
    ...MutationResolvers.defaultResolvers,
    async signup(parent, args, ctx, info) {
        const {name, email: rawEmail, password: rawPassword} = args;
        const email = rawEmail.toLowerCase();
        const password = await bcrypt.hash(rawPassword, 33);
        const user = await ctx.db.createUser({name, email, password});
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET!);

        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
        });

        return user;
    },
    async signin(parent, {email, password}, ctx, info) {
        const user = await ctx.db.user({ email } );
        if (!user) {
            // TODO set 404
            throw new Error(`No such user found for email ${email}`);
        }
        // 2. Check if their password is correct
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            // TODO set more meaningful information
            throw new Error('Invalid Password!');
        }
        // 3. generate the JWT Token
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET!);
        // 4. Set the cookie with the token
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 14,
        });
        // 5. Return the user
        return user;
    },
};
