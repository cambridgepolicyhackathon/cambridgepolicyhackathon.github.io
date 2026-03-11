import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Team() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/about");
  }, [router]);

  return null;
}
