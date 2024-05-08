import os
from dotenv import load_dotenv
from flask import Flask

app = Flask(__name__)
load_dotenv()

API_KEY = os.getenv('API_KEY')

@app.route('/recipes', methods=['GET'])
def get_recipes():
    return 'Get all recipes'

if __name__ == '__main__':
    app.run(debug=True)