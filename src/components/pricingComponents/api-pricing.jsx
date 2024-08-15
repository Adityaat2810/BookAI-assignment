import React from 'react';

export function ApiPricingComponent() {
    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-gray-300">
            <h2 className="text-2xl font-semibold text-gray-200
       pt-10 mb-1">API Pricing</h2>
            <p className="mb-4">
                Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
            </p>

            <div className='border rounded-lg border-gray-600'>
                <table className="w-full mb-6 rounded-full">
                    <thead className="bg-indigo-500 text-white text-sm rounded-3xl px-1 py-2">
                        <tr >
                            <th className="p-2 text-left py-5">API</th>
                            <th className="p-2 text-left py-5">MODEL</th>
                            <th className="p-2 text-left py-5">PRICE PER 1K TOKENS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-700">
                            <td className="p-2 py-5">OpenAI</td>
                            <td className="p-2 py-5">GPT-3.5</td>
                            <td className="p-2 py-5">$0.002</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <td className="p-2 py-5">OpenAI</td>
                            <td className="p-2 py-5">GPT-4</td>
                            <td className="p-2 py-5">$0.03</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <td className="p-2 py-5">Together AI</td>
                            <td className="p-2 py-5">Llama-2-70b</td>
                            <td className="p-2 py-5">$0.0008</td>
                        </tr>
                        <tr>
                            <td className="p-2 py-5">Together AI</td>
                            <td className="p-2 py-5">Llama-2-13b</td>
                            <td className="p-2 py-5">$0.0006</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 
              className="text-xl font-semibold text-gray-200 mb-2 mt-5"
            >
                Token Estimation
            </h3>
            <p className="mb-4">
                On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
            </p>

            <h3 className="text-xl font-semibold text-gray-200 mb-2">Billing</h3>
            <p>
                You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
            </p>
        </div>
    );
}