import { ContainerStats, TitleStats, List, StatLi } from './Statistics.styled';

export const StatisticsCard = ({ stats, title }) => {
  return (
    <ContainerStats>
      {title && <TitleStats>{title}</TitleStats>}
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
