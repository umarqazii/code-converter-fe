import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import toast from 'react-hot-toast';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';

const Home = () => {
  const [inputCode, setInputCode] = useState('');
  const [fromLanguage, setFromLanguage] = useState('JavaScript');
  const [toLanguage, setToLanguage] = useState('Python');
  const [outputCode, setOutputCode] = useState('');

  const handleConvert = async () => {
    if (!inputCode.trim()) {
      toast.error('Input code is required!');
      return;
    }
  
    const requestBody = {
      code: inputCode,
      fromLanguage: fromLanguage,
      toLanguage: toLanguage,
    };
  
    try {
      const response = await axios.post('http://localhost:5000/convert', requestBody);
      
      if (response.data.success) {
        setOutputCode(response.data.convertedCode);
        toast.success('Code converted successfully!');
      } else {
        toast.error('Failed to convert the code.');
      }
    } catch (error) {
      console.error('Error converting code:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };
  

  return (
    <>
      <Navbar />
      <div className='container mx-auto px-4 py-10 flex flex-col md:flex-row md:flex-wrap items-center md:items-start justify-center ' style={{minHeight: '87vh'}}>
        
        {/* Input Section */}
        <div className='input-box w-full md:w-2/5 mb-6 md:mb-0'>
          <h3 className='text-lg text-white font-semibold mb-4 text-center md:text-left'>Paste your JS code here:</h3>
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
            className='border border-gray-300 rounded-md p-2'
          />
          <button
            className='mt-4 w-full md:w-auto px-4 py-2 bg-gradient-to-r from-blue-800 to-purple-800 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none'
            onClick={() => {
              try {
                eval(inputCode);
                toast.success('no errors!',{
                  style: {
                    fontSize: '1.2rem',
                  },
                  position: 'bottom-left',
                  duration: 4000,
                });
              } catch (error) {
                //alert(error);
                console.log(error);
                toast.error('' + error,{
                  style: {
                    fontSize: '1.2rem',
                  },
                  position: 'bottom-left',
                  duration: 4000,
                });
              }
            }}>
            Check for Errors
          </button>
        </div>

        {/* Convert Button */}
        <div className='processing-button flex justify-center w-full md:w-1/5 mb-6 md:mb-0'>
          <button
            className='w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-800 to-purple-800 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none'
            onClick={handleConvert}
          >
            Convert
          </button>
        </div>

        {/* Output Section */}
        <div className='output-box w-full md:w-2/5'>
          <h3 className='text-lg text-white font-semibold mb-4 text-center md:text-left'>Your converted code here:</h3>
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
            className='border border-gray-300 rounded-md p-2'
          />
        </div>
      </div>
    </>
  );
};

export default Home;
