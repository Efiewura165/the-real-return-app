import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] items-center justify-center py-24">
      <div className="max-w-xl rounded-[2rem] border border-border/70 bg-background/70 p-10 text-center shadow-[0_20px_60px_rgba(8,15,12,0.12)]">
        <Heading as="h1" className="text-4xl sm:text-5xl">
          The path is not ready yet.
        </Heading>
        <Text className="mt-4 text-lg">
          This route has not been built yet. The foundation is in place for the next stage.
        </Text>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/">Return home</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
