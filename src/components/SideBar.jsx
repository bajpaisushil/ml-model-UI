import React from 'react';


function SideBar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-component'>
            <div className='sidebar-headings'>
                Connectors & Data Pipelines
            </div>
            <ul className='sidebar-list-container'>
                <li className='sidebar-list-component'><a href='#' className='sidebar-links'>NetSuite</a></li>
                <li className='sidebar-list-component'><a href='#' className='sidebar-links'>Salesforce</a></li>
                <li className='sidebar-list-component'><a href='#' className='sidebar-links'>Microsoft Dynamics</a></li>
                <li className='sidebar-list-component'><a href='#' className='sidebar-links'>LinkedIn</a></li>
                <li className='sidebar-list-component'><a href='#' className='sidebar-links'>Adobe Analytics</a></li>
                <li className='sidebar-list-component'><a href='#' className='sidebar-links'>Microsoft SharePoint</a></li>
                <li className='sidebar-list-component'><a href='#' className='sidebar-links'>{`>> More ...`}</a></li>
            </ul>
        </div>
        <div className='sidebar-component'>
            <div className='sidebar-headings'>
                Open Data API +
            </div>
            <ul className='sidebar-list-container'>
                <li className='sidebar-list-component'><a href='#' className='sidebar-links'>D&B Company Lists</a></li>
                <li className='sidebar-list-component'><a href='#' className='sidebar-links'>Genomic Data for Virus</a></li>
                <li className='sidebar-list-component'><a href='#' className='sidebar-links'>National Parks Reservation</a></li>
                <li className='sidebar-list-component'><a href='#' className='sidebar-links'>USDOT Motor Carrier Search</a></li>
                <li className='sidebar-list-component'><a href='#' className='sidebar-links'>Accuweather</a></li>
                <li className='sidebar-list-component'><a href='#' className='sidebar-links'>Flarity</a></li>
                <li className='sidebar-list-component'><a href='#' className='sidebar-links'>{`>> More ...`}</a></li>
            </ul>
        </div>
        <div className='sidebar-component'>
            <div className='sidebar-headings'>
                Data Visualization
            </div>
            <ul className='sidebar-list-container'>
                <img src={require("../icons/datavisualize.jpg")} alt='data visualization' width='fit-content' height={170} />
            </ul>
        </div>
    </div>
  )
}

export default SideBar;
