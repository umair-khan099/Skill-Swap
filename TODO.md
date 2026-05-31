# TODO - Backend TS Migration

- [ ] Update IUserRepository to a proper TypeScript `interface` with method signatures
- [ ] Fix `UserAuthService.registerUser` to return tokens/user payload and add types
- [ ] Fix `auth.controller.registerUser` to send JSON response
- [ ] Align `user.model.ts` method return types (sync vs async) with the `IUser` interface
- [ ] Verify/adjust typing in validation middleware and shared utils to satisfy `strict: true`
- [ ] Run `cd server && npm run build` and fix any remaining TypeScript errors
