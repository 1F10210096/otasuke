import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from './apiClient';

export function useSendMsgCustom() {
  const [user] = useAtom(userAtom);

  const sendMsgCustom = useCallback(
    async (chara: string, msg: string, roomId: string) => {
      if (!user) return;
      const message = await apiClient.sendMsgCustom.post({ body: { chara, msg, roomId } });
      return message;
    },
    [user]
  );

  return sendMsgCustom;
}

export function useCustomName() {
  const [user] = useAtom(userAtom);

  const sendCustomName = useCallback(
    async (charaName: string) => {
      if (!user) return;
      const message = await apiClient.sendCharaName.post({ body: { charaName } });
      return message;
    },
    [user]
  );

  return sendCustomName;
}
