import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, render_template
import pickle
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)

# Load the trained models and scalers
with open('diabetes_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)
classifier, scalar = model

with open('heart_model.pkl', 'rb') as model_file:
    heart_model = pickle.load(model_file)
model_heart = heart_model

with open('parkinson_model.pkl', 'rb') as file:
    model_p, scaler = pickle.load(file)

# Routes for rendering templates
@app.route('/')
def index():
    return render_template('main.html')

# Prediction route for heart disease
@app.route('/predict_heart', methods=['POST'])
def predict_heart():
    try:
        data = request.json
        input_data = np.asarray(list(data.values()), dtype=np.float64)
        input_data_reshaped = input_data.reshape(1, -1)
        
        prediction = model_heart.predict(input_data_reshaped)
        
        if prediction[0] == 0:
            result = "Healthy - No heart disease detected"
        else:
            result = "Heart Disease - Please consult a doctor"
        
        return jsonify({'result': result})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    
# Prediction route for diabetes
@app.route('/predict_diabetes', methods=['POST'])
def predict_diabetes():
    try:
        data = request.json
        input_data = np.asarray(list(data.values()), dtype=np.float64)
        input_data_reshaped = input_data.reshape(1, -1)
        std_data = scalar.transform(input_data_reshaped)
        prediction = classifier.predict(std_data)
        
        if prediction[0] == 0:
            result = "Non-Diabetic - You are healthy"
        else:
            result = "Diabetic - Please take Precautions"
        
        return jsonify({'result': result})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    
@app.route('/predict_parkinson', methods=['POST'])
def predict_parkinsons():
    try:
        data = request.json
        
        # Extract and preprocess input data
        input_data = np.array(data['input_data']).reshape(1, -1)
        std_data = scaler.transform(input_data)

        # Perform prediction using loaded SVM model
        prediction = model_p.predict(std_data)

        # Define result based on prediction
        if prediction[0] == 0:
            result = "The Person does not have Parkinson's Disease"
        else:
            result = "The Person has Parkinson's Disease"

        return jsonify({'result': result})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
