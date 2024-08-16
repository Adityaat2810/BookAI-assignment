import React from 'react'

function CodeExample() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg ">
      <h1 className='text-slate-300 text-2xl font-medium pt-10 px-2'>
        Code Examples
      </h1>
      <h1 className='text-xl font-semibold text-slate-400 mt-8 pb-2 px-2'>
        Python
      </h1>
      <div className="border border-slate-700 p-4 rounded px-2">
        <pre className="text-gray-100">
{`import requests
API_KEY = "your_api_key_here"
API_ENDPOINT = "https://tryBookAI.com/api/generate-book"
headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}
data = {
    "api": "openai",
    "model": "gpt-3.5-turbo",
    "topic": "The Future of Artificial Intelligence",
    "language": "English",
    "word_count": 5000
}
response = requests.post(API_ENDPOINT, json=data, headers=headers)
if response.status_code == 200:
    result = response.json()
    print(f"Book generation started. Job ID: {result['job_id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")`}
        </pre>
      </div>
      <h1 className='text-xl font-semibold text-slate-400 mt-8 pb-2 px-2'>
        JavaScript (Node.js)
      </h1>
      <div className="border border-slate-700 p-4 rounded px-2">
        <pre className="text-gray-100">
{`const axios = require('axios');
const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';
const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};
const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
};
axios.post(API_ENDPOINT, data, { headers })
    .then(response => {
        console.log(\`Book generation started. Job ID: \${response.data.job_id}\`);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });`}
        </pre>
      </div>
    </div>
  )
}

export default CodeExample