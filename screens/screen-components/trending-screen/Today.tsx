

return (
  <>
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: "white",
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item title="All" />
      <Tab.Item title="Friends" />
      <Tab.Item title="For You" />
    </Tab>
    <ScrollView>
      {filteredUsers.map((user) => {
        return (
          <>
            <UserEntry user={user} />
          </>
        );
      })}

    </ScrollView>
  </>
);