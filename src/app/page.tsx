import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Nextep</h1>
      <p className="max-w-md text-lg text-muted-foreground">
        Conectamos empresas con talento especializado de alto nivel.
      </p>
      <div className="flex gap-3">
        <Button render={<Link href="/signup" />} nativeButton={false}>
          Crear cuenta
        </Button>
        <Button
          render={<Link href="/login" />}
          nativeButton={false}
          variant="outline"
        >
          Iniciar sesión
        </Button>
      </div>
    </div>
  );
}
