// import { useCallback } from 'react';
// import { useAtom } from 'jotai';
// import { userAtom } from 'src/atoms/user';
// import { apiClient } from './apiClient';

// export function useSendMsg() {
//   const [user] = useAtom(userAtom);

//   const sendMsg = useCallback(
//     async (msg: string) => {
//       if (!user) return;
//       const message = await apiClient.sendMsg.post({ body: { msg } });
//       return message;
//     },
//     [user]
//   );

//   return sendMsg;
// }