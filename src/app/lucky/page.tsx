/* eslint-disable import/extensions */
import { Container, Row } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { PageIDs } from '@/utilities/ids';
import pageStyle from '@/utilities/pageStyle';
import ProfileCardHelper from './ProfileCardHelper';

const LuckyPage = async () => {
  const profiles = await prisma.profile.findMany();
  const luckyProfile = profiles[Math.floor(Math.random() * profiles.length)];
  return (
    <Container id={PageIDs.profilesPage} style={pageStyle}>
      <Row xs={1} md={2} lg={4} className="g-2">
        <ProfileCardHelper key={luckyProfile.id} profile={luckyProfile} />
      </Row>
    </Container>
  );
};

export default LuckyPage;
