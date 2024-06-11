from flask import Flask

# Initialize the Flask application
app = Flask(__name__)

# Define a route for the root URL ("/") and associate it with the hello() function
@app.route("/")
def hello():
    return "Hello World from Python Flask Web Framework!"

# Define a route for the "/about-us" URL and associate it with the about_us() function
@app.route("/about-us")
def about_us():
    return "We are here to serve you!"

# Define a route for "/hello/<string:my_name>/" to capture a string parameter and greet the user
@app.route("/hello/<string:my_name>/")
def personalized_hello(my_name):
    return "Hello %s, greetings from Flask Framework!" % my_name

# Run the application
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
