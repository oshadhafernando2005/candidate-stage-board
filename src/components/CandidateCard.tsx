
import React from 'react';
import './CandidateCard.css';
import { Candidate } from '../data/candidates';

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  return (
    <div className="candidate-card">
      <div className="candidate-header">
        <div className="candidate-avatar">
          {candidate.avatar ? (
            <img src={candidate.avatar} alt={candidate.name} />
          ) : (
            <div className="avatar-placeholder">
              {candidate.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="candidate-info">
          <h3 className="candidate-name">{candidate.name}</h3>
          <p className="candidate-applied">Applied at {candidate.appliedAt}</p>
        </div>
      </div>
      
      <div className="candidate-footer">
        <div className="candidate-rating">
          {candidate.rating > 0 ? (
            <>
              <span className="star">★</span>
              <span>{candidate.rating} Overall</span>
            </>
          ) : (
            <div className="add-assessment">
              <span>+ Add Assessment</span>
            </div>
          )}
        </div>
        
        {candidate.referred && (
          <div className="candidate-referred">
            <span>Referred</span>
          </div>
        )}
        
        <button className="candidate-menu">
          <span>...</span>
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;
