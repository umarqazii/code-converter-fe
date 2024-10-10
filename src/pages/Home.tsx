import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import 'primeicons/primeicons.css';
import toast from 'react-hot-toast';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike'; // For C++ and Java
import './CustomDropdown.css';
import { read } from 'fs';

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
      const response = await axios.post('https://code-converter-be-livid.vercel.app/convert', requestBody);

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

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        toast.success('Code copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy: ', error);
        toast.error('Failed to copy code.');
      });
  };

  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputCode(text);
      toast.success('Code pasted from clipboard!');
    } catch (error) {
      console.error('Failed to paste: ', error);
      toast.error('Failed to paste code.');
    }
  };

  const downloadCode = () => {
    const fileExtensionMap: { [key: string]: string } = {
        JavaScript: 'js',
        Python: 'py',
        'C++': 'cpp', // Corrected here
        Java: 'java',
    };

    const extension = fileExtensionMap[toLanguage];
    const blob = new Blob([outputCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${extension}`; // Here you can set the file name appropriately
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};


  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 py-10 flex flex-col md:flex-row md:flex-wrap items-center justify-center " style={{ minHeight: '88vh' }}>
        
        {/* Input Section */}
        <div className='input-box w-full md:w-2/5 mb-6 md:mb-0'>
          <div className="flex justify-between items-center mb-4">
            <h3 className='text-lg text-white font-semibold text-center md:text-left'>Paste / Type your code here:</h3>
            <select
              value={fromLanguage}
              onChange={(e) => setFromLanguage(e.target.value)}
              className='custom-select'>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="C++">C++</option>
              <option value="Java">Java</option>
            </select>
          </div>
          
          <div className="relative">
            <CodeMirror
              value={inputCode}
              options={{
                mode: toLanguage === 'C++' || toLanguage === 'Java' ? 'clike' : toLanguage.toLowerCase(),
                theme: 'material',
                lineNumbers: true,
              }}
              onBeforeChange={(editor, data, value) => {
                setInputCode(value);
              }}
              className='border border-gray-300 rounded-md p-2'
            />

            {/* Paste Button */}
            <button 
              className="paste-button bg-slate-600 text-white px-3 py-1 rounded-md shadow-md hover:bg-slate-500 transition duration-200 absolute top-5 right-5"
              onClick={pasteFromClipboard}
            >
              <i className="pi pi-clipboard"></i> Paste
            </button>

          </div>

          <div className='flex justify-center'>
          <button
            className='mt-4 w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-800 to-purple-800 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none'
            onClick={() => {
              try {
                eval(inputCode);
                toast.success('No errors!', {
                  style: {
                    fontSize: '1.2rem',
                  },
                  position: 'bottom-left',
                  duration: 4000,
                });
              } catch (error) {
                console.log(error);
                toast.error('' + error, {
                  style: {
                    fontSize: '1.2rem',
                  },
                  position: 'bottom-left',
                  duration: 4000,
                });
              }
            }}
            >
            Check for Errors &nbsp;<i className="pi pi-times-circle" ></i>
          </button>
          </div>  
        </div>

        {/* Convert Button */}
        <div className='processing-button flex justify-center w-full md:w-1/5 mb-6 md:mb-0 '>
          <button
            className='w-full md:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none'
            onClick={handleConvert}
          >
            Convert &nbsp;<i className="pi pi-arrow-right-arrow-left"></i>
          </button>
        </div>

        {/* Output Section */}
        <div className='output-box w-full md:w-2/5 '>
          <div className="flex justify-between items-center mb-4">
            <h3 className='text-lg text-white font-semibold text-center md:text-left'>Your converted code here:</h3>
            <select
              value={toLanguage}
              onChange={(e) => setToLanguage(e.target.value)}
              className="custom-select"
            >
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="C++">C++</option>
              <option value="Java">Java</option>
            </select>
          </div>
          
          <div className="relative">
            <CodeMirror
              value={outputCode}
              options={{
                // if the toLanguage is c++ or java, set the mode to 'clike'
                readOnly: true,
                mode: toLanguage === 'C++' || toLanguage === 'Java' ? 'clike' : toLanguage.toLowerCase(),
                theme: 'material',
                lineNumbers: true,
              }}
              onBeforeChange={(editor, data, value) => {
                setOutputCode(value);
              }}
              className='border border-gray-300 rounded-md p-2'
            />
            <CopyToClipboard text={outputCode} onCopy={() => copyToClipboard(outputCode)}>
              <button className="absolute top-5 right-5 bg-slate-600 text-white px-3 py-1 rounded-md shadow-md hover:bg-slate-500 transition duration-200">
              <i className="pi pi-copy"></i> Copy Code
              </button>
            </CopyToClipboard>
          </div>

          {/* Download Button */}
          <div className='flex justify-center'>
          <button
            className='mt-4 w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-800 to-purple-800 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none'
            onClick={downloadCode}
          >
            Download Code &nbsp;<i className="pi pi-download" ></i>
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
