import qrcode
import os

def generate_qr(serial_number):
    folder = "qr_codes"
    os.makedirs(folder, exist_ok=True)

    qr = qrcode.make(serial_number)

    file_name = f"qr_{serial_number}.png"

    file_path = os.path.join(folder, file_name)

    qr.save(file_path)

    return file_path


if __name__ == "__main__":
    qr_path = generate_qr("CERT12345")
    print("QR created at:", qr_path)