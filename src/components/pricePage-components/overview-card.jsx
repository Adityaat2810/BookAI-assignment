import React from 'react'

export function OverviewCard() {
    return (
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-300 
         mb-4 mt-10">
            Overview
        </h2>
        <p className="text-gray-300">
          The Book Generator API allows you to generate books on various topics
          using different language models. This documentation provides details
          on how to use the API, including authentication, available endpoints,
          and code examples.
        </p>
      </div>
    );
  }
