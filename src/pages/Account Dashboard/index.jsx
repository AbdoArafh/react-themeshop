import { createElement, useState } from "react"
import Dashboard from './dashboard'
import Orders from './orders'
import BillingAdresses from './billingAdresses'
import AccountDetails from './accountDetails'

export default function AccountDashboard() {
    const sections = {
        "Dashboard": Dashboard,
        "Orders": Orders,
        "Billing Adresses": BillingAdresses,
        "Account Details": AccountDetails
    };
    const [chosenSection, setChosenSection] = useState(Object.keys(sections)[0]);

    function handleSectionNavigation(event) {
        const sectionName = event.target.dataset.name;
        if (sectionName) {
            setChosenSection(sectionName);
        }
        return false;
    }

    return (
        <div className="account-dashboard container mx-auto my-20">
            <div className="text-center uppercase text-gray-500">Your Account Details</div>
            <h1 className="text-center font-semibold text-5xl my-16">My Account</h1>
            <ul className="navigation flex flex-row justify-center gap-10 mt-32 mb-10">
                {Object.keys(sections).map(
                    (sectionName, i) => (
                        <li
                            key={i.toString()}
                            data-name={sectionName}
                            onClick={handleSectionNavigation}
                            className={`${sectionName === chosenSection ? "text-black" : "text-gray-500"} cursor-pointer hover:text-black transition-colors`}
                        >
                            {sectionName}
                        </li>
                    )
                )}
            </ul>
            <div className="content">
                {createElement(sections[chosenSection], {navigate: handleSectionNavigation}, null)}
            </div>
        </div>
    )    
}