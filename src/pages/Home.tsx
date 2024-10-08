import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css'; // Default styling for CodeMirror
import 'codemirror/theme/material.css'; // Optional: Material theme for CodeMirror

// Importing modes for different languages (example with JavaScript)
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import { error } from 'console';
import { paste } from '@testing-library/user-event/dist/paste';

const Home = () => {
  const [inputCode, setInputCode] = useState('');
  const [outputCode, setOutputCode] = useState('');

  const handleConvert = () => {
    // Convert the code here
  }

  return (
    <>
      <Navbar />
      <div className='container flex  w-full ' style={{minHeight: '87vh'}}>
        <div className='input-box  w-2/5' style={{ minHeight: '87vh' }}>
          <h3 className='text-lg text-white font-semibold p-2 '>Paste your JS code here:</h3>
          <CodeMirror
            value={inputCode}
            options={{
              mode: 'javascript',
              theme: 'material',
              lineNumbers: true,
            }}
            onBeforeChange={(editor, data, value) => {
              setInputCode(value);
            }}
            className='border border-gray-300 rounded-md p-2 m-2 ' // h-full makes CodeMirror fill its container
          />
          <button className='m-2 text-white bg-gradient-to-r from-blue-800 to-purple-800 px-4 py-4 rounded-lg shadow-lg flex items-center hover:bg-gradient-to-r hover:from-purple-800 hover:to-blue-800 transition-all duration-400' onClick={() => {
            try {
              eval(inputCode);
              alert('No errors found!');
            } catch (error) {
              alert(error);
              console.log(error);
            }
          }}>Check for Errors</button>
        </div>

        <div className='processing-button flex items-center justify-center  w-1/5' style={{ minHeight: '87vh' }}>
          <button className='text-white bg-gradient-to-r from-blue-800 to-purple-800 px-4 py-4 rounded-lg shadow-lg flex items-center hover:bg-gradient-to-r hover:from-purple-800 hover:to-blue-800 transition-all duration-400' onClick={handleConvert}
          >Convert</button>
        </div>

        <div className='output-box  w-2/5' style={{ minHeight: '87vh' }}>
          <h3 className='text-lg text-white font-semibold p-2 '>You converted code here:</h3>
          <CodeMirror
            value={outputCode}
            options={{
              mode: 'python',
              theme: 'material',
              lineNumbers: true,
            }}
            onBeforeChange={(editor, data, value) => {
              setOutputCode(value);
            }}
            className='border border-gray-300 rounded-md p-2 m-2 ' // h-full makes CodeMirror fill its container
          />
        </div>
      </div>
    </>
  );
};

export default Home;