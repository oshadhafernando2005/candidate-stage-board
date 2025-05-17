
import React from 'react';
import './Toolbar.css';
import { ChevronDown } from 'lucide-react';

const Toolbar: React.FC = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        
        <div className="filter-group">
          <button className="filter-btn">
            <span>Date Range</span>
            <ChevronDown size={16} />
          </button>
          
          <button className="filter-btn">
            <span>Score Range</span>
            <ChevronDown size={16} />
          </button>
          
          <button className="filter-btn">
            <span>Advance Filter</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
      
      <div className="toolbar-right">
        <button className="filter-btn">
          <span>Refer People</span>
        </button>
        
        <button className="filter-btn">
          <span>Kanban</span>
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
