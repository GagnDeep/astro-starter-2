---
title: Document Encryption
description: Understanding how documents are secured and encrypted.
seo:
  page_description: "Learn about document encryption standards and how to protect sensitive files."
---

# Document Encryption

Document encryption is the process of scrambling the contents of a file so that it can only be read by someone with the correct decryption key (usually a password).

## How it Works

Modern documents (like PDF and DOCX) use advanced encryption standards, typically AES (Advanced Encryption Standard) with 128-bit or 256-bit keys.

When a document is encrypted:

1. The software generates an encryption key.
2. The key is used to transform the document data into unreadable ciphertext.
3. To open the document, the user must provide the password, which unlocks the key and decrypts the data.

## Best Practices

- **Use Strong Passwords:** A weak password renders encryption useless.
- **Don't Send Passwords with Documents:** Never email the password in the same message as the encrypted file.
- **Consider Zero-Footprint Viewing:** If you must share sensitive data, consider a [Zero Footprint Viewer](/reference/security/zero-footprint/) rather than emailing encrypted files.
