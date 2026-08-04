from flask import Flask, jsonify
from blockchain import verify_product, get_product

app = Flask(__name__)

# Home Route
@app.route("/")
def home():
    return jsonify({
        "message": "Fake Product Detection Backend Running"
    })


# Verify Product
@app.route("/verify/<serial>", methods=["GET"])
def verify(serial):

    exists = verify_product(serial)

    if not exists:
        return jsonify({
            "exists": False,
            "message": "Product not found"
        })

    product = get_product(serial)

    return jsonify({
        "exists": True,
        "serialNumber": product[0],
        "productName": product[1],
        "manufacturer": product[2],
        "batchNumber": product[3]
    })


if __name__ == "__main__":
    app.run(debug=True)