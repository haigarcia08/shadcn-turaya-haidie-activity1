"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {useThanksDialogStore} from "@/store/thanks-dialog-store";

export default function ThanksDialog() {
    const storeThanksDialog = useThanksDialogStore();
    return (
        <Dialog open={storeThanksDialog.open} onOpenChange={storeThanksDialog.toggleOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl">Thank you for payment 😎!</DialogTitle>
                </DialogHeader>
                <div>
                    <p className="mb-10 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Your payment was completed successfully. For more information about this transaction,
                        please see the message sent to your email address.
                    </p>
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold mb-4">What&#39;s next?</h1>
                            <p>
                                Request Github access to access the source code of the projects (if you don&#39;t
                                do this, we will do it for you in a few hours).
                            </p>
                            <p>
                                The email address you used when purchasing is considered your Github email
                                address. If you use a different email on Github, you will need to create a
                                request.
                            </p>
                            <Button className="w-full bg-green-600" onClick={() => storeThanksDialog.toggleOpen()}
                                    asChild>
                                <Link href={`/github-access`}>Get Github Access</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
