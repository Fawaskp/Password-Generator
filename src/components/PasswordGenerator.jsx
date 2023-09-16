import React, { useState } from 'react';
import { FaCopy, FaEye, FaEyeSlash } from 'react-icons/fa';
import ToggleButton from './ToggleButton';
import CopyToClipboard from 'react-copy-to-clipboard';


export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercaseLetters, setIncludeUppercaseLetters] = useState(true);
  const [includeLowercaseLetters, setIncludeLowercaseLetters] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [showWarning, setShowWarning] = useState(false);

  const [isPasswordCopied, setIsPasswordCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const handleCopy = () => {
    setIsPasswordCopied(true);
    setTimeout(() => {
      setIsPasswordCopied(false);
    }, 4000);
  };

  const generatePassword = () => {
    if (passwordLength < 6) {
      setPassword('');
      return;
    }
    if (!(includeUppercaseLetters || includeLowercaseLetters || includeNumbers || includeSpecialChars)) {
      setShowWarning(true);
      setPassword('');
      return;
    }

    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%&*()_-+={}[]|:;<>?/';

    let characters = '';

    if (includeUppercaseLetters) {
      characters += uppercaseLetters;
    }

    if (includeLowercaseLetters) {
      characters += lowercaseLetters;
    }

    if (includeNumbers) {
      characters += numbers;
    }

    if (includeSpecialChars) {
      characters += specialChars;
    }

    let newPassword = '';
    const charactersLength = characters.length;

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      newPassword += characters.charAt(randomIndex);
    }

    setPassword(newPassword);
    setShowWarning(false);

  };

  return (
    <div className='flex flex-col w-2/3 max-w-2xl' >
      <div className="rounded-md font-verdana shadow-xl p-14">
        <h1 className="font-bold text-3xl text-center mb-8 ">Password Generator</h1>
        {showWarning && (
          <div className="bg-red-200 text-red-600 p-2 rounded-md mb-4">
            Please select at least one option.
          </div>
        )}
        <div className="mb-4 flex flex-col">
          <label htmlFor="default-range" className="block mb-2 text-md font-semibold text-gray-900">
            Password Size
          </label>
          <div className='flex items-center' >
            <input
              id="default-range"
              type="range"
              value={passwordLength}
              className="w-5/6 mx-6 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              onChange={(e) => setPasswordLength(e.target.value)}
              min="6"
              max={50}
            />
            {
              passwordLength &&
              <span>
                {passwordLength}
              </span>
            }
          </div>
        </div>

        <div className='flex flex-col max-w-fit' >
          <ToggleButton label={'Include Upper Case'} state={includeUppercaseLetters} setState={setIncludeUppercaseLetters} />
          <ToggleButton label={'Include Lower Case'} state={includeLowercaseLetters} setState={setIncludeLowercaseLetters} />
          <ToggleButton label={'Include Numbers'} state={includeNumbers} setState={setIncludeNumbers} />
          <ToggleButton label={'Include Special Characters'} state={includeSpecialChars} setState={setIncludeSpecialChars} />
        </div>

        <div className="text-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md  hover:bg-blue-600"
            onClick={generatePassword}
          >
            Generate
          </button>
        </div>
      </div>
      {password && (
        <div className="mt-8 flex justify-center text-center">
          <div className="w-full">
            <strong>Generated Password</strong>
            <div className="border border-gray-300 rounded-md p-2 mt-2 flex items-center">
              {showPassword ? (
                <span className="flex-grow">{password}</span>
              ) : (
                <span className="flex-grow">{Array(password.length).fill('•').join('')}</span>
              )}
              <button
                className="focus:outline-none"
                onClick={()=>setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <CopyToClipboard text={password} onCopy={handleCopy}>
                <button className="ml-2 focus:outline-none">
                  {isPasswordCopied ? 'Copied!' : <FaCopy />}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
