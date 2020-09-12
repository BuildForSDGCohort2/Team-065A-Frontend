import React from 'react';
import './title.styles.css';
import GraduationCapIcon from '../icons/graduation.components';

const TitleComponent = ({title, subtitle }) => (
<div className = 'title'>
<h3>{title}</h3>
<p>{subtitle}</p>
<div>
  <h6 className = 'span'> 
 <GraduationCapIcon/>
  </h6>
</div>
</div>
)

export default TitleComponent;