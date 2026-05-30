
"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/page-header";
import CustomLayout from "@/components/layout/layout";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <CustomLayout>
    <div>
      <PageHeader
        title="Something Went Wrong"
        description="We apologize for the inconvenience. An unexpected error occurred."
      />
      <div className="container max-w-screen-md mx-auto py-8 text-center">
        <p className="mb-4 text-lg text-foreground/80">
          You can try to refresh the page or go back to the homepage.
        </p>
        <p className="mb-6 text-sm text-muted-foreground">
          Error details: {error.message}
          {error.digest && ` (Digest: ${error.digest})`}
        </p>
        <div className="flex justify-center gap-4">
          <Button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
            variant="default"
            size="lg"
          >
            Try Again
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/">Go to Homepage</a>
          </Button>
        </div>
      </div>
    </div>
    </CustomLayout>
  );
}
