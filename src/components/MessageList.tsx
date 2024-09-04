import { Message } from "../types/types";

type MessageListProps = {
    messages: Message[];
};

export default function MessageList({ messages }: MessageListProps) {
    return (
        <div className="flex-1 p-4">
            {messages.map((message) => (
                <div
                    key={message.id}
                    className={`flex mb-4 ${
                        message.senderId === 0 ? "justify-end" : "justify-start"
                    }`}
                >
                    <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                            message.senderId === 0
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                        }`}
                    >
                        <p>{message.text}</p>
                        <p className="text-xs mt-1 opacity-70">
                            {message.timestamp}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
