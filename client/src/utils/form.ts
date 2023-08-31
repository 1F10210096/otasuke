import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from './apiClient';

export function useSendMsg() {
  const [user] = useAtom(userAtom);

  const sendForm = useCallback(
    async (msg: string, name: string) => {
      if (!user) return;
      await apiClient.form.post({ body: { msg, name } });
    },
    [user]
  );

  return sendForm;
}
