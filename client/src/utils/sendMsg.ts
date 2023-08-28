import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from './apiClient';

export function useSendMsg() {
  const [user] = useAtom(userAtom);

  const sendMsg = useCallback(
    async (msg: string, roomId: string) => {
      if (!user) return;
      const message = await apiClient.sendMsg.post({ body: { msg, roomId } });
      return message;
    },
    [user]
  );

  return sendMsg;
}
