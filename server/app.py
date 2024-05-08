from flask import Flask

app = Flask(__name__)

@app.route('/recipes', methods=['GET'])
def get_recipes():
    pass

if __name__ == '__main__':
    app.run(debug=True)