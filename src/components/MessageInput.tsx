import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

type MessageInputProps = {
  newMessage: string;
  setNewMessage: (message: string) => void;
  handleSendMessage: (e: React.FormEvent) => void;
};

export default function MessageInput({ newMessage, setNewMessage, handleSendMessage }: MessageInputProps) {
  return (
    <form onSubmit={handleSendMessage} className="p-4 border-t flex gap-2">
      <Input
        placeholder="Type a message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" size="icon" aria-label="Send message">
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
}