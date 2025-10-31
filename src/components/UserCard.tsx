import { useState } from "react";

interface UserData {
  nombre: string;
  email: string;
  edad?: number;
}

export default function UserCard() {
  const [user, setUser] = useState<UserData | null>(null);

  const handleLogin = () => {
    setUser({
      nombre: "Jeison Redondo",
      email: "jeison@fastport.com",
      edad: 22,
    });
  };

  return (
    <div>
      {user ? (
        <p>
          Bienvenido, {user.nombre}! <br />
          Correo: {user.email}
        </p>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
  );
}
