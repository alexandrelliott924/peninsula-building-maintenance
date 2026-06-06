import { createContext, useState } from 'react';

export const SuccessPageContext = createContext();

export function SuccessPageProvider({ children }) {
    const [showSuccessPage, setShowSuccessPage] = useState(false);

    return (
        <SuccessPageContext.Provider value={{ showSuccessPage, setShowSuccessPage }}>
            {children}
        </SuccessPageContext.Provider>
    );
}
