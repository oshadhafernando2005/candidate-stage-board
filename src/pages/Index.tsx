
import React from 'react';
import Header from '../components/Header';
import Toolbar from '../components/Toolbar';
import KanbanBoard from '../components/KanbanBoard';
import './Index.css';

const Index = () => {
  return (
    <div className="recruitment-app">
      <Header />
      <Toolbar />
      <KanbanBoard />
    </div>
  );
};

export default Index;
