import { cookies } from 'next/headers'
 
export default async function storeRefreshToken(token) {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.set('refresh_token', token);
  return refreshToken;
}