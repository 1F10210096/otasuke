import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from './apiClient';

export function useForm() {
  const [user] = useAtom(userAtom);

  const sendForm = useCallback(
    async (msg: string, name: string,Email:string,Age:number) => {
      if (!user) return;
      await apiClient.form.post({ body: {name ,Email,Age,msg} });
    },
    [user]
  );

  return sendForm;
}
