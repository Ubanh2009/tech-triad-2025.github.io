'use client';
import React, { useState } from "react";

const Page = () => {
  const [fileList, setFileList] = useState<File[]>([]);

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    const dropBox = document.getElementById("dropBox");
    if (dropBox) dropBox.classList.add("hover");
  };

  const handleDragLeave = () => {
    const dropBox = document.getElementById("dropBox");
    if (dropBox) dropBox.classList.remove("hover");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dropBox = document.getElementById("dropBox");
    if (dropBox) dropBox.classList.remove("hover");

    const files = e.dataTransfer.files;
    const fileArray = Array.from(files);
    setFileList(fileArray);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <img
            src="WhatsApp Image 2025-01-15 at 2.25.12 PM.jpeg"
            alt="Logo"
            width="180"
            height="60"
          />
          <a className="nav-link active" aria-current="page" href="#">
            Dashboard
          </a>
          <a className="nav-link" href="#">
            Search Vendor
          </a>
          <a className="nav-link" href="#">
            RFQ Management
          </a>
          <a className="nav-link" href="#">
            Technical Evaluation
          </a>
          <a className="nav-link" href="#">
            Compare received quotes
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  My Account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Edit Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Vendor Management
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Project Management
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Change Password
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <hr />

      <div className="header">
        <h1>MAGIC SEARCH</h1>
      </div>

      <div className="content">
        {/* Procedure Box */}
        <div className="procedure-box">
          <h2>Step 1:</h2>
          <p>Download, fill and upload the BOQ file for smooth RFQ Creation</p>
          <h2>Step 2:</h2>
          <p>Upload Your File and other details.</p>
        </div>

        {/* Drag and Drop Box */}
        <div
          id="dropBox"
          className="drop-box"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          Drag & Drop Files Here
        </div>
      </div>

      {/* File List */}
      <ul className="file-list">
        {fileList.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>

      {/* Generate Button */}
      <button className="generate-btn">Generate BOQ</button>
    </div>
  );
};

export default Page;
