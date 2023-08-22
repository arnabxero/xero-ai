This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.






-------------------
clerk auth user object :


// //////////////////////*
    // function userobject of clerk {
    // {
    //     "pathRoot": "/me",
    //         "id": "user_2UKKNaauKRqnP1KzG7I2tlXyJNQ",
    //             "externalId": null,
    //                 "username": null,
    //                     "emailAddresses": [
    //                         {
    //                             "pathRoot": "/me/email_addresses",
    //                             "emailAddress": "arnab.xero@gmail.com",
    //                             "linkedTo": [
    //                                 {
    //                                     "pathRoot": "",
    //                                     "id": "idn_2UKKNODHiCqTibEGX5n35DPTj6i",
    //                                     "type": "oauth_google"
    //                                 }
    //                             ],
    //                             "id": "idn_2UKKNMOt6I1Xr4B4lUm2mzSOptE",
    //                             "verification": {
    //                                 "pathRoot": "",
    //                                 "status": "verified",
    //                                 "strategy": "from_oauth_google",
    //                                 "nonce": null,
    //                                 "externalVerificationRedirectURL": null,
    //                                 "attempts": null,
    //                                 "expireAt": "2023-08-22T11:57:44.820Z",
    //                                 "error": null
    //                             }
    //                         }
    //                     ],
    //                         "phoneNumbers": [],
    //                             "web3Wallets": [],
    //                                 "externalAccounts": [
    //                                     {
    //                                         "pathRoot": "/me/external_accounts",
    //                                         "providerUserId": "113155376451907623723",
    //                                         "emailAddress": "arnab.xero@gmail.com",
    //                                         "approvedScopes": "email https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid profile",
    //                                         "firstName": "Iftekhar",
    //                                         "lastName": "Arnab",
    //                                         "avatarUrl": "https://lh3.googleusercontent.com/a/AAcHTtc1pqSvHK6OgzkELUvgkkwE2mvLpVLfnB5FFtqzdDB9eA=s1000-c",
    //                                         "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQWNIVHRjMXBxU3ZISzZPZ3prRUxVdmdra3dFMm12THBWTGZuQjVGRnRxemREQjllQT1zMTAwMC1jIiwicyI6IlcvTmVoaWtWanZnbXJZaVh4TkR3d1lKVUgwWDVzbm1QSTdIMEtCSkl1TzAifQ",
    //                                         "username": null,
    //                                         "publicMetadata": {},
    //                                         "label": null,
    //                                         "verification": {
    //                                             "pathRoot": "",
    //                                             "status": "verified",
    //                                             "strategy": "oauth_google",
    //                                             "nonce": null,
    //                                             "externalVerificationRedirectURL": null,
    //                                             "attempts": null,
    //                                             "expireAt": "2023-08-22T05:49:45.631Z",
    //                                             "error": null
    //                                         },
    //                                         "id": "eac_2UKKNN25x4mxSYO1TMgT7LfFE27",
    //                                         "identificationId": "idn_2UKKNODHiCqTibEGX5n35DPTj6i",
    //                                         "provider": "google"
    //                                     }
    //                                 ],
    //                                     "samlAccounts": [],
    //                                         "organizationMemberships": [],
    //                                             "passwordEnabled": false,
    //                                                 "firstName": "Iftekhar",
    //                                                     "lastName": "Arnab",
    //                                                         "fullName": "Iftekhar Arnab",
    //                                                             "primaryEmailAddressId": "idn_2UKKNMOt6I1Xr4B4lUm2mzSOptE",
    //                                                                 "primaryEmailAddress": {
    //         "pathRoot": "/me/email_addresses",
    //             "emailAddress": "arnab.xero@gmail.com",
    //                 "linkedTo": [
    //                     {
    //                         "pathRoot": "",
    //                         "id": "idn_2UKKNODHiCqTibEGX5n35DPTj6i",
    //                         "type": "oauth_google"
    //                     }
    //                 ],
    //                     "id": "idn_2UKKNMOt6I1Xr4B4lUm2mzSOptE",
    //                         "verification": {
    //             "pathRoot": "",
    //                 "status": "verified",
    //                     "strategy": "from_oauth_google",
    //                         "nonce": null,
    //                             "externalVerificationRedirectURL": null,
    //                                 "attempts": null,
    //                                     "expireAt": "2023-08-22T11:57:44.820Z",
    //                                         "error": null
    //         }
    //     },
    //     "primaryPhoneNumberId": null,
    //         "primaryPhoneNumber": null,
    //             "primaryWeb3WalletId": null,
    //                 "primaryWeb3Wallet": null,
    //                     "profileImageUrl": "https://images.clerk.dev/oauth_google/img_2UKKNbXft1p88I08iMOwsvbuLk8.jpeg",
    //                         "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yVUtLTmJYZnQxcDg4STA4aU1Pd3N2YnVMazguanBlZyJ9",
    //                             "twoFactorEnabled": false,
    //                                 "totpEnabled": false,
    //                                     "backupCodeEnabled": false,
    //                                         "publicMetadata": { },
    //     "unsafeMetadata": { },
    //     "createOrganizationEnabled": true,
    //         "deleteSelfEnabled": true,
    //             "lastSignInAt": "2023-08-22T11:53:22.430Z",
    //                 "updatedAt": "2023-08-22T11:53:22.470Z",
    //                     "createdAt": "2023-08-22T05:39:52.756Z",
    //                         "cachedSessionsWithActivities": null
    // } 
    // }
    // */////////////////////////////