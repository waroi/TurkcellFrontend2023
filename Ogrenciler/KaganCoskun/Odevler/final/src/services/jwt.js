import { SignJWT, jwtVerify } from "jose";

export const jwtSecretKey = () => {
    const secretKey = import.meta.env.VITE_JWT_SECRET_KEY;
  
    if (!secretKey) {
      throw new Error("JWT secret key is not available");
    }
  
    return new TextEncoder().encode(secretKey);
  };

export async function generateToken(id,email,role) {
    const token = await new SignJWT({ id, email, role})
      .setProtectedHeader({
        alg: "HS256",
      })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(jwtSecretKey());
  
    return token;
  }

  export async function verifyToken(token) {
    try {
      const decodedToken = token && (await jwtVerify(token, jwtSecretKey()));
      const isExpired = isTokenExpired(decodedToken);
  
      if (isExpired) {
        return false;
      }
      return decodedToken;
    } 
    catch (error) {
      console.error("Error while verifying token:", error);
      return false;
    }
  }
  
  export async function checkPermission(token) {
    try {
      const decodedToken = await jwtVerify(token, jwtSecretKey());
      const userRole = decodedToken.payload.role;
  
      return userRole === "admin";
    } catch (error) {
      console.error("Error while checking permission:", error);
      return false;
    }
  }
  
  function isTokenExpired(decodedToken) {
    const currentTime = Math.floor(Date.now() / 1000);
    if (decodedToken) {
      return decodedToken.payload.exp <= currentTime;
    }
    return true;
  }