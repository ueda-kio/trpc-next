// ./lib/get-session.ts
import nextSession from 'next-session';

// ここにセッションの型を記述
export type AppSession = {
  accessDate?: Date;
};

// nextSession()の戻り値型を取得
type NextSessionInstance = ReturnType<typeof nextSession>;
// NextSessionInstanceの引数型を取得
type GetSessionArgs = Parameters<NextSessionInstance>;
// NextSessionInstanceの戻り値Promise<T>からTを取得し、cookieとidのみ取得
type GetSessionReturn = Pick<Awaited<ReturnType<NextSessionInstance>>, 'cookie' | 'id'>;

// getSessionの型を再定義
export const getSession: (...args: GetSessionArgs) => Promise<GetSessionReturn & AppSession> = nextSession();
