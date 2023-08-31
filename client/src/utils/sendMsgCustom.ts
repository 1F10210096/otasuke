import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from './apiClient';

export function useSendMsgCustom() {
  const [user] = useAtom(userAtom);

  const sendMsgCustom = useCallback(
    async (msg: string, roomId: string) => {
      if (!user) return;
      const message = await apiClient.sendMsgCustom.post({ body: { msg, roomId } });
      return message;
    },
    [user]
  );

  return sendMsgCustom;
}
