import React from 'react';

const Loader = () => {
    const text = "Loading...";
    return (
        <div className='load-section'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-32 h-32 mb-6">
                <circle fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="15" r="15" cx="35" cy="100">
                    <animate attributeName="cx" calcMode="spline" dur="2s" values="35;165;165;35;35"
                        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
                        repeatCount="indefinite" begin="0s" />
                </circle>
                <circle fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="15" opacity=".8" r="15" cx="35" cy="100">
                    <animate attributeName="cx" calcMode="spline" dur="2s" values="35;165;165;35;35"
                        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
                        repeatCount="indefinite" begin="0.05s" />
                </circle>
                <circle fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="15" opacity=".6" r="15" cx="35" cy="100">
                    <animate attributeName="cx" calcMode="spline" dur="2s" values="35;165;165;35;35"
                        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
                        repeatCount="indefinite" begin="0.1s" />
                </circle>
                <circle fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="15" opacity=".4" r="15" cx="35" cy="100">
                    <animate attributeName="cx" calcMode="spline" dur="2s" values="35;165;165;35;35"
                        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
                        repeatCount="indefinite" begin="0.15s" />
                </circle>
                <circle fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="15" opacity=".2" r="15" cx="35" cy="100">
                    <animate attributeName="cx" calcMode="spline" dur="2s" values="35;165;165;35;35"
                        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
                        repeatCount="indefinite" begin="0.2s" />
                </circle>
            </svg>
            <div className="wrapper-load">
                {
                    text.split("").map((char, index) => (
                        <span
                            key={index}
                            className={
                                'animate-text'
                            }
                            style={{ animationDelay: `${index * 0.1}s` }}>{char}
                        </span>
                    ))
                }
            </div>
        </div>
    );
};

export default Loader;
