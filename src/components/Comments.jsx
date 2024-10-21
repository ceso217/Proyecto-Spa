"use client"; // Este componente será un Componente del Cliente

import React, { useEffect } from 'react';
import commentBox from 'commentbox.io';

const Comments = () => {
  useEffect(() => {
    commentBox('5696284086239232-proj'); // Reemplaza con tu ID de CommentBox
  }, []);

  return <div className="commentbox" />;
};

export default Comments;