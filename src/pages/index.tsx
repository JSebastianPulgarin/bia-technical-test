import type { GetServerSideProps } from 'next';

const Index = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/home',
      permanent: false,
    },
  };
};

export default Index;
