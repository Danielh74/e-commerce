import React from 'react'

function NavigateButton({ children, onClick }: { children: string, onClick: React.MouseEventHandler<HTMLButtonElement> }) {
    return (
        <button
            onClick={onClick}
            className='hover:cursor-pointer hover:border-b-2'>
            {children}
        </button>
    )
}

export default NavigateButton;