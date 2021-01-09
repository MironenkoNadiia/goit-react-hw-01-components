import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled.section`
display:flex;
`;

const StatList = styled.ul`

`;

const StatItem = styled.li`

`;



function Statistics({ title, stats }) {
    return (
        <Section>
            {title && <h2>{title}</h2>}

            <StatList>
                {stats.map(stat => {
                    return (
                        <StatItem key={stat.id}>
                            <span className="label">{stat.label}</span>
                            <span className="percentage">{stat.percentage}%</span>
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