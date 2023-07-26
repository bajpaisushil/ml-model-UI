import React from 'react';
import { Link } from 'react-router-dom';


function handleFileClick() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf, .jpg'; // Add your preferred file types here
    fileInput.multiple = true; // Enable multiple file selection
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', function() {
      const files = fileInput.files;
      // Add your logic to handle the selected files here
      // You can filter the files by type (e.g., .pdf, .jpg) using their file extensions.
      console.log(files);
    });
    fileInput.click();
}

function TopBar() {
  return (
    <div className='topbar'>
        <div className='topbar-left'>
            <ul className='topbar-container'>
                <li className='topbar-list' onClick={handleFileClick}>
                    <img src={require("../icons/projectIcon.png")} alt='project' height={40} />
                    <div>Projects</div>
                </li>
                <li className='topbar-list' onClick={handleFileClick}>
                    <img src={require("../icons/solutionIcon.png")} alt='solution' height={30} />
                    <div>Solutions</div>
                </li>
                <li className='topbar-list' onClick={handleFileClick}>
                    <img src={require("../icons/docsIcon.png")} alt='docs' height={30} />
                    <div>Docs</div>
                </li>
                <li className='topbar-list' onClick={handleFileClick}>
                    <img src={require("../icons/dataIcon.png")} alt='data' height={30} />
                    <div>Data</div>
                </li>
            </ul>
        </div>
        <div className='topbar-right'>
        <ul className='topbar-container'>
                <li className='topbar-list'>
                    <Link to='/xai' className='topbar-right-links'>XAI</Link>
                </li>
                <li className='topbar-list'>
                    <Link to='/api' className='topbar-right-links'>API</Link>
                </li>
                <li className='topbar-list'>
                    <Link to='/use-cases' className='topbar-right-links'>Use Cases</Link>
                </li>
                <li className='topbar-list'>
                    <Link to='/methods' className='topbar-right-links'>Methods</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default TopBar;
