import React from 'react';
import useAuthStore from '@/stores/authStores';
import { Button } from '@/components/ui/button';

const LogoutButton: React.FC = () => {
    const logout = useAuthStore((state) => state.logout);

    const handleLogout = async () => {
        try {
            await logout();
            // Redirect or show a message if needed
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <Button
            onClick={handleLogout}
            className="text-white px-4 py-2 rounded"
            variant="destructive"
        >
            Logout
        </Button>
    );
};

export default LogoutButton;
