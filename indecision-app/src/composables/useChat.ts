import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getHerResponse = async () => {
    const resp = await fetch('https://yesno.wtf/api');

    const data = await resp.json();

    return data;
  };

  const onMessage = async (text: string) => {
    if (text.length == 0) return;

    messages.value.push({
      id: new Date().getTime(),
      message: text,
      itsMine: true,
    });

    if (!text.endsWith('?')) return;

    const { answer, image } = await getHerResponse();

    messages.value.push({
      id: new Date().getTime(),
      message: answer,
      itsMine: false,
      image: image,
    });
  };

  return {
    //properties
    messages,

    //methods
    onMessage,
  };
};
