const parseFriends = friends => {
  return friends.friends.map(({ avatar, name, isOnline, id }) => (
    <li
      key={id}
      style={{
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        padding: 8,
        border: '1px solid gray',
      }}
    >
      <span
        style={{
          height: '24px',
          width: '24px',
          borderRadius: '50%',
          backgroundColor: isOnline ? 'lightgreen' : 'pink',
        }}
      >
        {isOnline}
      </span>
      <img src={avatar} alt={name} width="48px" />
      <p>{name}</p>
    </li>
  ));
};

export default parseFriends;
