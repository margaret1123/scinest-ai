import { Suspense } from "react";
import { RegisterForm } from "./register-form";

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f7fbfb" }}>
        <div style={{ color: "#607477" }}>Loading…</div>
      </main>
    }>
      <RegisterForm />
    </Suspense>
  );
}
