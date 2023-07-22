const parseFriends = friends => {
  return friends.friends.map(({ avatar, name, isOnline, id }) => (
    <li
      key={id}
      className="item"
      style={{
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        padding: 8,
        border: '1px solid gray',
      }}
    >
      <span
        className="status"
        style={{
          height: '24px',
          width: '24px',
          borderRadius: '50%',
          backgroundColor: isOnline ? 'lightgreen' : 'pink',
        }}
      >
        {isOnline}
      </span>
      <img className="avatar1" src={avatar} alt={name} width="48px" />
      <p className="name">{name}</p>
    </li>
  ));
};

export default parseFriends;
