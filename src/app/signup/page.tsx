import Link from "next/link";
import { signup } from "@/app/auth/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default async function SignupPage({
  searchParams,
}: PageProps<"/signup">) {
  const { error } = await searchParams;

  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Crea tu cuenta</CardTitle>
          <CardDescription>
            Únete a Nextep como candidato o empresa
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={signup} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Quiero registrarme como</Label>
              <RadioGroup
                name="role"
                defaultValue="candidato"
                className="flex gap-4"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="candidato" id="role-candidato" />
                  <Label htmlFor="role-candidato" className="font-normal">
                    Candidato
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="empresa" id="role-empresa" />
                  <Label htmlFor="role-empresa" className="font-normal">
                    Empresa
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="full_name">Nombre completo</Label>
              <Input id="full_name" name="full_name" type="text" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Correo</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                name="password"
                type="password"
                minLength={6}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="confirm_password">Confirmar contraseña</Label>
              <Input
                id="confirm_password"
                name="confirm_password"
                type="password"
                minLength={6}
                required
              />
            </div>
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
            <Button type="submit" className="w-full">
              Crear cuenta
            </Button>
          </form>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            ¿Ya tienes cuenta?{" "}
            <Link href="/login" className="underline underline-offset-4">
              Inicia sesión
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
