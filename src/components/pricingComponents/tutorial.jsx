import React from 'react'

function TutorialComponet() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-gray-300">

        <h1 className='text-2xl pt-10 font-semibold'>
            Tutorial
        </h1>

        <h1 className='pt-10 text-slate-400 text-xl font-medium'>
        Step 1: Obtain an API Key
        </h1>

        <p>
        Generate an API key using the button in the Authentication section above.
        </p>

        <h1 className='pt-10 text-slate-400 text-xl font-medium'>
        Step 2: Make a Request
        </h1>

        <p>
        Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.
        </p>

        <h1 className='pt-10 text-slate-400 text-xl font-medium'>
        Step 3: Handle the Response
        </h1>

        <p>
        The API will return a response with a job ID. You can use this ID to check the status of your book generation job.
        </p>

        <h1 className='pt-10 text-slate-300 text-xl font-medium'>
        Step 4: Retrieve the Generated Book
        </h1>

        <p>
        Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).
        </p>

        
    </div>
  )
}

export default TutorialComponet