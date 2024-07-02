document.addEventListener("DOMContentLoaded", function() {
    showContent('home');
    setActiveButton(document.querySelector('.left button'));
});

function showContent(content) {
    const title = document.getElementById('content-title');
    const contentDiv = document.getElementById('content');
    const buttons = document.querySelectorAll('.left button');

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    if (content === 'home') {
        title.innerText = 'Welcome to the Predictive Health Diagnostics';
        contentDiv.innerHTML = `
            <img src="D:/DSA IN JAVA/PROJECTS/Predictive Health Diagnostics/my_flask_app/static/js/welcome.png" alt="welcome">
            <p>Welcome to our Multiple Disease Prediction Web App!</p>
            <p>Our web application uses advanced machine learning models to predict various diseases including heart disease, Parkinson's disease, diabetes, cancer, and brain tumor.</p>
            <p>By leveraging cutting-edge technologies such as convolutional neural networks (CNNs), support vector machines (SVM), logistic regression, k-nearest neighbors (KNN), random forest, and naive Bayes, we provide accurate predictions based on input data provided by users.</p>
            <p>Whether you're looking to assess your health status or seeking early detection of potential diseases, our app offers a user-friendly interface to upload your data and receive instant predictions.</p>
            <p>Our goal is to empower individuals to take proactive steps towards their health and well-being. Explore our app and discover how technology can support your journey to better health.</p>
            <p>Please select a disease prediction from the sidebar.</p>
        `;
        setActiveButton(buttons[0]);
    } else if (content === 'heart') {
        title.innerText = 'Heart Disease Prediction';
        contentDiv.innerHTML = `
            <form id="heart-form">
                <div class="form-group">
                    <label for="age">Age:</label>
                    <input type="number" id="age" name="age" required>
                </div>
                <div class="form-group">
                    <label for="sex">Sex (1 = male, 0 = female):</label>
                    <input type="number" id="sex" name="sex" required>
                </div>
                <div class="form-group">
                    <label for="cp">Chest Pain Type:</label>
                    <input type="number" id="cp" name="cp" required>
                </div>
                <div class="form-group">
                    <label for="trestbps">Resting Blood Pressure:</label>
                    <input type="number" id="trestbps" name="trestbps" required>
                </div>
                <div class="form-group">
                    <label for="chol">Cholesterol:</label>
                    <input type="number" id="chol" name="chol" required>
                </div>
                <div class="form-group">
                    <label for="fbs">Fasting Blood Sugar (1 = True, 0 = False):</label>
                    <input type="number" id="fbs" name="fbs" required>
                </div>
                <div class="form-group">
                    <label for="restecg">Resting Electrocardiographic Results:</label>
                    <input type="number" id="restecg" name="restecg" required>
                </div>
                <div class="form-group">
                    <label for="thalach">Maximum Heart Rate Achieved:</label>
                    <input type="number" id="thalach" name="thalach" required>
                </div>
                <div class="form-group">
                    <label for="exang">Exercise Induced Angina (1 = yes, 0 = no):</label>
                    <input type="number" id="exang" name="exang" required>
                </div>
                <div class="form-group">
                    <label for="oldpeak">ST Depression Induced By Exercise:</label>
                    <input type="number" id="oldpeak" name="oldpeak" step="any" required>
                </div>
                <div class="form-group">
                    <label for="slope">Slope of The Peak Exercise ST Segment:</label>
                    <input type="number" id="slope" name="slope" required>
                </div>
                <div class="form-group">
                    <label for="ca">Number of Major Vessels (0-3):</label>
                    <input type="number" id="ca" name="ca" required>
                </div>
                <div class="form-group">
                    <label for="thal">Thalassemia (1 = Normal; 2 = Fixed Defect; 3 = Reversible Defect):</label>
                    <input type="number" id="thal" name="thal" required>
                </div>
                <div class="submit-container">
                    <button type="submit">Predict</button>
                </div>
            </form>
            <div id="prediction-result"></div>
        `;
        setActiveButton(buttons[1]);

        document.getElementById('heart-form').addEventListener('submit', function(event) {
            event.preventDefault();
            handleFormSubmit('heart-form', '/predict_heart');
        });
    } else if (content === 'diabetes') {
        title.innerText = 'Diabetes Prediction';
        contentDiv.innerHTML = `
            <form id="diabetes-form">
                <div class="form-group">
                    <label for="pregnancies">Pregnancies:</label>
                    <input type="number" id="pregnancies" name="pregnancies" required>
                </div>
                <div class="form-group">
                    <label for="glucose">Glucose:</label>
                    <input type="number" id="glucose" name="glucose" required>
                </div>
                <div class="form-group">
                    <label for="bloodPressure">Blood Pressure:</label>
                    <input type="number" id="bloodPressure" name="bloodPressure" required>
                </div>
                <div class="form-group">
                    <label for="skinThickness">Skin Thickness:</label>
                    <input type="number" id="skinThickness" name="skinThickness" required>
                </div>
                <div class="form-group">
                    <label for="insulin">Insulin:</label>
                    <input type="number" id="insulin" name="insulin" required>
                </div>
                <div class="form-group">
                    <label for="bmi">BMI:</label>
                    <input type="number" id="bmi" name="bmi" step="any" required>
                </div>
                <div class="form-group">
                    <label for="diabetesPedigreeFunction">Diabetes Pedigree Function:</label>
                    <input type="number" id="diabetesPedigreeFunction" name="diabetesPedigreeFunction" step="any" required>
                </div>
                <div class="form-group">
                    <label for="age">Age:</label>
                    <input type="number" id="age" name="age" required>
                </div>
                <div class="submit-container">
                    <button type="submit">Predict</button>
                </div>
            </form>
            <div id="prediction-result"></div>
        `;
        setActiveButton(buttons[2]);

        document.getElementById('diabetes-form').addEventListener('submit', function(event) {
            event.preventDefault();
            handleFormSubmit('diabetes-form', '/predict_diabetes');
        });
    } else if (content === 'parkinsons') {
        title.innerText = "Parkinson's Disease Prediction";
        contentDiv.innerHTML = `
            <form id="parkinson-form">
            <div class="form-group">
                <label for="mdvp-fo">MDVP: Fo (Hz):</label>
                <input type="number" id="mdvp-fo" name="mdvp-fo" step="any"  required>
            </div>
            <div class="form-group">
                <label for="mdvp-fhi">MDVP: Fhi (Hz):</label>
                <input type="number" id="mdvp-fhi" name="mdvp-fhi" step="any" required>
            </div>
            <div class="form-group">
                <label for="mdvp-flo">MDVP: Flo (Hz):</label>
                <input type="number" id="mdvp-flo" name="mdvp-flo" step="any" required>
            </div>
            <div class="form-group">
                <label for="mdvp-jitter">MDVP: Jitter (%):</label>
                <input type="number" id="mdvp-jitter" name="mdvp-jitter" step="any" required>
            </div>
            <div class="form-group">
                <label for="mdvp-jitter-abs">MDVP: Jitter (Abs):</label>
                <input type="number" id="mdvp-jitter-abs" name="mdvp-jitter-abs" step="any" required>
            </div>
            <div class="form-group">
                <label for="mdvp-rap">MDVP: RAP:</label>
                <input type="number" id="mdvp-rap" name="mdvp-rap" step="any" required>
            </div>
            <div class="form-group">
                <label for="mdvp-ppq">MDVP: PPQ:</label>
                <input type="number" id="mdvp-ppq" name="mdvp-ppq" step="any" required>
            </div>
            <div class="form-group">
                <label for="jitter-ddp">Jitter: DDP:</label>
                <input type="number" id="jitter-ddp" name="jitter-ddp" step="any" required>
            </div>
            <div class="form-group">
                <label for="mdvp-shimmer">MDVP: Shimmer:</label>
                <input type="number" id="mdvp-shimmer" name="mdvp-shimmer" step="any" required>
            </div>
            <div class="form-group">
                <label for="mdvp-shimmer-db">MDVP: Shimmer (dB):</label>
                <input type="number" id="mdvp-shimmer-db" name="mdvp-shimmer-db" step="any" required>
            </div>
            <div class="form-group">
                <label for="shimmer-apq3">Shimmer: APQ3:</label>
                <input type="number" id="shimmer-apq3" name="shimmer-apq3" step="any" required>
            </div>
            <div class="form-group">
                <label for="shimmer-apq5">Shimmer: APQ5:</label>
                <input type="number" id="shimmer-apq5" name="shimmer-apq5" step="any" required>
            </div>
            <div class="form-group">
                <label for="mdvp-apq">MDVP: APQ:</label>
                <input type="number" id="mdvp-apq" name="mdvp-apq" step="any" required>
            </div>
            <div class="form-group">
                <label for="shimmer-dda">Shimmer: DDA:</label>
                <input type="number" id="shimmer-dda" name="shimmer-dda" step="any" required>
            </div>
            <div class="form-group">
                <label for="nhr">NHR:</label>
                <input type="number" id="nhr" name="nhr" step="any" required>
            </div>
            <div class="form-group">
                <label for="hnr">HNR:</label>
                <input type="number" id="hnr" name="hnr" step="any" required>
            </div>
            <div class="form-group">
                <label for="rpde">RPDE:</label>
                <input type="number" id="rpde" name="rpde" step="any" required>
            </div>
            <div class="form-group">
                <label for="dfa">DFA:</label>
                <input type="number" id="dfa" name="dfa" step="any" required>
            </div>
            <div class="form-group">
                <label for="spread1">Spread1:</label>
                <input type="number" id="spread1" name="spread1" step="any" required>
            </div>
            <div class="form-group">
                <label for="spread2">Spread2:</label>
                <input type="number" id="spread2" name="spread2" step="any" required>
            </div>
            <div class="form-group">
                <label for="d2">D2:</label>
                <input type="number" id="d2" name="d2" step="any" required>
            </div>
            <div class="form-group">
                <label for="ppe">PPE:</label>
                <input type="number" id="ppe" name="ppe" step="any" required>
            </div>
            <div class="submit-container">
                <button type="submit">Predict</button>
            </div>
        </form>
        <div id="prediction-result"></div>
        `;
        setActiveButton(buttons[3]);

        
        document.getElementById('parkinson-form').addEventListener('submit', function(event) {
            event.preventDefault();
            handleParkinsonSubmit('parkinson-form', '/predict_parkinson');
        });
          
    }
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.left button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

async function handleFormSubmit(formId, endpoint) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    const jsonData = JSON.stringify(Object.fromEntries(formData));

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const result = await response.json();
        displayPrediction(result);
    } catch (error) {
        console.error('Error:', error);
        displayError('Failed to predict. Please try again later.');
    }
}

function displayPrediction(result) {
    const resultDiv = document.getElementById('prediction-result');
    resultDiv.innerHTML = `<p>Prediction Result: ${result.result}</p>`;
}

function displayError(message) {
    const resultDiv = document.getElementById('prediction-result');
    resultDiv.innerHTML = `<p>Error: ${message}</p>`;
}
function handleParkinsonSubmit(formId, endpoint) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);

    fetch(endpoint, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('prediction-result');
        resultDiv.innerHTML = `<p>${data.result}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
        const resultDiv = document.getElementById('prediction-result');
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}
