import crypto from "crypto"

const intializationVector = Buffer.from("0123456789ABCDEF", "hex")

export const aes256Encrypt = (key: Buffer, plainText: string) => {
  const cipher = crypto.createCipheriv("aes-256-ebc", key, intializationVector)
  let encrypted = cipher.update(plainText, "utf-8", "hex")

  encrypted += cipher.final("hex")

  console.log(encrypted)

  return encrypted
}

export const aes256Decrypt = (key: Buffer, cipherText: string) => {
  const decipher = crypto.createDecipheriv("aes-256-ebc", key, intializationVector)

  let decrypted = decipher.update(cipherText, "hex", "utf-8")

  decrypted += decipher.final("utf-8")

  console.log(decrypted)

  return decrypted
}