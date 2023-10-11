import crypto from "crypto"

export const initVector = () => {
  const iv =  crypto.randomBytes(16)
  
  const encoded = iv.toString("base64")

  return encoded
}

export const aes256Encrypt = (key: Buffer, iv: Buffer, plainText: string) => {
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv)
  let encrypted = cipher.update(plainText, "utf-8", "hex")

  encrypted += cipher.final("hex")

  return encrypted
}

export const aes256Decrypt = (key: Buffer, iv: Buffer, cipherText: string) => {
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv)

  let decrypted = decipher.update(cipherText, "hex", "utf-8")

  decrypted += decipher.final("utf-8")

  return decrypted
}