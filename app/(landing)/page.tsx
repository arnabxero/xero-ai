import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const LandingPage = () => {
    return (
        <div>
            <div>This is the ladning page (Unprotected)</div>
            <div>
                <Link href='/sign-in'>
                    <Button variant="default">
                        Sign In
                    </Button>
                </Link>
                <Link href='/sign-up'>
                    <Button variant="outline">
                        Sign Up
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;