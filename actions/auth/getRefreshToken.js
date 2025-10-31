import { cookies } from 'next/headers'
 
export default async function getRefreshToken() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get('refresh_token')?.value;
  return refreshToken;
}