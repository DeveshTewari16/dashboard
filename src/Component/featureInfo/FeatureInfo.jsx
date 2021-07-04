import React from 'react'
import "./featureInfo.css";
import {ImportExport,SwapVert} from '@material-ui/icons/';

export default function FeatureInfo() {
    return (
        <div className="feature">
            <div className="featureItem">
                <span className="featureTittle">Revenue Details</span>
                    <div className="revenueDetails">
                        <span className="revenueDetails"><SwapVert className="swapVert"/>-2412</span>
                        <span className="netrateChange"><SwapVert className="swapVert"/>-10.01%</span>
                        <span className="lastquarterDetails">Compared to Last Quarter</span>
        
                    </div>
                    </div>
                    <div/>
                    <div className="featureItem">
                    <span className="featureTittle">Current Quarter Details</span>
                    <div className="revenueDetails">
                        <span className="revenueDetails"><SwapVert className="swapVert"/>+2412</span>
                        <span className="netrateChange"><SwapVert className="swapVert"/>9.01% </span>
                        <span className="lastquarterDetails">Compared to Last Quarter</span>

                    </div>
                </div>

                <div className="featureItem">
                    <span className="featureTittle">Future Forecast details</span>
                    <div className="revenueDetails">
                        <span className="revenueDetails"><SwapVert className="swapVert"/>+2900</span>
                        <span className="netrateChange"><SwapVert className="swapVert"/>+11.01 </span>
                        <span className="lastquarterDetails">Compared to Last Quarter</span>

                    </div>
                </div> 
            
        </div>
    )
}
