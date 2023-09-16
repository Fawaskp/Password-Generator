import React from 'react'

function PasswordSuggestion() {
    return (
        <div className='m-6' >
            <h1 className='font-bold text-xl my-3' >Create Strong password</h1>
            <h4 className='font-medium text-md my-1' >Password security starts with creating a strong password. A strong password is:</h4>
            <ul className="ms-6 text-sm mt-4 space-y-1 list-disc list-inside text-gray-600">
                <li>At least 12 characters long but 14 or more is better.</li>
                <li>A combination of uppercase letters, lowercase letters, numbers, and symbols.</li>
                <li>Not a word that can be found in a dictionary or the name of a person, character, product, or organization.</li>
                <li>Significantly different from your previous passwords.</li>
                <li>Easy for you to remember but difficult for others to guess. Consider using a memorable phrase like "6MonkeysRLooking^".</li>
            </ul>
    </div >
  )
}

export default PasswordSuggestion
