import json
import os

from web3 import Web3
from dotenv import load_dotenv

load_dotenv()

RPC_URL = os.getenv("RPC_URL")
CONTRACT_ADDRESS = os.getenv("CONTRACT_ADDRESS")

# Connect to Ganache
w3 = Web3(Web3.HTTPProvider(RPC_URL))

if not w3.is_connected():
    raise Exception("Could not connect to Ganache")

# Load ABI
with open("abi/ProductRegistry.json", "r") as file:
    contract_json = json.load(file)

abi = contract_json["abi"]

contract = w3.eth.contract(
    address=Web3.to_checksum_address(CONTRACT_ADDRESS),
    abi=abi
)

def verify_product(serial):
    return contract.functions.verifyProduct(serial).call()

def get_product(serial):
    return contract.functions.getProduct(serial).call()