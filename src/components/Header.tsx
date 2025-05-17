
import React from 'react';
import './Header.css';
import { job } from '../data/candidates';
import { ArrowLeft } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-top">
          <button className="btn-back">
            <ArrowLeft size={18} />
          </button>
          <h1 className="header-title">{job.title}</h1>
          <div className="header-page-indicator">1 of 8</div>
          
          <div className="header-actions">
            <button className="btn btn-outline">
              <span>...</span>
            </button>
            <button className="btn btn-primary">
              <span>Share & Promote</span>
            </button>
          </div>
        </div>
        
        <div className="header-details">
          <div className="header-tag">
            <span className="status-indicator"></span>
            <span>{job.status}</span>
          </div>
          <div className="header-separator">•</div>
          <div className="header-detail">{job.position}</div>
          <div className="header-separator">•</div>
          <div className="header-detail">{job.location}</div>
          <div className="header-separator">•</div>
          <div className="header-detail">
            Created by <span className="created-by">{job.createdBy}</span>
          </div>
        </div>
      </div>
      
      <div className="nav-tabs">
        <button className="nav-tab active">Candidates</button>
        <button className="nav-tab">Job Info</button>
        <button className="nav-tab">Calendar</button>
        <button className="nav-tab">Score Card</button>
        <button className="nav-tab">Activity</button>
        <button className="nav-tab">Application Form</button>
        <button className="nav-tab">Automation <span className="badge">5</span></button>
      </div>
    </div>
  );
};

export default Header;
