import "./userCard.css"

const UserCard = ({ user }) => {
    return (
        <div className="card">
            <img src={user.avatar} alt="GitHub user avatar" className="avatar" />
            <div className="user-info">
                <h4 className="user-name">{user.name}</h4>
                <p className="user-rol">{user.rol}</p>
                <a href={user.link} target="_blank" className="user-link">GitHub Profile</a>
            </div>
        </div>
    );
};

export default UserCard;
