import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-green-500">
        Essa é uma rota protegida
      </p>
      <Button>
        CLICK ME
      </Button>
    </div>
  );
}
