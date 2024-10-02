import { AccessToken, Role } from "@huddle01/server-sdk/auth";
 
export const dynamic = "force-dynamic";
 
export async function GET() {
//   const { searchParams } = new URL(request.url);
 
  const roomId = ""
 
  if (!roomId) {
    return new Response("Missing roomId", { status: 400 });
  }
 
  const accessToken = new AccessToken({
    apiKey: "",
    roomId: roomId as string,
    role: Role.HOST,
    permissions: {
      admin: true,
      canConsume: true,
      canProduce: true,
      canProduceSources: {
        cam: true,
        mic: true,
        screen: true,
      },
      canRecvData: true,
      canSendData: true,
      canUpdateMetadata: true,
    }
  });
 
  const token = await accessToken.toJwt();
 
  return new Response(token, { status: 200 });
}

// eyJhbGciOiJSUzI1NiJ9.eyJyb29tSWQiOiJnY28tbnJjaS1rcWQiLCJtdXRlT25FbnRyeSI6ZmFsc2UsInZpZGVvT25FbnRyeSI6ZmFsc2UsInJvb21UeXBlIjoiVklERU8iLCJyb2xlIjoiaG9zdCIsInBlcm1pc3Npb25zIjp7ImFkbWluIjp0cnVlLCJjYW5Db25zdW1lIjp0cnVlLCJjYW5Qcm9kdWNlIjp0cnVlLCJjYW5Qcm9kdWNlU291cmNlcyI6eyJjYW0iOnRydWUsIm1pYyI6dHJ1ZSwic2NyZWVuIjp0cnVlfSwiY2FuU2VuZERhdGEiOnRydWUsImNhblJlY3ZEYXRhIjp0cnVlLCJjYW5VcGRhdGVNZXRhZGF0YSI6dHJ1ZX0sInBlZXJJZCI6InBlZXJJZC1IUXg4aGZtWWFHRUNRMFJDd05vS0MiLCJwdXJwb3NlIjoiU0RLIiwicm9vbUluZm8iOnsicm9vbUxvY2tlZCI6ZmFsc2UsIm11dGVPbkVudHJ5IjpmYWxzZSwicm9vbVR5cGUiOiJWSURFTyIsInZpZGVvT25FbnRyeSI6ZmFsc2V9LCJpYXQiOjE3MjY3NDIxNjAsImlzcyI6Ikh1ZGRsZTAxIiwiZXhwIjoxNzI2NzUyOTYwfQ.YfSoqxuotsdqu4lB6JRnXRmWKT--QX6D4pGpoMH00g4bUu5_DZRiWY_jwttUVdX5uncFz8TUzSBJRtTsPaI3nGbPjhlsNCK2A78c-SMY22kOKybnfir4kSTOOMeT0rt94MypPI9q6UNrSMe8qrcFdqjfMW1HGiV_9GSbusv2k6yc7XAov-lI8evGL1nFyXZ_gJwdlGjKb-V6DFsZ6YI6YFuTGft0SjzQGl6tmcYQLGu_vHJH253vFWMfOSiLAJJUIKm8nYjX2rdmcN8jY7O6ugsssQ4SFW76Gs3CDEJKe5npH3UrxdIA8yLfm9VKcaoA8w4145fnZg5QYs8uD7KyBnLGoYADtq0Z8Dlb0V2mv0cH76pDcU7dEWIdAZbdY8Fs-LosLaFbrzqV6dWbzNOQ8dZYT25Y9Xc3EQK0bYQUNQH4tqBG3gcZmctT1xFn2f5fMXphMgt7NGf8XobgyhxMesTd0evZ7lzyd-zLCCHLWzd4yCWbrdIoia-hYTHBYWlHY33AP3Yk2KRZfVtKWw00um8iRZCP7HqRwJmpJYspDcIbXzHmzS8nbJprK5KI-hf5ikn55JIUPIPeB6ITDALnApUE_8PdbsU3h0ELdFHfj6OKLqDjIfyMJQ8G7yIb_VvRAZYSUd9gh5FGRbkzg-afVZmMqImk-e9gPChHKe8NQ48