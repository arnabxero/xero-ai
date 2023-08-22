"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react';


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { MessageSquare } from 'lucide-react'

export default function Support() {
    const { user } = useUser();



    if (!user) {
        return <p>Loading...</p>;
    } else {
        console.log(user);
    }


    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');
    const [timestamp, setTimestamp] = useState('');
    const [status, setStatus] = useState('unseen');

    const [fetchedData, setFetchedData] = useState([] as any[]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/support/create', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    message,
                    timestamp,
                    status
                })
            });

            if (response.ok) {
                console.log('Successfully submitted');
                await handleFetchData();
            } else {
                console.log('Failed to submit');
            }
        } catch (e) {
            console.error(e);
        }
    };

    const handleFetchData = async () => {
        try {
            const response = await fetch('/api/support/get'); // Update the API endpoint

            if (response.ok) {
                const data = await response.json();
                setFetchedData(data); // Update the state with fetched data
                console.log(data); //
            } else {
                console.log('Failed to fetch data');
                alert('Failed to fetch data');
            }
        } catch (e) {
            console.error(e);
            alert(e);
        }
    };

    useEffect(() => {
        handleFetchData();
    }, []);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="fixed bottom-6 right-6 p-4 z-50">
                    <MessageSquare />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        <div>
                            Hello World
                            <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
                        </div>
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <div className="mb-2 flex w-full items-center space-x-2">
                        <Input type="text" placeholder="Message" value={message} onChange={handleInputChange} />
                        <Button type="submit" onClick={handleSubmit}>Submit</Button>
                    </div>
                    <ScrollArea className="h-[200px] flex w-full rounded-md border p-2 items-center">
                        {fetchedData.slice().reverse().map((document, index) => (
                            <Card className="p-2 m-2 hover:shadow-md transition cursor-pointer" key={index}>
                                {document.message}
                            </Card>
                        ))}
                    </ScrollArea>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}