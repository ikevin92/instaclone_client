import { useQuery } from '@apollo/client';
import { Grid, Image } from 'semantic-ui-react';
import { GET_USER } from './../../gql/user';
import userAuth from '../../hooks/useAuth';
import ImageNoFound from '../../assets/png/avatar.png';
import './Profile.scss';

const Profile = (props) => {
  const { username, totalPublications } = props;
  const { auth } = userAuth();
  const { data, loading, error, refetch } = useQuery(GET_USER, {
    variables: { username },
  });

  if (loading) return null;
  if (error) return <h1>Usuario no encontrado</h1>;
  const { getUser } = data;

  return (
    <div>
      <Grid className='profile'>
        <Grid.Column width={5} className='profile__left'>
          <Image
            src={getUser.avatar ? getUser.avatar : ImageNoFound}
            avatar
            // onClick={() => username === auth.username && handlerModal('avatar')}
          />
        </Grid.Column>

        <Grid.Column width={11} className='profile__right'>
          {/* <HeaderProfile
            getUser={getUser}
            auth={auth}
            handlerModal={handlerModal}
          />
          <Followers
            username={username}
            totalPublications={totalPublications}
          /> */}
          <div className='other'>
            <p className='name'>{getUser.name}</p>
            {getUser.siteWeb && (
              <a
                href={getUser.siteWeb}
                className='siteWeb'
                target='_blank'
                rel='noopener noreferrer'>
                {getUser.siteWeb}
              </a>
            )}
            {getUser.description && (
              <p className='description'>{getUser.description}</p>
            )}
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Profile;
