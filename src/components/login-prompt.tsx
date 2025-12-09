import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogFooter,
    AlertDialogAction,
    AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Link } from "react-router-dom";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";

export function LoginPrompt() {
    const [open, setOpen] = useState(true);

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Save your high scores!</AlertDialogTitle>
                    <AlertDialogDescription>
                        Log in or create an account to track your progress and compete on the leaderboards.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Maybe later</AlertDialogCancel>
                    <div className="flex gap-2">
                        <Link to="/login" onClick={() => setOpen(false)}>
                            <AlertDialogAction className={buttonVariants()}>Sign In</AlertDialogAction>
                        </Link>
                    </div>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
