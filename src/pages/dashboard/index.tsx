import { DashboardFeature } from '@/features';
import { WithLayout } from '@/layouts';

function Dashboard() {
  return <DashboardFeature />;
}

export const DashboardPage = WithLayout(Dashboard);
