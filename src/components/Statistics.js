import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled.section`
background-color:grey;
max-width:700px
`;

const StatList = styled.ul`
list-style:none;
display:flex;
justify-content:center;
`;

const StatItem = styled.li`
display:flex;
flex-direction:column;
margin:30px
`;

const Label = styled.span`
color:white;
`;

const Percentage = styled.span`
color:white;
`;

const Title = styled.h2`
margin-left:300px ;
padding-top:50px
`;



function Statistics({ title, stats }) {
    return (
        <Section>
            {title && <Title>{title}</Title>}

            <StatList>
                {stats.map(stat => {
                    return (
                        <StatItem key={stat.id}>
                            <Label>{stat.label}</Label>
                            <Percentage>{stat.percentage}%</Percentage>
                        </StatItem>
                    );
                })}
            </StatList>
        </Section>
    );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};


export default Statistics;