import { ContainerStats, TitleStats, List, StatLi } from './Statistics.styled';

export const StatisticsCard = ({ stats }) => {
  return (
    <ContainerStats>
      <TitleStats>UPLOAD STATS</TitleStats>
      <List>
        {stats.map(item => (
          <StatLi key={item.id} dataId={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </StatLi>
        ))}
      </List>
    </ContainerStats>
  );
};
