import React from 'react';
import ReactMarkdown from 'react-markdown';

export function EndpointsComponent() {
  const response = `
\`\`\`
{
  "message": "Book generation started",
  "status": "processing",
  "job_id": "unique-job-identifier"
}
\`\`\`
`;

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-gray-300">
      <h2 className="text-2xl font-semibold text-slate-300 mb-4 pt-10">
        Endpoints
      </h2>
      <h3 className="text-xl font-semibold text-slate-300 mb-2 pt-8">
        Generate Book
      </h3>
      <div className="mb-4 flex flex-col sm:flex-row">
        <span className="bg-cyan-400 text-black px-2 py-1 rounded mr-2 mb-2 sm:mb-0">
          POST
        </span>
        <span className="bg-indigo-600 text-white px-2 py-1 font-medium rounded">
          /api/generate-book
        </span>
      </div>
      <h4 className="text-lg font-semibold text-slate-400 mb-2 mt-10">
        Request Body
      </h4>
      <div className="overflow-x-auto rounded-lg border border-slate-600 mb-6 mt-3">
        <table className="w-full min-w-[500px]">
          <thead className="bg-indigo-500 text-white">
            <tr>
              <th className="p-2 text-left py-3 text-sm">PARAMETER</th>
              <th className="p-2 text-left py-3 text-sm">TYPE</th>
              <th className="p-2 text-left py-3 text-sm">DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="p-2 text-cyan-400 font-medium py-3">api</td>
              <td className="p-2">string</td>
              <td className="p-2">The API provider to use. Options: "openai" or "together"</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-2 text-cyan-400 font-medium py-3">model</td>
              <td className="p-2">string</td>
              <td className="p-2">The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-2 text-cyan-400 font-medium py-3">topic</td>
              <td className="p-2">string</td>
              <td className="p-2">The main topic or theme of the book</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-2 text-cyan-400 font-medium py-3">language</td>
              <td className="p-2">string</td>
              <td className="p-2">The language in which the book should be generated</td>
            </tr>
            <tr>
              <td className="p-2 text-cyan-400 font-medium py-3">word_count</td>
              <td className="p-2">integer</td>
              <td className="p-2">The approximate number of words for the generated book</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4 className="text-lg font-semibold text-zinc-300 mb-2 mt-5">Response</h4>
      <div className="bg-gray-900 p-4 rounded overflow-x-auto">
        <ReactMarkdown className="text-gray-100 text-sm sm:text-base break-words">
          {response}
        </ReactMarkdown>
      </div>
    </div>
  );
}
