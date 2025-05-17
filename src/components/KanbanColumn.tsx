
import React from 'react';
import './KanbanColumn.css';
import { Candidate } from '../data/candidates';
import CandidateCard from './CandidateCard';

interface KanbanColumnProps {
  title: string;
  stage: 'applying' | 'screening' | 'interview' | 'test';
  candidates: Candidate[];
  count: number;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, stage, candidates, count }) => {
  return (
    <div className={`kanban-column ${stage}`}>
      <div className="column-header">
        <div className={`column-title ${stage}`}>
          <span>{title}</span>
          <span className="column-count">{count}</span>
        </div>
        <button className="column-detail">Detail</button>
      </div>
      
      <div className="column-content">
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
