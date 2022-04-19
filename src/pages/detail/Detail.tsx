import React from 'react';
import {useParams} from 'react-router-dom';

export const Detail:React.FC = () => {
  let { id } = useParams();

  return (
    <div>
      <h1>{id} 详情页</h1>
    </div>
  );
};
