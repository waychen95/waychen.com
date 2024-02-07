import React from 'react';
import { Card, CardContent, Typography} from '@mui/material';
import '../styles/Portfolio.css';

const ExperienceCard = ({ title, date, company, description }) => {

  return (
    <Card className={'card'}>
      <CardContent>
        <Typography className='title' color="textPrimary" gutterBottom>
          {title}
        </Typography>
        <Typography className='date' color="textSecondary">
          {date}
        </Typography>
        <Typography className='description' color="textPrimary">
          {company}
        </Typography>
        <Typography className={'description'} color="textPrimary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
      <ExperienceCard
        title="Education Coordinator"
        date="Oct 2022 - April 2023"
        company="Elite Education Institute"
        description="Utilized strong organizational and communication skills to guide students in achieving academic goals. Enhanced scheduling for teachers and students, ensuring seamless coordination and efficient resource allocation. Demonstrated proficiency in administrative tasks, ensuring smooth operations within a dynamic educational environment."
      />
      <ExperienceCard
        title="Research Assistant"
        date="April 2021 - August 2022"
        company="UBC Psychology Department - MAGIC (Motivations and Goals in Contexts) Lab"
        description="Conducted precise data entry and coding using Microsoft Excel. Responded promptly to project-related emails, demonstrating effective communication skills in a collaborative research environment."
      />
    </div>
  );
};

export default Portfolio;
