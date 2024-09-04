import { Button } from "@/components/ui/button";
import { Phone, Video } from "lucide-react";
import { Contact } from '../types/types';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserDetailDialog from './UserDetailDialog';

type ChatHeaderProps = {
  contact: Contact;
};

export default function ChatHeader({ contact }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={contact.avatar} alt={contact.name} />
          <AvatarFallback>
            {contact.name.split(' ').map((n) => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <h2 className="font-semibold">{contact.name}</h2>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost" size="icon" aria-label="Voice call">
          <Phone className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Video call">
          <Video className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}