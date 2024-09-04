import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Contact } from '../types/types';
import UserDetailDialog from '@/components/UserDetailDialog';

type ContactListProps = {
  contacts: Contact[];
  selectedContact: Contact | null;
  setSelectedContact: (contact: Contact) => void;
};

export default function ContactList({ contacts, selectedContact, setSelectedContact }: ContactListProps) {
  return (
    <div className="w-1/3 bg-muted/20 border-r">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Chats</h2>
      </div>
      <ScrollArea className="h-[calc(600px-65px)]">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-muted/50 ${
              selectedContact?.id === contact.id ? 'bg-muted' : ''
            }`}
            onClick={() => setSelectedContact(contact)}
          >
            <UserDetailDialog contact={contact} />
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{contact.name}</p>
              <p className="text-sm text-muted-foreground truncate">
                {contact.lastMessage}
              </p>
            </div>
            <span className="text-xs text-muted-foreground">
              {contact.lastMessageTime}
            </span>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}