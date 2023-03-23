import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
function App() {
    return (
        <main className="bg-white dark:bg-black relative">
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 lg:px-0">
                 <ThemeSwitcher/>
                </div>
                <div className="mx-auto max-w-2xl sm:text-center">
                    {/*TODO: color switch*/}
                </div>
                <h2 className="text-brand text-3xl font-bold tracking-tight sm:text-center">Profit Margin
                    Calculator</h2>
                <div className="mt-12 sm:mt-16">
                    <div className="mx-auto max-w-2xl">
                        <div className="bg-white dark:bg-gray-800 shadow rounded-lg px-4 py-8 sm:px-6 sm:py-10">
                            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                <div>
                                    <label htmlFor="cost"
                                           className="block text-sm font-medium text-gray-900 dark:text-gray-100">Calculate your profit margin and see how much you can
                                        charge for your products.</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default App
