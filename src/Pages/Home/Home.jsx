import React from "react";
import UserCard from "../../components/UserCard/UserCard";

function Home() {
  const users = [
    {
      name: "John Doe",
      age: 15,
    },
    {
      name: "Masha Doe",
      age: 18,
    },
    {
      name: "Pete Doe",
      age: 150,
    },
    {
      name: "Hello",
      age: 150,
    },
    {
      name: "Hello",
      age: 160,
    },
  ];
  return (
    <section className="home">
      <div className="container">
        <h1>About Page</h1>
        <h2>Our Users</h2>
        <div className="container">
          {users.map((user, idx) => {
            return (
              <UserCard
                userName={user.name}
                userAge={user.age}
                key={`${idx}-${user.name}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Home;
