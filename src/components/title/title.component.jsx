import React from 'react';
import './title.styles.css'

const TitleComponent = ({title, subtitle }) => (
<div className = 'title'>
<h3>{title}</h3>
<p>{subtitle}</p>

</div>
)

export default TitleComponent;