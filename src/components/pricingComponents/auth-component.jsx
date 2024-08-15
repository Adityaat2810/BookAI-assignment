
export function AuthComponet() {
    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">
                Authentication
            </h2>
            <p className="text-gray-300 mb-4">
                To use the API, you need to include your API key in the header of each request:
            </p>
            <div className="border border-zinc-600 p-3 py-4 rounded mb-4">
                <code className="text-gray-200">
                    X-API-Key: YOUR_API_KEY
                </code>
            </div>
            <p className="text-gray-300 mb-4">
                To generate an API key, use the button below:
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-gray-800 font-semibold py-2 
            px-4 rounded">
                Generate API Key
            </button>

            <div className="border border-zinc-600 p-3 rounded mb-4  py-4 mt-4 ">
                <code className="text-gray-200">
                    Your API Key: 9jTs7tHaZNYEw-fLj_6rCq9j-d1TU7-9q9RZERdD3op
                </code>
            </div>
        </div>

        



    )
}

