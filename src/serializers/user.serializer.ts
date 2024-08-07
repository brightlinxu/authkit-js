import { User, UserRaw } from "../interfaces";

export const deserializeUser = (user: UserRaw): User => ({
  object: user.object,
  id: user.id,
  email: user.email,
  emailVerified: user.email_verified,
  firstName: user.first_name,
  profilePictureUrl: user.profile_picture_url,
  lastName: user.last_name,
  createdAt: user.created_at,
  updatedAt: user.updated_at,
});
