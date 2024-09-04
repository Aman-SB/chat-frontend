'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Tabs from "@/components/common/Tabs";
import ErrorMessage from "./ErrorMessage";
import Link from 'next/link';

export default function AuthCard({ error }: { error: string }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Welcome to ChatApp</CardTitle>
        <p className="text-center">Login or create an account to start chatting</p>
      </CardHeader>
      <CardContent>
        <Tabs />
      </CardContent>
      {error && <ErrorMessage error={error} />}
      <CardFooter>
        <p className="text-sm text-center w-full">
          By using ChatApp, you agree to our{' '}
          <Link href="/terms" className="text-blue-500 hover:underline">Terms of Service</Link> 
          and{' '}
          <Link href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>
        </p>
      </CardFooter>
    </Card>
  );
}
