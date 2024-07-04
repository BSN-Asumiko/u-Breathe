import githubProfiles from '../../utils/githubProfiles';
import UserCard from './UserCard/UserCard';

const ProfilesList = () => {

    return (
        <div className="user-profile-list">
            {githubProfiles.map((user, index) => (
            <UserCard key={index} user={user} />
            ))}
        </div>
    );
};

export default ProfilesList;
