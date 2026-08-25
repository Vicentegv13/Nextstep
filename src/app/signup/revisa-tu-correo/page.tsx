import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RevisaTuCorreoPage() {
  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Revisa tu correo</CardTitle>
          <CardDescription>
            Te enviamos un enlace para confirmar tu cuenta. Ábrelo desde tu
            correo para poder iniciar sesión.
          </CardDescription>
        </CardHeader>
        <CardContent />
      </Card>
    </div>
  );
}
