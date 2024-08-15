
export function AuthComponet() {
    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">Authentication</h2>
            <p className="text-gray-300 mb-4">
                To use the API, you need to include your API key in the header of each request:
            </p>
            <div className="bg-gray-900 p-3 rounded mb-4">
                <code className="text-green-400">X-API-Key: YOUR_API_KEY</code>
            </div>
            <p className="text-gray-300 mb-4">
                To generate an API key, use the button below:
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                Generate API Key
            </button>
        </div>

        



    )
}

