<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Sally</span>
    </div>

    <!-- Messages -->
    <ChatMessages :messages="messages" />

    <!-- MessageBox -->
    <MessageBox @emit-message="onMessage($event)" />
  </div>
</template>

<script lang="ts" setup>
import ChatMessages from '@/components/chat/ChatMessageComponent.vue';
import MessageBox from '@/components/chat/MessageBoxComponent.vue';
import { useChat } from '@/composables/useChat';

const { messages, onMessage } = useChat();
</script>
