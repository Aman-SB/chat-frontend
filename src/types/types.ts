export type Contact = {
    id: number;
    name: string;
    avatar: string;
    lastMessage: string;
    lastMessageTime: string;
  };
  
  export type Message = {
    id: number;
    senderId: number;
    text: string;
    timestamp: string;
  };