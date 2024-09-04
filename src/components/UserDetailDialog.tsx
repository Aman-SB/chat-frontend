import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Contact } from '../types/types';

type UserDetailDialogProps = {
  contact: Contact;
};

export default function UserDetailDialog({ contact }: UserDetailDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Avatar>
          <AvatarImage src={contact.avatar} alt={contact.name} />
          <AvatarFallback>
            {contact.name.split(' ').map((n) => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{contact.name}</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          <p>Details about {contact.name}</p>
          {/* Add more user details here */}
        </div>
      </DialogContent>
    </Dialog>
  );
}