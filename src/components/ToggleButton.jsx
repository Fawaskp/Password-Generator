import React from 'react'

function ToggleButton({state,setState,label}) {
    return (
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
            <input
                type="checkbox"
                checked={state}
                className="sr-only peer"
                onChange={() => setState(!state)}
            />
            <div
                className={`w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 ${state
                    ? 'peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800'
                    : ''
                    } rounded-full peer dark:bg-gray-700 ${state
                        ? 'peer-checked:after:translate-x-full peer-checked:after:border-white'
                        : ''
                    } after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all ${state ? 'peer-checked:bg-blue-600' : ''
                    }`}
            ></div>
            <span className="ml-3 text-md font-medium text-gray-900">{label}</span>
        </label>
    )
}

export default ToggleButton
